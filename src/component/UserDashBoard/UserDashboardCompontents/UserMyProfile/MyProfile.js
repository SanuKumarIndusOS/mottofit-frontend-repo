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
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
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
  const [getUserData, setGetUserData] = useState();
  const [image, setImage] = useState();
  const [previewImage, setPreviewTmage] = useState();
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

  useEffect(() => {
    getUserProfileData();
  }, []);

  function getUserProfileData() {
    getUserDetail().then((data) => {
      setUserData(data);
    });
  }

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
                    <form>
                      <div className="inner_profile_form">
                        <div className="input_profile">
                          <label>Name </label>
                          <input
                            type="text"
                            value={userData.firstName}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                firstName: e.target.value,
                              });
                            }}
                            name="firstName"
                          />
                        </div>
                        <div className="input_profile">
                          <label>Location </label>
                          <Dropdown
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
                          />
                        </div>
                        <div className="input_profile">
                          <label>Date of Birth </label>
                          <input type="date" value={userData.location} />
                        </div>
                        <div className="input_profile">
                          <label>Gender </label>
                          {/* <Dropdown
                                        className="custom_dropdown"
                                        title="Select Gender"
                                        list={gender}
                                        value={aboutTrainerData.gender}
                                        onChange={(e) => {
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                gender: e.value,
                                            });
                                        }}
                                        name="gender"
                                    /> */}
                        </div>
                        <div className="input_profile">
                          <label>Email </label>
                          <input
                            type="text"
                            value={userData.email}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="input_profile">
                          <label>Phone </label>

                          <ReactPhoneInput
                            type="phone"
                            disableDropdown
                            // disableAreaCodes
                            countryCodeEditable={false}
                            value={userData.phoneNo}
                            placeholder="Phone Number"
                            country="us"
                            inputProps={{
                              name: "phoneNo",
                            }}
                            name="phoneNo"
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                phoneNo: e,
                              })
                            }
                          />
                        </div>
                        <div className="input_profile">
                          <label>Payment Method </label>
                          <input type="text" />
                        </div>
                        <div className="input_profile">
                          <label>Password </label>
                          <input type="text" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <button className="profile_save">
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
