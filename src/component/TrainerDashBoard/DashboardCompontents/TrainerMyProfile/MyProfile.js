import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";

import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import ImageBG from "assets/files/SVG/Image 1.svg";
import Instagram from "assets/files/SVG/Insta Icon.svg";
import Web from "assets/files/SVG/Web Icon.svg";
import Location from "assets/files/SVG/Location Icon.svg";
import {
  getTrainerDetails,
  updateTrainerDetails,
  fileUpload,
} from "action/trainerAct";
import CloseIcon from "../../../../assets/files/FindTrainer/Cross.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { TrainerApi } from "service/apiVariables";
import { api } from "service/api";

import { withStyles } from "@material-ui/core/styles";
import { cyan } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import "./dropdown.scss";

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

const CyanRadio = withStyles({
  root: {
    "&$checked": {
      color: cyan[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const MyProfileFC = ({
  getTrainerDetails,
  details,
  updateTrainerDetails,
  fileUploadApi,
}) => {
  const [trainerData, setTrainerData] = useState({
    motto: "",
    trainingProcessDescription: "",
    trainingLocation: [],
    servicableLocation: "",
    location: "",
    websiteLink: "",
    instaHandle: "",
    youtubeChannel: "",
    governmentId: "",
    insurance: "",
    governmentIdNumber: "",
    coverAmount: "",
    virtualMeetingHandle: "",
    virtualMeetingLink: "",
    identityNameUS: "",
    trainingFacilityLocation: [],
    insuranceNameUS: "",
  });
  const [trainerAvailabilityData, setTrainerAvailabilityData] = React.useState({
    hoursPerWeek: "",
    preferedTrainingMode: [],
    trainingFacilityLocation: "",
    servicableLocation: "",
  });

  //state for radio buttons
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedOneValue, setSelectedOneValue] = React.useState("");

  const handleOneChange = (event) => {
    setSelectedOneValue(event.target.value);

    setTrainerAvailabilityData({
      ...trainerAvailabilityData,
      willingToTravel: event.target.value,
    });
  };

  //handleChange for radio
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //Image
  const [imagesList, setImageList] = useState(["", "", "", "", ""]);

  // input certification
  const [inputCertificatesFields, setInputCertificatesFields] = useState([
    {
      certificate: "",
      year: "",
      remove: "",
    },
  ]);
  const handleAddCertificateFields = () => {
    setInputCertificatesFields([
      ...inputCertificatesFields,
      { certificate: "", year: "", remove: "" },
    ]);
  };
  const handleChangeCertificateInput = (index, event) => {
    const values = [...inputCertificatesFields];
    values[index][event.target.name] = event.target.value;
    setInputCertificatesFields(values);
  };
  const handleMoreImageUploadArea = () => {
    imagesList.push("");
    setImageList([...imagesList]);
  };
  const handleInputChange = (e, trainingType) => {
    e.preventDefault && e.preventDefault();

    const { name, value, label } = e.target || e || {};

    const tempData = {
      ...trainerData,
    };

    const isMultiSelect = Array.isArray(e);

    if (name === "trainingLocation") {
      if (tempData["trainingLocation"].includes(trainingType)) {
        tempData["trainingLocation"] = tempData["trainingLocation"].filter(
          (location) => location !== trainingType
        );
      } else {
        tempData["trainingLocation"] = [
          ...tempData["trainingLocation"],
          trainingType,
        ];
      }
    } else {
      tempData[`${isMultiSelect ? e[0].name : name}`] = isMultiSelect
        ? e
        : value;
    }

    setTrainerData(tempData);
  };

  const handleSubmit = () => {
    const {
      instaHandle,
      motto,
      servicableLocation,
      trainingProcessDescription,
      websiteLink,
      trainingFacilityLocation,
      virtualMeetingLink,
    } = trainerData;

    let payload = {
      trainingProcess: trainingProcessDescription,
      myMotto: motto,
      websiteLink: websiteLink,
      instagramProfile: instaHandle,
      certification: inputCertificatesFields,
      virtualMeetingLink: virtualMeetingLink,
      servicableLocation: servicableLocation,
      trainingFacilityLocation: trainingFacilityLocation,
      images: imagesList.filter((x) => x !== ""),
    };

    const { updateTrainerAvailabilityApi } = TrainerApi;

    updateTrainerAvailabilityApi.body = payload;

    api({ ...updateTrainerAvailabilityApi })
      .then(() => {
        _getTrainerDetails();
        alert("Successfully added changes");
      })
      .catch((err) => console.log(err));
  };
  const _getTrainerDetails = () => {
    getTrainerDetails()
      .then((data) => {
        const {
          trainingProcess = "",
          myMotto = "",
          preferedTrainingMode = [],
          websiteLink = "",
          instagramProfile = "",
          currentExperience = {},
          certification = [],
          servicableLocation = [],
          virtualMeetingLink = "",
          trainingFacilityLocation = [],
        } = data || {};
        const { workLocation = "" } = currentExperience || {};

        const storeData = {
          details: {
            ...details,
            motto: myMotto,
            trainingProcessDescription: trainingProcess,
            trainingLocation: preferedTrainingMode,
            location: workLocation,
            websiteLink: websiteLink,
            instaHandle: instagramProfile,
            virtualMeetingLink: virtualMeetingLink,
            servicableLocation: servicableLocation,
            trainingFacilityLocation: trainingFacilityLocation,
          },
        };
        if (data.images && data.images.length !== 0) {
          setImageList(data.images);
        }
        if (
          data.willingToTravel !== null &&
          data.willingToTravel !== undefined
        ) {
          setSelectedOneValue(data.willingToTravel ? "1" : "0");
        }
        if (certification) {
          setInputCertificatesFields(certification);
        }
        setTrainerData(storeData.details);
        updateTrainerDetails(storeData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    _getTrainerDetails();
  }, []);

  const handleUploadArea = (e, index) => {
    let image = e.target.files[0];
    if (image !== undefined) {
      const fd = new FormData();

      fd.append("images", image);
      fileUploadApi(fd).then((data) => {
        imagesList[index] = URL.createObjectURL(image);
        setImageList([...imagesList]);
      });
    }
  };

  const handleRemoveImage = (index) => {
    imagesList[index] = "";
    setImageList([...imagesList]);
  };

  return (
    <>
      <div className="outter_tp_container">
        <div className="container">
          <div className="inner_trinerpro_container">
            <div className="tp_wrapper">
              <div className="tp_header">
                <h2>My Profile</h2>
              </div>
              <div className="tp_outter_form container">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="setup_card1">
                    <h6>What’s your Motto?</h6>
                    <textarea
                      type="text"
                      placeholder="Tell us all about it"
                      onChange={handleInputChange}
                      value={trainerData.motto}
                      name="motto"
                      maxlength="500"
                    />
                  </div>
                  <div className="setup_card2">
                    <h6>
                      Tell us about you and describe your training process
                    </h6>
                    <textarea
                      type="text"
                      name="comment"
                      placeholder="Tell clients everything you think they should know! Utilize Key words as anything you write here will be searchable through our search bar"
                      onChange={handleInputChange}
                      value={trainerData.trainingProcessDescription}
                      name="trainingProcessDescription"
                    />
                  </div>
                  <div className="setup_card3">
                    <h6>Throw in some photos showcasing you & your skills</h6>
                    <div className="row">
                      {imagesList.map((list, index) => {
                        return (
                          <div className="col-3 w-100 mb-3 px-2" key={index}>
                            <div className="image-upload-card btn-file-input">
                              {list !== "" ? (
                                <button className="uploaded-image">
                                  <img
                                    src={list}
                                    alt={"card-image"}
                                    accept="image/*"
                                  />
                                  <div id="overlay"></div>
                                  <img
                                    src={CloseIcon}
                                    className="remove-image"
                                    alt="close"
                                    onClick={() => handleRemoveImage(index)}
                                  />
                                </button>
                              ) : (
                                <button>
                                  <img
                                    src={ImageBG}
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
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {imagesList.length < 10 ? (
                        <h5 onClick={() => handleMoreImageUploadArea()}>
                          + Add More Images
                        </h5>
                      ) : null}
                    </div>
                  </div>
                  <div className="setup_card4">
                    <h6>Certifications you’d like to display</h6>
                    {inputCertificatesFields?.map(
                      (inputCertificatesField, index) => (
                        <div className="inputs_certificate" key={index}>
                          <input
                            type="text"
                            placeholder="Certification Title"
                            value={inputCertificatesField.certificate}
                            name="certificate"
                            onChange={(event) =>
                              handleChangeCertificateInput(index, event)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Year you were Certified"
                            value={inputCertificatesField.year}
                            name="year"
                            onChange={(event) =>
                              handleChangeCertificateInput(index, event)
                            }
                          />
                        </div>
                      )
                    )}
                    <h5 onClick={handleAddCertificateFields}>
                      + Add Certification
                    </h5>
                  </div>
                  <div className="setup_card5">
                    <div className="setupcontent_wrapper">
                      <div className="setup_item">
                        <h6>Where will you be training</h6>
                        <div className="inputs_platform">
                          <button
                            onClick={(e) => handleInputChange(e, "Online")}
                            className={`${
                              trainerData?.trainingLocation?.includes("Online")
                                ? "active"
                                : ""
                            }`}
                            name="trainingLocation"
                          >
                            Virtual
                          </button>
                          <button
                            onClick={(e) => handleInputChange(e, "inPerson")}
                            className={`${
                              trainerData?.trainingLocation?.includes(
                                "inPerson"
                              )
                                ? "active"
                                : ""
                            }`}
                            name="trainingLocation"
                          >
                            In Person
                          </button>
                        </div>
                        <div className="social_meeting_links">
                          {trainerData?.trainingLocation?.includes("Online") ? (
                            // <div className="setup_ite1">
                            <>
                              <h5>Add your Google or Zoom meeting link</h5>
                              <div className="inputs_platform">
                                <div className="iconwrapper">
                                  <textarea
                                    type="text"
                                    placeholder="Add a Google or Zoom meeting link"
                                    value={trainerData.virtualMeetingLink}
                                    onChange={handleInputChange}
                                    name="virtualMeetingLink"
                                  />
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <div className="setup_item1">
                        <h6>Which city will you train in?</h6>
                        <div className="inputs_platform">
                          <div className="iconwrapper">
                            <select
                              value={trainerData.serviceableLocation}
                              name="serviceableLocation"
                              onChange={(e) => {
                                setTrainerData({
                                  ...trainerData,
                                  serviceableLocation: e.target.value,
                                });
                              }}
                            >
                              {options.map((list, index) => (
                                <option value={list.value} key={index}>
                                  {list.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="item_3">
                        <h6>
                          Do you have a facility or location where you will
                          train clients?
                        </h6>
                        <CyanRadio
                          checked={selectedValue === "a"}
                          onChange={handleChange}
                          value="a"
                          name="radio-button-demo"
                          label="Strength & Hitt"
                          inputProps={{
                            "aria-label": "a",
                          }}
                        />
                        <label>Yes</label>
                        <CyanRadio
                          checked={selectedValue === "b"}
                          onChange={handleChange}
                          value="b"
                          name="radio-button-demo"
                          label="Strength & Hitt"
                          inputProps={{
                            "aria-label": "b",
                          }}
                        />
                        <label>No</label>
                      </div>
                      <div className="item_4">
                        <h6>Details of the facility/location</h6>
                        <div className="inputs_platform">
                          <textarea
                            type="text"
                            placeholder="Enter the Details of the location"
                            onChange={handleInputChange}
                            value={trainerData.trainingFacilityLocation}
                            name="trainingFacilityLocation"
                          />
                        </div>
                      </div>
                      <div className="item_5">
                        <h6>
                          Are you willing to travel to clients in your
                          city/region?
                        </h6>
                        <CyanRadio
                          checked={selectedOneValue === "1"}
                          onChange={handleOneChange}
                          value="1"
                          label="Strength & Hitt"
                          inputProps={{
                            "aria-label": "1",
                          }}
                        />
                        <label> Yes!</label>
                        <CyanRadio
                          checked={selectedOneValue === "0"}
                          onChange={handleOneChange}
                          value="0"
                          label="Strength & Hitt"
                          inputProps={{
                            "aria-label": "0",
                          }}
                        />
                        <label>No</label>
                      </div>
                      <div className="item_6">
                        <h6>
                          List the areas/neighborhoods you’re willing to travel
                          to
                        </h6>
                        <div className="inputs_platform">
                          <textarea
                            type="text"
                            placeholder="Neighborhood List"
                            onChange={handleInputChange}
                            value={trainerData.servicableLocation}
                            name="servicableLocation"
                          />

                          <img
                            src={Location}
                            alt="icon"
                            className="loction_img_select"
                          />
                        </div>
                      </div>

                      <div className="setup_item1">
                        <h6>Instagram</h6>
                        <div className="inputs_platform">
                          <div className="iconwrapper">
                            <input
                              type="text"
                              placeholder="Add your Instagram Handle"
                              onChange={handleInputChange}
                              value={trainerData.instaHandle}
                              name="instaHandle"
                            />
                            <img src={Instagram} alt="icon" />
                          </div>
                        </div>
                      </div>

                      <div className="setup_item1">
                        <h6>Website</h6>
                        <div className="inputs_platform">
                          <div className="iconwrapper">
                            <input
                              type="text"
                              placeholder="Add your Web Link"
                              onChange={handleInputChange}
                              value={trainerData.websiteLink}
                              name="websiteLink"
                            />
                            <img src={Web} alt="icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tp_button_save mb-5">
                    <button onClick={handleSubmit}>
                      Save changes <ArrowHoverBlacked />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
      updateTrainerDetails,
      getTrainerDetails,
      fileUploadApi: fileUpload,
    },
    dispatch
  );
};

const MyProfile = connect(mapStateToProps, mapDispatchToProps)(MyProfileFC);

export default MyProfile;
