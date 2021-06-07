import React, { useState, useEffect } from "react";
import { trainerDetail, fileUpload } from "action/trainerAct";
import Radio from "@material-ui/core/Radio";
import ArrowBack from "../../../../assets/files/SVG/Arrow Back.svg";
import "./stylesSetup.scss";
import { Link } from "react-router-dom";
import "./dropdown.scss";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import PaymentSectionSetup from "./SetUpPaymentSection/PaymentSectionSetup";
import SetupPrevModal from "./SetupPrevModal";
import Instagram from "../../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../../assets/files/SVG/Web Icon.svg";
import { history } from "helpers";
import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import { TrainerApi } from "service/apiVariables";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { api } from "service/api";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import ImageBG from "../../../../assets/files/SVG/Image 1.svg";
const CyanRadio = withStyles({
  root: {
    "&$checked": {
      color: cyan[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

// Dropdown Data
const options = [
  { label: "Palm Beach", value: "Palm Beach", name: "serviceableLocation" },
  {
    label: "New York City",
    value: "New York City",
    name: "serviceableLocation",
  },
  { label: "Hamptons", value: "Hamptons", name: "serviceableLocation" },
  { label: "Miami", value: "Miami", name: "serviceableLocation" },
];
function TrainerSetupClass(props) {
  const [trainerSetupData, setTrainerSetupData] = useState({
    motto: "",
    training_process: "",
    facility_details: "",
    neighborhood_list: "",
    haveAFacility: "",
    willingToTravel: "",
    instagram: "",
    website: "",
    serviceableLocation: "",
    certificateFields: [{ certificate: "", year: "" }],
    trainingLocation: [],
    zoom_link: "",
    identityNameUS: "",
    insuranceNameUS: "",
    coverAmount: "",
    governmentId: "",
    governmentIdNumber: "",
    insurance: "",
  });

  const [imagesList, setImageList] = useState(["", "", "", "", ""]);

  //buttons virtual and in person active
  const [checkButtonVirtual, setCheckButtonVirtual] = useState(true);
  const [checkButtonInPerson, setCheckButtonInPerson] = useState(true);

  // loading the submit button
  const [isLoading, setLoading] = useState(false);

  // Agree check
  const [agreed, setAgreed] = useState(false);
  const [trainerdetailData, setTrainerDetails] = useState({});

  useEffect(() => {
    props.trainerDetail().then((res) => {
      setTrainerDetails(res);
      if (res.images) {
        setImageList(res.images);
      }
      let { identityInfromation = {}, insuranceInformation = {} } = res;
      setTrainerSetupData({
        ...trainerSetupData,
        motto: res.myMotto,
        training_process: res.trainingProcess,
        certificateFields: res.certification,
        instagram: res.instagramProfile,
        website: res.websiteLink,
        willingToTravel: res.willingToTravel,
        haveAFacility: res.trainingFacility,
        facility_details: res.trainingFacilityLocation,
        zoom_link: res.virtualMeetingLink,
        neighborhood_list: res.servicableLocation,
        identityNameUS: identityInfromation
          ? identityInfromation.identityName
          : "",
        governmentIdNumber: identityInfromation
          ? identityInfromation.identityNo
          : "",
        insuranceNameUS: insuranceInformation
          ? insuranceInformation.insuranceName
          : "",
        coverAmount: insuranceInformation
          ? insuranceInformation.insuranceAmount
          : "",
        insurance: insuranceInformation ? insuranceInformation.insurance : "",
        governmentId: identityInfromation ? identityInfromation.identity : "",
      });
    });
  }, []);

  function handleCertificateField() {
    setTrainerSetupData({
      ...trainerSetupData,
      certificateFields: [
        ...trainerSetupData.certificateFields,
        { certificate: "", year: "" },
      ],
    });
  }

  const handleRemoveCertificateFields = (index) => {
    trainerSetupData.certificateFields.splice(index, 1);
    setTrainerSetupData({ ...trainerSetupData });
  };

  const handleChangeCertificateInput = (index, event) => {
    const values = [...trainerSetupData.certificateFields];
    values[index][event.target.name] = event.target.value;
    setTrainerSetupData({ ...trainerSetupData, certificateFields: values });
  };

  // handle virtual button active
  const handleVirtual = () => {
    setCheckButtonVirtual((checkButtonVirtual) => !checkButtonVirtual);
  };
  // handle InPerson button active
  const handleInPerson = () => {
    setCheckButtonInPerson((checkButtonInPerson) => !checkButtonInPerson);
  };

  // handle agree check
  const handleAgreedCheck = () => {
    setAgreed(!agreed);
  };

  // for Modal Operation
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    let payload = {
      myMotto: trainerSetupData.motto,
      applicationStatus: "setupComplete",
      trainingProcess: trainerSetupData.training_process,
      certification: trainerSetupData.certificateFields,
      virtualMeetingLink: trainerSetupData.zoom_link,
      trainingFacility: trainerSetupData.haveAFacility,
      willingToTravel: trainerSetupData.willingToTravel,
      servicableLocation: trainerSetupData.neighborhood_list,
      instagramProfile: trainerSetupData.instagram,
      websiteLink: trainerSetupData.website,
      firstName: trainerdetailData.firstName,
      lastName: trainerdetailData.lastName,
      areaOfExpertise: trainerdetailData.areaOfExpertise,
      description: trainerdetailData.description,
      oneOnOnePricing: trainerdetailData.oneOnOnePricing,
      socialSessionPricing: trainerdetailData.socialSessionPricing,
      classSessionPricing: trainerdetailData.classSessionPricing,
      identityName: trainerSetupData.identityNameUS,
      identityNo: trainerSetupData.governmentIdNumber,
      insuranceName: trainerSetupData.insuranceNameUS,
      insuranceAmount: trainerSetupData.coverAmount,
    };
    const { updateTrainerAvailabilityApi } = TrainerApi;
    updateTrainerAvailabilityApi.body = payload;
    setLoading(true);
    api({ ...updateTrainerAvailabilityApi })
      .then(() => {
        setLoading(false);
        history.push("/trainers/dashboard/session");
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const handleUploadArea = (e, index) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("images", image);
      props.fileUploadApi(fd).then((data) => {
        imagesList[index] = URL.createObjectURL(image);
        setImageList([...imagesList]);
      });
    }
  };
  const handleMoreImageUploadArea = () => {
    imagesList.push("");
    setImageList([...imagesList]);
  };
  return (
    <>
      <div className="container">
        <div className="inner_setup_container">
          <div className="setup_link">
            <div className="inner_link">
              <img src={ArrowBack} alt="icon" />
              <Link to="/trainer/card"> Edit Trainer Card </Link>
            </div>
            <div className="inner_link_preview">
              <div onClick={openModal} className="prev_profile">
                Preview Your Trainer Profile
              </div>
            </div>
          </div>
          <SetupPrevModal
            open={open}
            setOpen={setOpen}
            trainerSetupData={trainerSetupData}
          />
          <div className="setup_headings">
            <h2>Build out the rest of your Profile!</h2>
            <p>
              Your trainer profile is what clients will see when they click on
              your trainer card while filtering results. The below information
              and training settings can be changed at any time.
            </p>
          </div>
          <div className="textarea_content">
            <label>What’s your Motto?</label>
            <br />
            <textarea
              placeholder="Share the words you live or train by in 250 characters or less"
              value={trainerSetupData.motto}
              onChange={(e) => {
                setTrainerSetupData({
                  ...trainerSetupData,
                  motto: e.target.value,
                });
              }}
            />
          </div>
          <div className="textarea_content">
            <label>Tell us about you and describe your training process</label>
            <br />
            <textarea
              placeholder="Share the words you live or train by in 250 characters or less"
              value={trainerSetupData.training_process}
              onChange={(e) => {
                setTrainerSetupData({
                  ...trainerSetupData,
                  training_process: e.target.value,
                });
              }}
            />
          </div>
          <div className="certificate_content">
            <label>Throw in some photos showcasing you & your skills</label>
            <div className="row">
              {imagesList.map((list, index) => {
                return (
                  <div className="col-3 w-100 mb-3 px-2" key={index}>
                    <div className="image-upload-card btn-file-input">
                      <button>
                        <img
                          src={list !== "" ? list : ImageBG}
                          alt={"card-image"}
                          accept="image/*"
                        />
                        <input
                          type="file"
                          name="insurance"
                          className="custom-file-input"
                          onChange={(e) => handleUploadArea(e, index)}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
              {imagesList.length < 10 ? (
                <button
                  className="certificate_button"
                  type="button"
                  onClick={() => handleMoreImageUploadArea()}
                >
                  + Add More Images
                </button>
              ) : null}
            </div>
          </div>
          <div className="certificate_content">
            <label>Certifications</label>
            {trainerSetupData.certificateFields.map((field, index) => {
              return (
                <React.Fragment key={index}>
                  <div key={`${field}-${index}`} className="certificate_fields">
                    <input
                      placeholder="Certification Title"
                      name="certificate"
                      value={field.certificate}
                      onChange={(event) =>
                        handleChangeCertificateInput(index, event)
                      }
                    />
                    <input
                      placeholder="Year you were certified"
                      name="year"
                      value={field.year}
                      onChange={(event) =>
                        handleChangeCertificateInput(index, event)
                      }
                      type="number"
                    />
                  </div>
                  {index + 1 === trainerSetupData.certificateFields.length ? (
                    <div className="d-flex">
                      <button
                        className="certificate_button"
                        type="button"
                        onClick={() => handleCertificateField()}
                      >
                        + Add Certificate's
                      </button>
                      {index + 1 ===
                        trainerSetupData.certificateFields.length &&
                      trainerSetupData.certificateFields.length !== 1 ? (
                        <button
                          className="certificate_button text-danger pl-3"
                          type="button"
                          onClick={() => handleRemoveCertificateFields(index)}
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>

          <div className="trainDetails_container">
            <div className="training_options">
              <label>Where will you be training</label>
              <div className="options_button">
                <button
                  onClick={(e) => handleVirtual(e, "Online")}
                  className={checkButtonVirtual ? "buttonTrue" : "buttonFalse"}
                >
                  Virtual
                </button>
                <button
                  onClick={(e) => handleInPerson(e, "inperson")}
                  className={checkButtonInPerson ? "buttonTrue" : "buttonFalse"}
                >
                  In Person
                </button>
              </div>
              {checkButtonVirtual === true ? (
                <div className="textarea_content">
                  <label>Add zoom app meeting link</label>
                  <br />
                  <textarea
                    placeholder="add you're meeting link"
                    value={trainerSetupData.zoom_link}
                    onChange={(e) => {
                      setTrainerSetupData({
                        ...trainerSetupData,
                        zoom_link: e.target.value,
                      });
                    }}
                  />
                </div>
              ) : null}
            </div>
            <div className="dd_content">
              <h5>Which city will you train in?</h5>
              <select
                value={trainerSetupData.neighborhood_list}
                name="location"
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    neighborhood_list: e.target.value,
                  });
                }}
              >
                {options.map((list, index) => (
                  <option value={list.value} key={index}>
                    {list.label}
                  </option>
                ))}
              </select>
              {/* <NormalMultiSelect
                placeholder="Select Location"
                value={trainerSetupData.neighborhood_list}
                arrow={true}
                name="location"
                options={options}
                handleChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    neighborhood_list: e.value,
                  });
                }}
              /> */}
            </div>
            <div className="radio_content">
              <label>
                Do you have a facility or location where you will train clients?
              </label>
              <br />
              <CyanRadio
                checked={trainerSetupData.haveAFacility == true}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    haveAFacility: !trainerSetupData.haveAFacility,
                  });
                }}
                value={trainerSetupData.haveAFacility}
              />
              &ensp;<span className="radio">Yes</span> &ensp;
              <Radio
                checked={trainerSetupData.haveAFacility == false}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    haveAFacility: !trainerSetupData.haveAFacility,
                  });
                }}
                value={trainerSetupData.haveAFacility}
              />
              &ensp;<span className="radio">No</span>
            </div>
            <div className="textarea_content">
              <label>Details of the facility/location</label>

              <br />
              <textarea
                placeholder="Enter the Details of the location"
                value={trainerSetupData.facility_details}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    facility_details: e.target.value,
                  });
                }}
              />
            </div>
            <div className="radio_content">
              <label>
                Are you willing to travel to clients in your city/region?
              </label>
              <br />
              <CyanRadio
                checked={trainerSetupData.willingToTravel === true}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    willingToTravel: !trainerSetupData.willingToTravel,
                  });
                }}
                value={trainerSetupData.willingToTravel}
              />
              &ensp;<span className="radio">Yes</span> &ensp;
              <CyanRadio
                checked={trainerSetupData.willingToTravel === false}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    willingToTravel: !trainerSetupData.willingToTravel,
                  });
                }}
                value={trainerSetupData.willingToTravel}
              />
              &ensp;<span className="radio">No</span>
            </div>
            <div className="textarea_content">
              <label>
                List the areas/neighborhoods you’re willing to travel to
              </label>
              <br />
              <textarea
                placeholder="Neighborhood List"
                value={trainerSetupData.neighborhood_list}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    neighborhood_list: e.target.value,
                  });
                }}
              />
            </div>
            <div className="input_content">
              <label>Instagram</label>
              <br />
              <input
                placeholder="Add your Instagram Handle"
                value={trainerSetupData.instagram}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    instagram: e.target.value,
                  });
                }}
              />
              <img src={Instagram} alt="icon" />
            </div>
            <div className="input_content">
              <label>Website</label>
              <br />
              <input
                placeholder="Add your Web Link"
                value={trainerSetupData.website}
                onChange={(e) => {
                  setTrainerSetupData({
                    ...trainerSetupData,
                    website: e.target.value,
                  });
                }}
              />
              <img src={Web} alt="icon" />
            </div>
          </div>

          <PaymentSectionSetup
            trainerSetupData={trainerSetupData}
            setTrainerSetupData={setTrainerSetupData}
          />

          <div className="card_agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              onChange={handleAgreedCheck}
            />
            <label>
              Check here to acknowledge that you have read and agree to the
              Motto trainer
              <a href="/agreement" target="_blank">
                terms and conditions
              </a>
            </label>
          </div>

          <div className="submit_button">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              disabled={(isLoading, !agreed)}
              className={`${isLoading ? "loading" : "btn"}`}
            >
              {isLoading ? (
                "Loading..."
              ) : (
                <a>
                  {" "}
                  Continue to account
                  <ArrowHoverBlacked />
                </a>
              )}
            </button>
            <div className="terms_msg">
              {agreed ? null : (
                <span>
                  Please Agree to the above terms and conditions to continue
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fileUploadApi: fileUpload,
      trainerDetail,
    },
    dispatch
  );
};

const TrainerSetup = connect(null, mapDispatchToProps)(TrainerSetupClass);

export default TrainerSetup;
