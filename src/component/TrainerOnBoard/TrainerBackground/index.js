import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import Checkbox from "@material-ui/core/Checkbox";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateTrainerDetailsApicall,
  getTrainerDetails,
  trainerDetail,
} from "action/trainerAct";
import { history } from "helpers";
import "./dropdown.scss";
import { YearDropDown } from "component/common/YearDropdown";
import { CloseIcon } from "component/common/SideBar/SidebarStyled";

const worksMode = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

const TrainerBackgroundFC = ({
  updateTrainerDetailsApicall,
  details,
  trainerDetail,
}) => {
  const [checkedBoxing, setCheckedBoxing] = React.useState(false);
  const [checkedHIIT, setCheckedHIIT] = React.useState(false);
  const [checkedYoga, setCheckedYoga] = React.useState(false);
  const [checkedPilates, setCheckedPilates] = React.useState(false);

  const [currentExperience, setCurrentExperience] = useState({
    workMode: "",
    workLocation: "",
  });
  const [trainerbackgroundData, setTrainerbackgroundData] = useState({
    areaOfExpertise: [],
    clientAssessment: "",
    trainingProcess: "",
    interestInMotto: "",
    awaitingCertification: "",
  });

  const [inputFields, setInputField] = useState([
    {
      orgnization: "",
      job: "",
      years: "",
    },
  ]);

  const [inputCertificatesFields, setinputCertificatesField] = useState([
    {
      certificate: "",
      year: "",
      upload: "",
    },
  ]);
  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };
  const handleChangeCertificateInput = (index, event) => {
    const values = [...inputCertificatesFields];
    values[index][event.target.name] = event.target.value;
    setinputCertificatesField(values);
  };

  const handleAddFields = () => {
    setInputField([...inputFields, { orgnization: "", job: "", years: "" }]);
  };

  const handleAddCertificateFields = () => {
    setinputCertificatesField([
      ...inputCertificatesFields,
      { certificate: "", year: "", upload: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  };
  const handleRemoveCertificateFields = (index) => {
    const values = [...inputCertificatesFields];
    values.splice(index, 1);
    setinputCertificatesField(values);
  };

  const handleSubmit = () => {
    const storeData = {
      areaOfExpertise: trainerbackgroundData.areaOfExpertise,
      previousExperience: inputFields,
      certification: inputCertificatesFields,
      clientAssessment: trainerbackgroundData.clientAssessment,
      trainingProcess: trainerbackgroundData.trainingProcess,
      interestInMotto: trainerbackgroundData.interestInMotto,
      awaitingCertification: trainerbackgroundData.awaitingCertification,
      trainingFacility: currentExperience.workMode === "yes",
    };
    updateTrainerDetailsApicall(storeData).then(() => {
      history.push(`/trainer/availability`);
    });
  };

  useEffect(() => {
    trainerDetail().then((data) => {
      if (data) {
        setTrainerbackgroundData({
          ...trainerbackgroundData,
          areaOfExpertise: [...new Set(data.areaOfExpertise)],
          clientAssessment: data.clientAssessment,
          trainingProcess: data.trainingProcess,
          interestInMotto: data.interestInMotto,
          awaitingCertification: data.awaitingCertification
            ? data.awaitingCertification
            : "",
        });
        if (data.previousExperience) {
          setInputField(data.previousExperience);
        }
        if (data.certification) {
          setinputCertificatesField(data.certification);
        }

        if (
          data.trainingFacility !== null &&
          data.trainingFacility !== undefined
        ) {
          let tempData = {
            workLocation: data.trainingFacilityLocation
              ? data.trainingFacilityLocation
              : "",
            workMode: data.trainingFacility ? "yes" : "no",
          };

          setCurrentExperience(tempData);
        }
        if (data.areaOfExpertise) {
          if (data.areaOfExpertise.indexOf("Boxing") >= 0)
            setCheckedBoxing(true);
          if (data.areaOfExpertise.indexOf("Pilates") >= 0)
            setCheckedPilates(true);
          if (data.areaOfExpertise.indexOf("Yoga") >= 0) setCheckedYoga(true);
          if (data.areaOfExpertise.indexOf("Strength & HIIT") >= 0)
            setCheckedHIIT(true);
        }
      }
    });
  }, []);

  return (
    <>
      <div className="outter_container_bg">
        <div className="container">
          <div className="links_wrapper">
            <div className="outter_links">
              <img src={ArrowBack} alt="icon" />
              <div className="inner_links">
                <Link to="/trainer/about"> Back to About You</Link>
                <div></div>
              </div>
            </div>
            <div className="outter_links">
              <div className="inner_links">
                <Link to="/trainer/availability">Go to Availability</Link>
                <div></div>
              </div>
              <img src={ArrowNext} alt="icon" />
            </div>
          </div>
          <div className="main_wrapper">
            <div className="wrapper_inneritems">
              <h1>Detail out your training background</h1>
              <div className="contents_wrapper">
                <div>
                  <div className="item1">
                    <h6>
                      Tell us what you train! Select all the verticals that
                      apply
                    </h6>
                    <div className="inputs_experience">
                      <Checkbox
                        checked={checkedHIIT}
                        onChange={(e) => {
                          setCheckedHIIT(e.target.checked);

                          if (e.target.checked) {
                            setTrainerbackgroundData({
                              ...trainerbackgroundData,
                              areaOfExpertise: [
                                ...trainerbackgroundData.areaOfExpertise,
                                "Strength & HIIT",
                              ],
                            });
                          } else {
                            const index = trainerbackgroundData.areaOfExpertise.indexOf(
                              "Strength & HIIT"
                            );
                            if (index > -1) {
                              trainerbackgroundData.areaOfExpertise.splice(
                                index,
                                1
                              );
                            }
                          }
                        }}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <div className="checkbox_label">Strength & HIIT</div>
                      <Checkbox
                        checked={checkedBoxing}
                        // checked={true}
                        onChange={(e) => {
                          setCheckedBoxing(e.target.checked);
                          if (e.target.checked) {
                            setTrainerbackgroundData({
                              ...trainerbackgroundData,
                              areaOfExpertise: [
                                ...trainerbackgroundData.areaOfExpertise,
                                "Boxing",
                              ],
                            });
                          } else {
                            const index = trainerbackgroundData.areaOfExpertise.indexOf(
                              "Boxing"
                            );
                            if (index > -1) {
                              trainerbackgroundData.areaOfExpertise.splice(
                                index,
                                1
                              );
                            }
                          }
                        }}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <div className="checkbox_label">Boxing</div>
                      <Checkbox
                        checked={checkedYoga}
                        onChange={(e) => {
                          setCheckedYoga(e.target.checked);

                          if (e.target.checked) {
                            setTrainerbackgroundData({
                              ...trainerbackgroundData,
                              areaOfExpertise: [
                                ...trainerbackgroundData.areaOfExpertise,
                                "Yoga",
                              ],
                            });
                          } else {
                            const index = trainerbackgroundData.areaOfExpertise.indexOf(
                              "Yoga"
                            );
                            if (index > -1) {
                              trainerbackgroundData.areaOfExpertise.splice(
                                index,
                                1
                              );
                            }
                          }
                        }}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <div className="checkbox_label">Yoga</div>
                      <Checkbox
                        checked={checkedPilates}
                        onChange={(e) => {
                          setCheckedPilates(e.target.checked);

                          if (e.target.checked) {
                            setTrainerbackgroundData({
                              ...trainerbackgroundData,
                              areaOfExpertise: [
                                ...trainerbackgroundData.areaOfExpertise,
                                "Pilates",
                              ],
                            });
                          } else {
                            const index = trainerbackgroundData.areaOfExpertise.indexOf(
                              "Pilates"
                            );
                            if (index > -1) {
                              trainerbackgroundData.areaOfExpertise.splice(
                                index,
                                1
                              );
                            }
                          }
                        }}
                        style={{
                          color: "#53BFD2",
                        }}
                      />
                      <div className="checkbox_label">Pilates</div>
                    </div>
                  </div>
                  <div className="item2">
                    <h6>Training experience</h6>
                    {inputFields.map((input, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className="inputs_experience row no-gutters">
                            <div className="col-4 pr-1">
                              <input
                                type="text"
                                placeholder="Name of the organization / GYM"
                                value={input.orgnization}
                                className="w-100"
                                name="orgnization"
                                onChange={(event) =>
                                  handleChangeInput(index, event)
                                }
                              />
                            </div>
                            <div className="col-3 pr-1">
                              <input
                                type="text"
                                placeholder="Job Title"
                                value={input.job}
                                className="w-100"
                                name="job"
                                onChange={(event) =>
                                  handleChangeInput(index, event)
                                }
                              />
                            </div>
                            <div className="col-3">
                              <input
                                type="number"
                                placeholder="Years"
                                className="w-100"
                                name="years"
                                value={input.years}
                                onChange={(event) =>
                                  handleChangeInput(index, event)
                                }
                              />
                            </div>

                            <div className="col-1">
                              {index !== 0 ? (
                                <h5
                                  className="text-danger pl-3"
                                  onClick={() => handleRemoveFields(index)}
                                >
                                  <CloseIcon />
                                </h5>
                              ) : null}
                            </div>

                            <span></span>
                          </div>
                          {index + 1 === inputFields.length ? (
                            <div className="d-flex">
                              <h5 onClick={() => handleAddFields()}>
                                + Add Work Experience
                              </h5>
                            </div>
                          ) : null}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className="item3">
                    <h6>Certifications</h6>
                    {inputCertificatesFields.map(
                      (inputCertificatesField, index) => (
                        <React.Fragment key={index}>
                          <div
                            className="inputs_background row no-gutters"
                            key={index}
                          >
                            <div className="col-6 px-2">
                              <input
                                type="text"
                                placeholder="Certification Title"
                                value={inputCertificatesField.certificate}
                                name="certificate"
                                onChange={(event) =>
                                  handleChangeCertificateInput(index, event)
                                }
                              />
                            </div>
                            <div className="col-5 px-2">
                              <YearDropDown
                                label="Year you were Certified"
                                value={inputCertificatesField.year}
                                name="year"
                                handleChange={(event) =>
                                  handleChangeCertificateInput(index, event)
                                }
                              />
                            </div>
                            <div className="col-1">
                              {index !== 0 ? (
                                <h5
                                  className="text-danger pl-3"
                                  onClick={() =>
                                    handleRemoveCertificateFields(index)
                                  }
                                >
                                  <CloseIcon />
                                </h5>
                              ) : null}
                            </div>

                            {/* <input
                              type="text"
                              placeholder=""
                              value={inputCertificatesField.year}
                              name="year"
                              onChange={(event) =>
                                handleChangeCertificateInput(index, event)
                              }
                              type="number"
                            /> */}
                          </div>
                          {index + 1 === inputCertificatesFields.length ? (
                            <div className="d-flex">
                              <h5 onClick={handleAddCertificateFields}>
                                + Add Certificate's
                              </h5>
                              {/* {index + 1 === inputCertificatesFields.length &&
                              inputCertificatesFields.length !== 1 ? (
                                <h5
                                  className="text-danger pl-3"
                                  onClick={() =>
                                    handleRemoveCertificateFields(index)
                                  }
                                >
                                  Remove
                                </h5>
                              ) : null} */}
                            </div>
                          ) : null}
                        </React.Fragment>
                      )
                    )}
                  </div>
                  <div className="item4">
                    <h6>
                      Are you currently enrolled in any continued education
                      programs?
                    </h6>
                    <div className="inputs_experience">
                      <textarea
                        type="text"
                        name="comment"
                        placeholder="Tell us about any awaiting certifications "
                        value={trainerbackgroundData.awaitingCertification}
                        onChange={(e) =>
                          setTrainerbackgroundData({
                            ...trainerbackgroundData,
                            awaitingCertification: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item5">
                    <h6>
                      Do you have a facility to train new & outside clients?
                    </h6>
                    <div className="row d-flex">
                      <div className="col-6">
                        <select
                          value={currentExperience.workMode}
                          name="workMode"
                          onChange={(e) => {
                            setCurrentExperience({
                              ...currentExperience,
                              workMode: e.target.value,
                            });
                          }}
                        >
                          {worksMode.map((list, index) => (
                            <option value={list.value} key={index}>
                              {list.label}
                            </option>
                          ))}
                        </select>
                        {/* <NormalMultiSelect
                            placeholder="Select Your Answer"
                            value={currentExperience.workMode}
                            arrow={true}
                            name="workMode"
                            options={worksMode}
                            handleChange={(e) => {
                              setCurrentExperience({
                                ...currentExperience,
                                workMode: e.target.value,
                              });
                            }}
                          /> */}
                      </div>
                      {currentExperience.workMode === "yes" ? (
                        <div className="col-6">
                          <div className="inputs_experience_drop">
                            <input
                              type="text"
                              placeholder="Details of facility"
                              value={currentExperience.workLocation}
                              name="answer"
                              onChange={(e) => {
                                setCurrentExperience({
                                  ...currentExperience,
                                  workLocation: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="item6">
                    <h6>Why are you interested in joining Motto?</h6>
                    <div className="inputs_experience">
                      <textarea
                        type="text"
                        name="comment"
                        placeholder="Tell us all about it."
                        value={trainerbackgroundData.interestInMotto}
                        onChange={(e) =>
                          setTrainerbackgroundData({
                            ...trainerbackgroundData,
                            interestInMotto: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item6">
                    <h6>
                      Describe how you assess a client before their first
                      session?
                    </h6>
                    <div className="inputs_experience">
                      <textarea
                        type="text"
                        name="comment"
                        placeholder="Tell us all about it."
                        value={trainerbackgroundData.clientAssessment}
                        onChange={(e) =>
                          setTrainerbackgroundData({
                            ...trainerbackgroundData,
                            clientAssessment: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item6">
                    <h6>Describe your training process & philosophy</h6>
                    <div className="inputs_experience">
                      <textarea
                        type="text"
                        name="comment"
                        placeholder="Tell us all about it."
                        value={trainerbackgroundData.trainingProcess}
                        onChange={(e) =>
                          setTrainerbackgroundData({
                            ...trainerbackgroundData,
                            trainingProcess: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="submit_button">
                    <button
                      type="submit"
                      style={{
                        textDecoration: "none",
                        color: "#FFFFFF",
                      }}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Continue
                      <ArrowHoverBlacked />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={WaterMark} alt="icon" className="bg_watermark" />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  details: state.trainerReducer.details,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateTrainerDetailsApicall,
      getTrainerDetails,
      trainerDetail,
    },
    dispatch
  );
};

const TrainerBackground = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerBackgroundFC);

export default TrainerBackground;
