import React, { useState, useEffect } from "react";
import "./styles.scss";
import Instagram from "../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../assets/files/SVG/Web Icon.svg";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { useForm } from "react-hook-form";
// import validation from "../Validation/validation";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { updateTrainerDetails, getTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { history } from "helpers";
import axios from "axios";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Dropdown } from "reactjs-dropdown-component";
import "./dropdown.scss";
// import useForm from "./useForm";
// import validateInfo from "./validation";

// import { Multiselect } from "multiselect-react-dropdown";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Select from "react-select";
const locations = [
    {
        label: "New York City",
        value: "New York City",
    },
    {
        label: "Miami",
        value: "Miami",
    },
    {
        label: "Hamptons",
        value: "Hamptons",
    },
    {
        label: "Palm Beach",
        value: "Palm Beach",
    },
];

const gender = [
    {
        label: "Male",
        value: "male",
    },
    {
        label: "Female",
        value: "female",
    },
];
const AboutTrainerFC = ({
    updateTrainerDetails,
    details,
    trainerPersonalData,
    // submitForm,
}) => {
    //   const [location, setLocation] = useState("");
    //   const [dob, setDob] = useState(0 - 0 - 0);
    //   const [email, setEmail] = useState("");
    //   const [gender, setGender] = useState("");
    //   const [phone, setPhone] = useState("");
    //   const [websiteURL, setWebsiteURL] = useState("");
    //   const [instagram, setInstagram] = useState("");

    const { register, errors, handleSubmit } = useForm();
    // const {
    //     aboutTrainerData,
    //     handleFormSubmit,
    //     error,
    //     setAboutTrainerData,
    //     // dataSubmit,
    // } = useForm(validateInfo, submitForm);
    const [aboutTrainerData, setAboutTrainerData] = useState({
        location: "",
        dob: "",
        email: "",
        gender: "",
        phone: "",
        websiteURL: "",
        instagram: "",
        firstName: "",
    });
    const [error, setError] = useState({});

    // const history = useHistory();

    const handleTrainerBackground = () => {
        // history.push("/trainer/background");
        // console.log(aboutTrainerData);

        const storeData = {
            details: {
                ...details,
                firstName: aboutTrainerData.firstName,
                dob: aboutTrainerData.dob,
                email: aboutTrainerData.email,
                gender: aboutTrainerData.gender,
                phone: aboutTrainerData.phone,
                location: aboutTrainerData.location,
                websiteLink: aboutTrainerData.websiteURL,
                instaHandle: aboutTrainerData.instagram,
            },
        };
        console.log(storeData);

        history.push(`/trainer/background`);
        updateTrainerDetails(storeData);
    };

    useEffect(() => {
        if (Object.keys(details).length > 3) {
            let tempData = {
                location: details.location,
                dob: details.dob,
                email: details.email,
                gender: details.gender,
                phone: details.phone,
                websiteURL: details.websiteLink,
                instagram: details.instaHandle,
                firstName: details.firstName,
            };
            setAboutTrainerData(tempData);
        }

        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };

        axios
            .get("http://doodlebluelive.com:2307/v1/trainer", { headers })
            .then((data) => {
                console.log(data["data"]["data"]["phoneNumber"]);

                // prepopulate
                setAboutTrainerData({
                    ...aboutTrainerData,
                    phone: data["data"]["data"]["phoneNumber"],
                    email: data["data"]["data"]["email"],
                    firstName: data["data"]["data"]["firstName"],
                });
            });
    }, []);

    return (
        <>
            <div className="container main">
                <div className="wrapper_about">
                    <h2>Tell us a little bit about you</h2>
                    {/* <p>
                        *Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem ipsum has been the. *All
                        these fields are mandatory.{" "}
                    </p> */}
                    <br></br>
                    <div className="outter_form">
                        <form
                            className="wrapper_inputs"
                            // onSubmit={handleFormSubmit}
                        >
                            <div className="wrapper_innerInput">
                                <label>Name*</label>
                                <input
                                    placeholder="Name"
                                    type="name"
                                    name="name"
                                    style={{ textTransform: "capitalize" }}
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    value={aboutTrainerData.firstName}
                                    // ref={register({
                                    //     required: "This filed is required",
                                    //     minLength: {
                                    //         value: 2,
                                    //         message: "Enter a valid name",
                                    //     },
                                    // })}
                                    name="firstName"
                                />
                                {error.firstName && (
                                    <span>{error.firstName}</span>
                                )}
                            </div>

                            <div className="wrapper_innerInput">
                                <label className="bg_down">Location*</label>
                                <div className="iconwrapper">
                                    <Dropdown
                                        className="custom_dropdown"
                                        title="Select Location"
                                        list={locations}
                                        value={aboutTrainerData.location}
                                        onChange={(e) => {
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                location: e.value,
                                            });
                                        }}
                                        name="location"
                                    />
                                </div>
                                {/* {errors.location && (
                                    <span>{errors.location.message}</span>
                                )} */}
                                {/* {error.location && (
                                    <span>{error.location}</span>
                                )} */}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Date of Birth*</label>
                                <input
                                    placeholder="MM/DD/YYYY"
                                    type="date"
                                    value={aboutTrainerData.dob}
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            dob: e.target.value,
                                        })
                                    }
                                    name="dob"
                                    ref={register({
                                        required: "Please select the DOB",
                                    })}
                                />
                                {errors.dob && (
                                    <span>{errors.dob.message}</span>
                                )}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Gender*</label>
                                <div className="iconwrapper">
                                    <Dropdown
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
                                        // name="gender"
                                        // ref={register({
                                        //     required:
                                        //         "Please select the gender",
                                        // })}
                                    />
                                </div>
                                {/* {error.gender && <span>{error.gender}</span>} */}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Email*</label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={aboutTrainerData.email}
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            email: e.target.value,
                                        })
                                    }
                                    name="email"
                                    // ref={register({
                                    //     pattern:
                                    //         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                    //     required: true,
                                    //     minLength: 8,
                                    // })}
                                />
                                {/* {error.email && (<span>{error.email}</span>)} */}

                                {/* {errors.email?.type === "required" && (
                                    <span>This input is required</span>
                                )}
                                {errors.email?.type === "minLength" && (
                                    <span>
                                        This field should contain greater then 8
                                        charater
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span>
                                        Please enter a valid email address
                                    </span>
                                )} */}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Phone*</label>
                                {/* <input
                                    placeholder="Phone Number"
                                    type="phone"
                                    value={aboutTrainerData.phone}
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            phone: e.target.value,
                                        })
                                    }
                                    name="phone"
                                    ref={register({
                                        pattern: /^[0-9]*$/i,
                                        required: true,
                                        minLength: 10,
                                    })}
                                /> */}
                                <ReactPhoneInput
                                    type="phone"
                                    disableDropdown
                                    disableAreaCodes
                                    countryCodeEditable={false}
                                    value={aboutTrainerData.phone}
                                    placeholder="Phone Number"
                                    // country="us"
                                    inputProps={{
                                        name: "phone",
                                    }}
                                    name="phoneNumber"
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            phone: e,
                                        })
                                    }
                                />
                                {/* {!aboutTrainerData.phone && (
                  <span>This input is required</span>
                )} */}
                                {aboutTrainerData.phone &&
                                    aboutTrainerData.phone.length < 11 && (
                                        <span>
                                            Phone Number should contain 10
                                            digits
                                        </span>
                                    )}
                                {/* {errors.phone?.type === "required" && (
                                    <span>This input is required</span>
                                )}
                                {errors.phone?.type === "minLength" && (
                                    <span>
                                        Phone Number should contain 10 digits
                                    </span>
                                )}
                                {errors.phone?.type === "pattern" && (
                                    <span>
                                        Please enter a valid phone number
                                    </span>
                                )} */}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Website</label>
                                <div className="iconwrapper">
                                    <input
                                        placeholder="Add your website"
                                        type="text"
                                        value={aboutTrainerData.websiteURL}
                                        onChange={(e) =>
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                websiteURL: e.target.value,
                                            })
                                        }
                                    />
                                    <img src={Web} alt="icon" />
                                </div>
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Instagram</label>
                                <div className="iconwrapper">
                                    <input
                                        placeholder="Add your Instagram Handle"
                                        type="text"
                                        value={aboutTrainerData.instagram}
                                        onChange={(e) =>
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                instagram: e.target.value,
                                            })
                                        }
                                    />
                                    <img src={Instagram} alt="icon" />
                                </div>
                            </div>

                            <div className="submit_button">
                                <button
                                    type="submit"
                                    // to={{
                                    //     pathname: "/trainer/background",
                                    //     state: aboutTrainerData,
                                    // }}
                                    // onClick={handleTrainerBackground}

                                    //react hook form
                                    onClick={handleSubmit(
                                        handleTrainerBackground
                                    )}
                                >
                                    Continue
                                    <ArrowHoverBlacked />
                                </button>
                            </div>
                        </form>
                    </div>
                    <img
                        src={WaterMark}
                        alt="icon"
                        className="about_watermark"
                    />
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    details: state.trainerReducer.details,
    trainerPersonalData: state.trainerReducer.data,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            updateTrainerDetails,
            getTrainerDetails,
        },
        dispatch
    );
};

const AboutTrainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutTrainerFC);

export default AboutTrainer;
