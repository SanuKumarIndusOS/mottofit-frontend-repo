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
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Dropdown } from "reactjs-dropdown-component";
import { trainerDetail } from "action/trainerAct";
import "./dropdown.scss";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
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
        value: "Male",
    },
    {
        label: "Female",
        value: "Female",
    },
];
const AboutTrainerFC = ({
    updateTrainerDetails,
    details,
    trainerPersonalData,
    trainerDetail,
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

        localStorage.setItem(
            "aboutTrainerDetails",
            JSON.stringify(aboutTrainerData)
        );
        if (
            moment().diff(aboutTrainerData.dob, "years", false) <= 21 ||
            aboutTrainerData.phone.length < 11
        ) {
            alert("Please fill in required data");
        } else {
            history.push(`/trainer/background`);
            updateTrainerDetails(storeData);
        }
    };

    useEffect(() => {
        let newtrainerObj = JSON.parse(
            localStorage.getItem("aboutTrainerDetails")
        );
        console.log(newtrainerObj);

        if (newtrainerObj) {
            trainerDetail().then((data) => {
                console.log(data, "datadata");
                setAboutTrainerData({
                    ...aboutTrainerData,
                    phone: `${newtrainerObj.phone || ""}`,
                    email: data["email"],
                    firstName: data["firstName"] + " " + data["lastName"],
                    location: `${newtrainerObj.location || ""}`,
                    dob: `${newtrainerObj.dob || ""}`,
                    gender: `${newtrainerObj.gender || ""}`,
                    websiteURL: `${newtrainerObj.websiteURL || ""}`,
                    instagram: `${newtrainerObj.instagram || ""}`,
                });
            });
            if (newtrainerObj.gender !== "") {
                genderDropdownRef.current.selectSingleItem({
                    value: newtrainerObj.gender,
                });
            }

            if (newtrainerObj.location !== "") {
                locationDropdownRef.current.selectSingleItem({
                    value: newtrainerObj.location,
                });
            }
        }

        else {
            trainerDetail().then((data) => {
                setAboutTrainerData({
                    ...aboutTrainerData,
                    email: data["email"],
                    firstName: data["firstName"] + " " + data["lastName"],
                    phone: data["phoneNumber"],
                })
            })
        }

        if(newtrainerObj)
        localStorage.removeItem("aboutTrainerDetails");
    }, []);

    const genderDropdownRef = React.useRef();
    const locationDropdownRef = React.useRef();

    console.log(locationDropdownRef);

    return (
        <>
            <div className="container main">
                <div className="wrapper_about">
                    <h2>Tell us a little bit about you</h2>
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
                                    ref={register({
                                        required: true,
                                    })}
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
                                {errors.firstName && <span>{"required"}</span>}
                            </div>

                            <div className="wrapper_innerInput">
                                <label className="bg_down">Location*</label>
                                <div className="iconwrapper">
                                    <Dropdown
                                        className="custom_dropdown"
                                        ref={locationDropdownRef}
                                        title="Select Your City"
                                        list={locations}
                                        value={
                                            locationDropdownRef.current
                                                ? locationDropdownRef.current
                                                    .state.selectedItem
                                                : ""
                                        }
                                        onChange={(e) => {
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                location: e.value,
                                            });
                                        }}
                                        name="location"
                                    />
                                </div>
                                {locationDropdownRef.current !== undefined &&
                                    locationDropdownRef.current.state
                                        .selectedItem === null ? (
                                    <span>required field</span>
                                ) : null}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Date of Birth*</label>

                                <input
                                    placeholder="DD/MM/YYYY"
                                    type="date"
                                    onFocus={(e) =>
                                        (e.currentTarget.type = "date")
                                    }
                                    placeholder="MM/DD/YYYY"
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
                                {aboutTrainerData.dob &&
                                    moment().diff(
                                        aboutTrainerData.dob,
                                        "years",
                                        false
                                    ) <= 21 && (
                                        <span>
                                            Trainer should be more than 21 years
                                            of age
                                        </span>
                                    )}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Select Your Gender*</label>
                                <div className="iconwrapper">
                                    <Dropdown
                                        className="custom_dropdown"
                                        title="Select Gender"
                                        ref={genderDropdownRef}
                                        list={gender}
                                        value={
                                            genderDropdownRef.current
                                                ? genderDropdownRef.current
                                                    .state.selectedItem
                                                : ""
                                        }
                                        onChange={(e) => {
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                gender: e.value,
                                            });
                                        }}
                                        name="gender"
                                    />
                                </div>

                                {genderDropdownRef.current !== undefined &&
                                    genderDropdownRef.current.state.selectedItem ===
                                    null ? (
                                    <span>required field</span>
                                ) : null}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Email*</label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    ref={register({
                                        required: true,
                                    })}
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
                                        placeholder="Add your weblink"
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
            trainerDetail,
        },
        dispatch
    );
};

const AboutTrainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutTrainerFC);

export default AboutTrainer;
