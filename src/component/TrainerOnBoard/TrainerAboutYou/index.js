import React, { useState, useEffect } from "react";
import "./styles.scss";
import Instagram from "../../../assets/files/SVG/Insta Icon.svg";
import Web from "../../../assets/files/SVG/Web Icon.svg";
import DropDown from "../../../assets/files/SVG/Drop Down 4.svg";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { useForm } from "react-hook-form";
// import validation from "../Validation/validation";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { updateTrainerDetails, getTrainerDetails } from "action/trainerAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { history } from "helpers";

const AboutTrainerFC = ({
    updateTrainerDetails,
    details,
    trainerPersonalData,
}) => {
    //   const [location, setLocation] = useState("");
    //   const [dob, setDob] = useState(0 - 0 - 0);
    //   const [email, setEmail] = useState("");
    //   const [gender, setGender] = useState("");
    //   const [phone, setPhone] = useState("");
    //   const [websiteURL, setWebsiteURL] = useState("");
    //   const [instagram, setInstagram] = useState("");

    const { register, errors, handleSubmit } = useForm();

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

        console.log(storeData, aboutTrainerData);

        // setError(validation(aboutTrainerData));

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
    }, []);

    return (
        <>
            <div className="container main">
                <div className="wrapper_about">
                    <h2>Tell us a little bit about you</h2>
                    <p>
                        *Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem ipsum has been the. *All
                        these fields are mandatory.{" "}
                    </p>
                    <div className="outter_form">
                        <form className="wrapper_inputs">
                            <div className="wrapper_innerInput">
                                <label>Name*</label>
                                <input
                                    placeholder="Name"
                                    type="name"
                                    name="name"
                                    onChange={(e) =>
                                        setAboutTrainerData({
                                            ...aboutTrainerData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    value={aboutTrainerData.firstName}
                                    ref={register({
                                        required: "This filed is required",
                                        minLength: {
                                            value: 2,
                                            message: "Enter a valid name",
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <span>{errors.name.message}</span>
                                )}
                            </div>

                            <div className="wrapper_innerInput">
                                <label className="bg_down">Location*</label>
                                <div className="iconwrapper">
                                    <select
                                        required
                                        value={aboutTrainerData.location}
                                        onChange={(e) =>
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                location: e.target.value,
                                            })
                                        }
                                        name="location"
                                        ref={register({
                                            required:
                                                "Please select the location",
                                        })}
                                    >
                                        <option value="" disabled selected>
                                            Select a Motto City
                                        </option>
                                        <option>New York</option>
                                        <option>Miami</option>
                                        <option>Hampton</option>
                                        <option>Palm Beach</option>
                                    </select>
                                    <img src={DropDown} alt="icon" />
                                </div>
                                {errors.location && (
                                    <span>{errors.location.message}</span>
                                )}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Date of Birth*</label>
                                <input
                                    placeholder="DOB"
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
                                    <select
                                        required
                                        // name="gender"
                                        // id="gender"
                                        value={aboutTrainerData.gender}
                                        onChange={(e) =>
                                            setAboutTrainerData({
                                                ...aboutTrainerData,
                                                gender: e.target.value,
                                            })
                                        }
                                        name="gender"
                                        ref={register({
                                            required:
                                                "Please select the gender",
                                        })}
                                    >
                                        <option value="" disabled selected>
                                            Select your Gender
                                        </option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    <img src={DropDown} alt="icon" />
                                </div>
                                {errors.gender && (
                                    <span>{errors.gender.message}</span>
                                )}
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
                                    ref={register({
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                        required: true,
                                        minLength: 8,
                                    })}
                                />
                                {/* {error.email && (<span>{error.email}</span>)} */}

                                {errors.email?.type === "required" && (
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
                                )}
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Phone*</label>
                                <input
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
                                />
                                {errors.phone?.type === "required" && (
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
                                <Link
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
                                </Link>
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
