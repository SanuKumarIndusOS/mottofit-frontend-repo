import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import ReactPhoneInput from "react-phone-input-2";
import ArrowHoverBlacked from "../../../common/BlackCircleButton/ArrowHoverBlacked";
import ImageBG from "assets/files/SVG/Image 1.svg";
import Instagram from "assets/files/SVG/Insta Icon.svg";
import Web from "assets/files/SVG/Web Icon.svg";
import Location from "assets/files/SVG/Location Icon.svg";
import Share from "assets/files/FindTrainer/share.svg";
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
import { YearDropDown } from "component/common/YearDropdown";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import { Link } from "react-router-dom";
import { copyTextToClipboard } from "service/helperFunctions";
import moment from "moment";
import validate from "service/validation";
import { Toast } from "service/toast";

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
    serviceableNeighbourHood: "",
  });
  const [trainerAvailabilityData, setTrainerAvailabilityData] = React.useState({
    hoursPerWeek: "",
    preferedTrainingMode: [],
    trainingFacilityLocation: "",
    servicableLocation: "",
  });

  //state for radio buttons
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedOneValue, setSelectedOneValue] = React.useState("");

  const [errors, setErrors] = useState({});

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
  const [imagesList, setImageList] = useState([
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
    { url: "" },
  ]);

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
  const handleRemoveCertificateFields = (index) => {
    const values = [...inputCertificatesFields];
    values.splice(index, 1);
    setInputCertificatesFields(values);
  };
  const handleChangeCertificateInput = (index, event) => {
    const values = [...inputCertificatesFields];
    values[index][event.target.name] = event.target.value;
    setInputCertificatesFields(values);
  };
  const handleMoreImageUploadArea = () => {
    imagesList.push({ url: "" });
    setImageList([...imagesList]);
  };
  const handleInputChange = (e, trainingType) => {
    e.preventDefault && e.preventDefault();

    const { name, value } = e.target || e || {};

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
      DOB,
      phoneNo,
      email,
      serviceableNeighbourHood,
    } = trainerData;

    let payload = {
      trainingProcess: trainingProcessDescription,
      myMotto: motto,
      websiteLink: websiteLink,
      instagramProfile: instaHandle,
      certification: inputCertificatesFields,
      virtualMeetingLink: virtualMeetingLink,
      servicableLocation: [servicableLocation],
      serviceableNeighbourHood: serviceableNeighbourHood || "",
      trainingFacilityLocation: trainingFacilityLocation,
      trainingFacility: selectedValue === "a",
      preferedTrainingMode: trainerData?.trainingLocation,
      images: imagesList.filter(({ url }) => url !== "").map(({ url }) => url),
      DOB,
      email,
      phoneNumber: phoneNo.includes("+") ? phoneNo : `+${phoneNo}`,
    };

    if (!validateFields(payload)) return;

    const { updateTrainerAvailabilityApi } = TrainerApi;

    updateTrainerAvailabilityApi.body = payload;

    api({ ...updateTrainerAvailabilityApi })
      .then(() => {
        _getTrainerDetails();
        Toast({ type: "success", message: "Successfully added changes" });
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
          location = "",
          virtualMeetingLink = "",
          trainingFacilityLocation = [],
          trainingFacility = {},
          DOB,
          phoneNumber,
          email,
          serviceableNeighbourHood,
        } = data || {};
        const { workLocation = "" } = currentExperience || {};

        const storeData = {
          details: {
            ...details,
            trainerId: data.id,
            motto: myMotto,
            trainingProcessDescription: trainingProcess,
            trainingLocation: preferedTrainingMode,
            location: workLocation,
            websiteLink: websiteLink,
            instaHandle: instagramProfile,
            location,
            virtualMeetingLink: virtualMeetingLink,
            servicableLocation: Array.isArray(servicableLocation)
              ? servicableLocation.toString()
              : servicableLocation,
            trainingFacilityLocation: trainingFacilityLocation,
            DOB,
            email,
            serviceableNeighbourHood: serviceableNeighbourHood || "",
            phoneNo: phoneNumber.includes("+")
              ? phoneNumber
              : `+${phoneNumber}`,
          },
        };

        if (data.images && data.images.length !== 0) {
          let tempImages = data.images.map((img) => ({ url: img }));
          setImageList(tempImages);
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

        if (trainingFacility !== null) {
          setSelectedValue(trainingFacility ? "a" : "b");
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

      imagesList[index] = {
        url: URL.createObjectURL(image),
        isUploaded: false,
      };

      setImageList([...imagesList]);

      let dom = document.getElementsByClassName("upload-img-overlay")[index];

      const configData = {
        onUploadProgress: function (progressEvent) {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );

          if (dom) {
            dom.innerText = `Uploading ${percentCompleted}%`;
          }
          // console.log(payload);
        },
      };

      fd.append("images", image);
      fileUploadApi(fd, configData)
        .then((data) => {
          const { urlPath } = data;

          imagesList[index] = {
            url: urlPath,
            isUploaded: true,
          };

          if (dom) {
            dom.innerHTML = "";
          }
          setImageList([...imagesList]);
        })
        .catch((err) => {
          if (dom) {
            dom.innerHTML = "Failed";
          }
          Toast({ type: "error", message: err.message || "Error" });
        });
    }
  };

  const validationRules = () => {
    validate.validators.dateValidation = function (
      value,
      options,
      key,
      attributes
    ) {
      var maxDate = moment();
      maxDate = maxDate.subtract(options, "years");

      maxDate = maxDate.format("YYYY-MM-DD");

      let trainerDOB = moment(value).format("YYYY-MM-DD");

      let isTrainerValid = moment(trainerDOB).isBefore(maxDate);

      return isTrainerValid
        ? undefined
        : ["^Trainer should be atleast 21 years old"];
    };

    return {
      DOB: {
        presence: {
          allowEmpty: false,
          message: "^Date of birth is required",
        },
        dateValidation: 21,
      },
      email: {
        presence: {
          allowEmpty: false,
          message: "^Email is required",
        },
        email: true,
      },
      phoneNumber: {
        presence: {
          allowEmpty: false,
          message: "^Phone number is required",
        },
        length: {
          minimum: 8,
          tooShort: "^Invalid number",
          maximum: 15,
          tooLong: "^Invalid number",
        },
      },
    };
  };

  const validateFields = (data) => {
    let fieldInvalidList = validate(data, validationRules());

    if (fieldInvalidList !== undefined) {
      let errors = {
        ...fieldInvalidList,
      };

      setErrors({ ...errors, ...fieldInvalidList });

      // setErrors();
    }

    return !fieldInvalidList;
  };

  const handleRemoveImage = (index) => {
    imagesList[index] = { url: "" };
    setImageList([...imagesList]);
  };

  const handleCopy = () => {
    let trainerId = details?.trainerId;

    let urlPath = "trainer/profile/";

    let host = `${window.location.host}`;

    let fullURLPath = `${host}/${urlPath}${trainerId}`;

    fullURLPath && copyTextToClipboard(fullURLPath, "Link copied");
  };

  var maxDate = moment();
  maxDate = maxDate.subtract(21, "years");

  maxDate = maxDate.format("YYYY-MM-DD");

  return (
    <>
      <div className="outter_tp_container">
        <div className="container">
          <div className="inner_trinerpro_container">
            <div className="tp_wrapper">
              <div className="tp_header d-flex align-items-center pr-5 mr-5">
                <h2>My Profile</h2>

                <div className="profile_share mt-0 ml-auto">
                  <img src={Share} alt="icon" />
                  <Link onClick={handleCopy}>Share Profile</Link>
                </div>
              </div>
              <div className="tp_outter_form container">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="setup_card1">
                    <h6>What’s your Motto?</h6>
                    <textarea
                      type="text"
                      placeholder="Share your favorite motto quote that represents you or your philosophy in less than 75 words"
                      onChange={(e) => {
                        const tempValue = e.target.value;

                        if (tempValue?.split(" ")?.length > 75) return;
                        if (tempValue?.length > 500) return;
                        handleInputChange(e);
                      }}
                      value={trainerData.motto}
                      name="motto"
                      maxLength="500"
                    />
                  </div>
                  <div className="setup_card2">
                    <h6>
                      Tell us about you and describe your training process
                    </h6>
                    <textarea
                      type="text"
                      name="comment"
                      placeholder="Tell potential clients everything you think they should know about you as a trainer & individual. Utilize keywords as anything you write here will also be searchable in our search box."
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
                              {list.url !== "" ? (
                                <button className="uploaded-image">
                                  <img
                                    src={list?.url}
                                    alt={"card-image"}
                                    accept="image/*"
                                  />
                                  {/* {&& ()} */}
                                  <div
                                    id="overlay"
                                    className={`${
                                      list.isUploaded === false
                                        ? "d-flex fs-12 align-items-center justify-content-center"
                                        : ""
                                    } upload-img-overlay`}
                                  ></div>
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
                        <React.Fragment key={index}>
                          <div className="inputs_certificate">
                            <div className="col-6 px-2">
                              <input
                                type="text"
                                placeholder="Certification Title"
                                value={inputCertificatesField.certificate}
                                name="certificate"
                                onChange={(event) =>
                                  handleChangeCertificateInput(index, event)
                                }
                                className="w-100 my-2"
                              />
                            </div>
                            <div className="col-6 px-2">
                              <YearDropDown
                                label="Year you were Certified"
                                value={inputCertificatesField.year}
                                name="year"
                                handleChange={(event) =>
                                  handleChangeCertificateInput(index, event)
                                }
                              />
                            </div>
                          </div>
                          {index + 1 === inputCertificatesFields.length ? (
                            <div className="d-flex">
                              <h5 onClick={handleAddCertificateFields}>
                                + Add Certificate's
                              </h5>
                              {index + 1 === inputCertificatesFields.length &&
                              inputCertificatesFields.length !== 1 ? (
                                <h5
                                  className="text-danger pl-3"
                                  onClick={() =>
                                    handleRemoveCertificateFields(index)
                                  }
                                >
                                  Remove
                                </h5>
                              ) : null}
                            </div>
                          ) : null}
                        </React.Fragment>
                      )
                    )}
                  </div>
                  <div className="setup_card5">
                    <div className="setupcontent_wrapper">
                      <div className="setup_item">
                        <h6>Where will you be training</h6>
                        <div className="inputs_platform">
                          <button
                            onClick={(e) => {
                              handleInputChange(e, "virtual");
                              e.target.blur();
                            }}
                            className={`${
                              trainerData?.trainingLocation?.includes("virtual")
                                ? "active"
                                : ""
                            }`}
                            name="trainingLocation"
                          >
                            Virtual
                          </button>
                          <button
                            onClick={(e) => {
                              handleInputChange(e, "inPerson");
                              e.target.blur();
                            }}
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
                          {trainerData?.trainingLocation?.includes(
                            "virtual"
                          ) ? (
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
                            <NormalMultiSelect
                              placeholder="Select Your City"
                              value={trainerData.servicableLocation}
                              arrow={true}
                              name="servicableLocation"
                              className="trainer-profile-dropdown"
                              options={options}
                              handleChange={(e) => {
                                setTrainerData({
                                  ...trainerData,
                                  servicableLocation: e.target.value,
                                });
                              }}
                            />
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
                            disabled={selectedValue !== "a"}
                            className={`${
                              selectedValue !== "a" ? "disable-btn" : ""
                            }`}
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
                            value={trainerData.serviceableNeighbourHood}
                            name="serviceableNeighbourHood"
                            disabled={parseInt(selectedOneValue) !== 1}
                            className={`${
                              parseInt(selectedOneValue) !== 1
                                ? "disable-btn"
                                : ""
                            }`}
                          />

                          <img
                            src={Location}
                            alt="icon"
                            className="loction_img_select"
                          />
                        </div>
                      </div>

                      <div className="input_profile">
                        <label>Date of Birth </label>
                        <input
                          placeholder="DD/MM/YYYY"
                          type="date"
                          value={trainerData.DOB}
                          onChange={handleInputChange}
                          name="DOB"
                          min="1900-01-01"
                          max={maxDate}
                        />
                        {errors.DOB && (
                          <span className="text-danger">{errors.DOB[0]}</span>
                        )}
                      </div>

                      <div className="input_profile">
                        <label>Email </label>
                        <input
                          type="text"
                          value={trainerData.email}
                          onChange={handleInputChange}
                          name="email"
                        />

                        {errors.email && (
                          <span className="text-danger">{errors.email[0]}</span>
                        )}
                      </div>

                      <div className="input_profile">
                        <label>Phone </label>

                        <ReactPhoneInput
                          // type="phone"
                          disableDropdown
                          // disableAreaCodes
                          countryCodeEditable={true}
                          value={trainerData.phoneNo}
                          // placeholder="Phone Number"
                          country="us"
                          inputProps={{
                            name: "phoneNo",
                          }}
                          specialLabel=""
                          name="phoneNo"
                          onChange={(e) =>
                            handleInputChange({
                              target: { name: "phoneNo", value: e },
                            })
                          }
                        />

                        {/* {errors.phoneNo && (
                          <span className="d-block w-100 text-danger fs-14">
                            {errors.phoneNo[0]}
                          </span>
                        )} */}

                        {errors.phoneNumber && (
                          <span className="text-danger">
                            {errors.phoneNumber[0]}
                          </span>
                        )}
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
