import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getUserDetail } from "action/userAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import validate from "service/validation";
import { PaymentApi, userApi } from "service/apiVariables";
import { fileUpload } from "action/trainerAct";
import { api } from "service/api";
import moment from "moment";
import { findDatesValid } from "service/helperFunctions";
import { Toast } from "../../../../service/toast";
import CardForm from "component/UserBookSession/UserPayments/subcomponents/CardForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_URL } from "../../../../helpers/baseURL";

const stripePromise = loadStripe(STRIPE_URL);

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
const gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

const MyProfileClass = ({ getUserDetailApi, fileUploadApi }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    paymentProfileId: "",
    mottoPasses: "",
    signUpType: "email",
  });

  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [changeCard, setChangeCard] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const fileInputRef = useRef();

  const getUserPaymentDetails = () => {
    const { getPaymentMethods } = PaymentApi;

    api({ ...getPaymentMethods }).then(({ data }) => {
      const { type } = data[0] || {};

      if (type) setChangeCard(false);

      setPaymentMethod(type);
    });
  };

  useEffect(() => {
    getUserProfileData();
    getUserPaymentDetails();
  }, []);

  function getUserProfileData() {
    getUserDetailApi()
      .then((data) => {
        if (data.profilePicture) {
          setImage(data.profilePicture);
        }
        let tempData = {
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phoneNo: data.phoneNo || "",
          paymentProfileId: data.paymentProfileId || "",
          mottoPasses: data.mottoPasses || "",
          location: data.location || "",
          gender: data.gender || "",
          DOB: data.DOB || "",
          signUpType: "email",
        };

        setUserData(tempData);
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
      });
  }

  const handleInput = (e) => {
    const { name, value } = e.target || e || {};

    let tempErrors = { ...errors };

    tempErrors[name] = undefined;

    let tempUserData = { ...userData };

    tempUserData[name] = value;

    setUserData({ ...tempUserData });

    setErrors({ ...errors, ...tempErrors });
  };

  const validationRules = () => {
    let nameValidation = {
      format: {
        pattern: /^[a-zA-Z ]*$/,
        flags: "i",
        message: "must be alphabets and spaces",
      },
      length: {
        minimum: 3,
        tooShort: "must contain alteast 3 character",
        maximum: 35,
        tooLong: "must contain less than 35 character",
      },
    };

    // let dateOptionalValidation = {};

    return {
      firstName: {
        presence: {
          allowEmpty: false,
          message: "^First name is required",
        },
        ...nameValidation,
      },
      location: {
        presence: {
          allowEmpty: false,
          message: "^Location is required",
        },
        ...nameValidation,
      },
      phoneNo: {
        presence: {
          allowEmpty: false,
          message: "^Phone number is required",
        },
        // format: {
        //   pattern: /^[1-9][0-9]*$/,
        //   flags: "i",
        //   message: "^Invalid number",
        // },
        length: {
          minimum: 8,
          tooShort: "^Invalid number",
          maximum: 15,
          tooLong: "^Invalid number",
        },
      },
      email: {
        presence: {
          allowEmpty: false,
          message: "^Email is required",
        },
        email: true,
      },
      location: {
        presence: {
          allowEmpty: false,
          message: "^Location is required",
        },
      },
      gender: {
        presence: {
          allowEmpty: false,
          message: "^Gender is required",
        },
      },
      DOB: {
        presence: {
          allowEmpty: false,
          message: "^Date of birth is required",
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
    }
    // console.log(findDatesValid(data.DOB));

    if (!findDatesValid(data.DOB)) {
      fieldInvalidList = {};
      fieldInvalidList["DOB"] = ["Date should be after 1900 and before 2099"];
      setErrors({ ...errors, ...fieldInvalidList });
    }

    return !fieldInvalidList;
  };

  const handleSubmit = () => {
    let payload = {
      firstName: userData.firstName,
      location: userData.location,
      DOB: userData.DOB,
      gender: userData.gender,
      email: userData.email,
      phoneNo: userData.phoneNo,
      profilePicture: image,
    };

    if (!validateFields(payload)) return;

    const { editUserData } = userApi;

    editUserData.body = payload;

    api({ ...editUserData })
      .then((data) => {
        getUserProfileData();
        setChangeCard(false);
        Toast({ type: "success", message: data.message || "success" });
      })
      .catch((err) => {
        Toast({ type: "success", message: err.message || "Error" });
      });
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fd = new FormData();

      fd.append("profilePicture", file);
      fileUploadApi(fd).then((data) => {
        setImage(data.urlPath);
      });
    }
  };

  const handleRemovePic = () => {
    setImage(null);
  };

  const maxDate = moment().format("YYYY-MM-DD");

  return (
    <>
      <div className="myprofile_outter_container">
        <div className="container">
          <div className="myprofile_inner_container">
            <div className="myprofile_header">
              <h2>My Profile</h2>
            </div>
            <div className="profile_wrapper">
              <div className="profile_grid">
                <div className="profile_pic_col">
                  <div className="profile_picture">
                    {image ? (
                      <div className="combin_profile">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            fileInputRef.current.click();
                          }}
                        >
                          <img
                            src={image ? image : Profile}
                            alt="icon"
                            style={{
                              objectFit: "cover",
                              width: "200px",
                              height: "200px",
                              borderRadius: "100px",
                              position: "relative",
                              left: "-6px",
                              top: "-2px",
                            }}
                          />
                        </button>
                        <img
                          src={ProfileAdd}
                          alt="icon"
                          style={{
                            objectFit: "cover",
                            width: "20px",
                            height: "20px",
                            borderRadius: "100px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            fileInputRef.current.click();
                          }}
                        />
                      </div>
                    ) : (
                      <div className="combin_profile">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            fileInputRef.current.click();
                          }}
                        >
                          <img
                            src={Profile}
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              height: "100px",
                              borderRadius: "100px",
                            }}
                          />
                        </button>
                        <img
                          src={ProfileAdd}
                          alt="icon"
                          style={{
                            objectFit: "cover",
                            width: "20px",
                            height: "20px",
                            borderRadius: "100px",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            fileInputRef.current.click();
                          }}
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={(e) => handleProfileUpload(e)}
                    />
                    <h5
                      className="cursor-pointer"
                      onClick={() => handleRemovePic()}
                    >
                      Remove Profile Picture
                    </h5>
                  </div>
                </div>
                <div className="profile_form_col">
                  <div className="outter_profile_form">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="inner_profile_form">
                        <div className="input_profile">
                          <label>Name </label>
                          <input
                            type="text"
                            value={userData.firstName}
                            onChange={handleInput}
                            name="firstName"
                          />

                          {errors.firstName && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.firstName[0]}
                            </span>
                          )}
                        </div>
                        <div className="input_profile">
                          <label>Location </label>
                          <NormalMultiSelect
                            placeholder="Select Your City"
                            value={userData.location}
                            arrow={true}
                            name="location"
                            options={options}
                            handleChange={handleInput}
                          />

                          {errors.location && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.location[0]}
                            </span>
                          )}
                        </div>
                        <div className="input_profile">
                          <label>Date of Birth </label>
                          <input
                            type="date"
                            value={userData.DOB}
                            // onKeyDown={(e) =>
                            //   e.keyCode !== 8 ? e.preventDefault() : ""
                            // }
                            min="1900-01-01"
                            max={maxDate}
                            name="DOB"
                            onChange={handleInput}
                          />
                          {errors.DOB && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.DOB[0]}
                            </span>
                          )}
                        </div>
                        <div className="input_profile">
                          <label>Gender </label>

                          <NormalMultiSelect
                            placeholder="Select Your Gender"
                            value={userData.gender}
                            arrow={true}
                            name="gender"
                            options={gender}
                            handleChange={handleInput}
                          />

                          {errors.gender && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.gender[0]}
                            </span>
                          )}
                        </div>
                        <div className="input_profile">
                          <label>Email </label>
                          <input
                            type="text"
                            value={userData.email}
                            onChange={handleInput}
                            name="email"
                          />

                          {errors.email && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.email[0]}
                            </span>
                          )}
                        </div>
                        <div className="input_profile">
                          <label>Phone </label>

                          <ReactPhoneInput
                            type="phone"
                            disableDropdown
                            // disableAreaCodes
                            countryCodeEditable={true}
                            value={userData.phoneNo}
                            placeholder="Phone Number"
                            country="us"
                            inputProps={{
                              name: "phoneNo",
                            }}
                            name="phoneNo"
                            onChange={(e) =>
                              handleInput({
                                target: { name: "phoneNo", value: e },
                              })
                            }
                          />

                          {errors.phoneNo && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.phoneNo[0]}
                            </span>
                          )}
                        </div>
                        {!changeCard ? (
                          <div className="input_profile w-100">
                            <label>Payment Method </label>
                            <div className="w-100 d-flex align-items-center">
                              <input
                                type="text"
                                value={paymentMethod}
                                disabled
                                onChange={() => {}}
                                className="w-50 mr-3"
                              />

                              <button
                                className="link-btn"
                                onClick={() => setChangeCard(true)}
                              >
                                Change Card
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="mb-3">
                            <Elements stripe={stripePromise}>
                              <CardForm
                                isProfile
                                agreedToTerms={agreedToTerms}
                                handleChange={() =>
                                  setAgreedToTerms(!agreedToTerms)
                                }
                                ScheduleSession={handleSubmit}
                              />
                            </Elements>
                          </div>
                        )}

                        {/* <div className="input_profile">
                          <label>Password </label>
                          <input
                            type="password"
                            onChange={handleInput}
                            name="password"
                          />

                          {errors.password && (
                            <span className="d-block w-100 text-danger fs-14">
                              {errors.password[0]}
                            </span>
                          )}
                        </div> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {!changeCard && (
                <button className="profile_save" onClick={handleSubmit}>
                  SAVE CHANGES <BlueHoverButton />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserDetailApi: getUserDetail,
      fileUploadApi: fileUpload,
    },
    dispatch
  );
};

const MyProfile = connect(null, mapDispatchToProps)(MyProfileClass);

export default MyProfile;
