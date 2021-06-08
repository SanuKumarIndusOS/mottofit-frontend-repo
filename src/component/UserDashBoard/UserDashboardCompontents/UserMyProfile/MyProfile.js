import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import Profile from "../../../../assets/files/SVG/Profile Picture.svg";
import ProfileAdd from "../../../../assets/files/SVG/Picture Icon.svg";
import BlueHoverButton from "../../../common/BlueArrowButton";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getUserDetail } from "action/userAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NormalMultiSelect } from "component/common/NormalMultiSelect";
import validate from "service/validation";
import { PaymentApi, userApi } from "service/apiVariables";
import { api } from "service/api";
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

// firstName
// lastName
// password
// email
// phoneNo
// signUpType
// mottoPasses
// status
// paymentProfileId
const MyProfileClass = ({ getUserDetail }) => {
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

  const [getUserData, setGetUserData] = useState();
  const [image, setImage] = useState();
  const [previewImage, setPreviewTmage] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewTmage(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreviewTmage(null);
    }
  }, [image]);

  const getUserPaymentDetails = () => {
    const { getPaymentMethods } = PaymentApi;

    api({ ...getPaymentMethods }).then(({ data }) => {
      const { type } = data[0] || {};

      setPaymentMethod(type);
    });
  };

  useEffect(() => {
    getUserProfileData();
    getUserPaymentDetails();
  }, []);

  function getUserProfileData() {
    getUserDetail().then((data) => {
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
    });
  }

  const handleInput = (e) => {
    const { name, value, label } = e.target || e || {};

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
        format: {
          pattern: /^[1-9][0-9]*$/,
          flags: "i",
          message: "^Invalid number",
        },
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
    };

    if (!validateFields(payload)) return;

    const { editUserData } = userApi;

    editUserData.body = payload;

    api({ ...editUserData });

    // console.log(payload);
  };
  // const handleSaveChange = () => {
  //     const { firstName } = userData;

  //     let payload = {
  //         firstName: firstName,
  //     };

  //     fetch("http://doodlebluelive.com:2307/v1/user/edit", {
  //         method: "POST",
  //         headers: new Headers({
  //             Authorization: localStorage.getItem("token"),
  //             "Content-Type": "application/x-www-form-urlencoded",
  //         }),
  //     })
  //         .then((response) => response.json())
  //         .then((data) => {
  //             setUserData(data["data"]);
  //         });
  // };

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
                    {previewImage ? (
                      <img
                        src={previewImage}
                        style={{
                          objectFit: "cover",
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                        }}
                        onClick={() => {
                          setPreviewTmage(null);
                        }}
                      />
                    ) : (
                      <div className="combin_profile">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            fileInputRef.current.click();
                          }}
                        >
                          <img
                            src={Profile}
                            alt="icon"
                            style={{
                              objectFit: "cover",
                              width: "100px",
                              height: "100px",
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
                          onClick={(event) => {
                            event.preventDefault();
                            fileInputRef.current.click();
                          }}
                        />
                      </div>
                    )}

                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                          setImage(file);
                        } else {
                          setImage(null);
                        }
                      }}
                    />
                    <h5>Remove Profile Picture</h5>
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
                          {/* <Dropdown
                            className="custom_dropdown"
                            title="Select Location"
                            list={options}
                            value={userData.location}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                location: e.value,
                              });
                              console.log(e.value);
                            }}
                            name="location"
                          /> */}
                        </div>
                        <div className="input_profile">
                          <label>Date of Birth </label>
                          <input
                            type="date"
                            value={userData.DOB}
                            onKeyDown={(e) =>
                              e.keyCode !== 8 ? e.preventDefault() : ""
                            }
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
                        <div className="input_profile">
                          <label>Payment Method </label>
                          <input
                            type="text"
                            value={paymentMethod}
                            disabled
                            onChange={() => {}}
                          />
                        </div>
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
              <button className="profile_save" onClick={handleSubmit}>
                SAVE CHANGES <BlueHoverButton />
              </button>
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
      getUserDetail,
    },
    dispatch
  );
};

const MyProfile = connect(null, mapDispatchToProps)(MyProfileClass);

export default MyProfile;
