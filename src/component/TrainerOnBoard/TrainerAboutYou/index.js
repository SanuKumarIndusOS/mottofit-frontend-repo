import React, { useState, useEffect } from "react";
import "./styles.scss";
import Instagram from "../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../assets/files/SVG/Web Icon.svg";

import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { useForm } from "react-hook-form";

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
import "react-datepicker/dist/react-datepicker.css";
// import useForm from "./useForm";
// import validateInfo from "./validation";

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

    const handleTrainerBackground = () => {
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
                                        required:
                                            "Mandatory fields cannot be empty",
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
                                    />
                                </div>
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
                                />
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Phone*</label>

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

                                {aboutTrainerData.phone &&
                                    aboutTrainerData.phone.length < 11 && (
                                        <span>
                                            Phone Number should contain 10
                                            digits
                                        </span>
                                    )}
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
