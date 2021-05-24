import React, { useState, useEffect } from "react";
import "./styles.scss";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Phone from "../../../assets/files/SignUp/Phone Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import { Link, useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import BlueHoverButton from "../../common/BlueArrowButton";
import { connect } from "react-redux";
import { loginOrSignUp } from "action/authAct";
import { bindActionCreators } from "redux";
import { AuthApi } from "service/apiVariables";
import useForm from "./useForm";
import validateInfo from "./validation";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

const BannerTrainerFC = ({ loginOrSignupAct, submitForm }) => {
    const history = useHistory();

    const { data, handleFormSubmit, error, setData, dataSubmit } = useForm(
        validateInfo,
        submitForm
    );

    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [apiError, setApiError] = useState("");
    // const { register, errors, handleSubmit, watch } = useForm();
    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const showConfirmPassword = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    async function trainerSignUp() {
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            cpassword: data.cpassword,
            phoneNumber: data.phoneNumber,
            signUpType: data.signUpType,
        };
        console.log(payload);

        const { trainerSignUp } = AuthApi;

        if (dataSubmit) {
            loginOrSignupAct(trainerSignUp, payload)
                .then(({ data }) => {
                    // console.log(data);
                    history.push("/trainer/about");
                })
                .catch((error) => {
                    setApiError(error.message);
                });
        }
    }

    return (
        <>
            <div className="banner_container_trainer">
                <div className="wrapper_main container">
                    <div className="item_left">
                        <h2>Sign Up to be a part of the Motto Family</h2>
                        <h6>
                            Create an account to start the application process
                            of becoming a Motto trainer in one of our live
                            cities.
                        </h6>
                    </div>
                    <div className="wrapper">
                        <div className="item_right">
                            <div className="inner_wrapper ">
                                <div className="inner_items">
                                    <h3>Train with Motto!</h3>
                                    <p>
                                        Sign up to apply to become a Motto
                                        Trainer
                                    </p>
                                    <div className="form_items_trainer">
                                        <form onSubmit={handleFormSubmit}>
                                            <div className="input_items_trainer">
                                                <input
                                                    placeholder="Full Name"
                                                    type="text"
                                                    value={data.name}
                                                    name="name"
                                                    onChange={onChangeValue}
                                                    className="fullname"
                                                />
                                                <img src={Person} alt="icon" />
                                                {error.name && (
                                                    <span>{error.name}</span>
                                                )}
                                            </div>

                                            <div className="input_items_trainer">
                                                <input
                                                    placeholder="Email"
                                                    type="email"
                                                    value={data.email}
                                                    name="email"
                                                    onChange={onChangeValue}
                                                />
                                                <img src={Mail} alt="icon" />
                                                {error.email && (
                                                    <span>{error.email}</span>
                                                )}
                                            </div>

                                            <div className="input_items_trainer">
                                                <ReactPhoneInput
                                                    disableDropdown
                                                    // prefix="+1"
                                                    countryCodeEditable={false}
                                                    country="us"
                                                    placeholder="Phone Number"
                                                    inputProps={{
                                                        name: "phoneNumber",
                                                    }}
                                                    value={data.phoneNumber}
                                                    name="phoneNumber"
                                                    onChange={(e) => {
                                                        console.log(e);
                                                        setData({
                                                            ...data,
                                                            phoneNumber: e,
                                                        });
                                                    }}
                                                />

                                                <img src={Phone} alt="icon" />
                                                {error.phoneNumber && (
                                                    <span>
                                                        {error.phoneNumber}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items_trainer">
                                                <input
                                                    placeholder="Create Password"
                                                    type={
                                                        passwordShown
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={data.password}
                                                    name="password"
                                                    onChange={onChangeValue}
                                                />
                                                <img
                                                    src={Password}
                                                    alt="icon"
                                                    onClick={showPassword}
                                                />
                                                {error.password && (
                                                    <span>
                                                        {error.password}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items_trainer">
                                                <input
                                                    placeholder="Confirm Password"
                                                    type={
                                                        confirmPasswordShown
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={data.cpassword}
                                                    name="cpassword"
                                                    onChange={onChangeValue}
                                                />
                                                <img
                                                    src={Password}
                                                    alt="icon"
                                                    onClick={
                                                        showConfirmPassword
                                                    }
                                                />
                                                {error.cpassword && (
                                                    <span>
                                                        {error.cpassword}
                                                    </span>
                                                )}
                                            </div>
                                            {apiError && (
                                                <span className="errorMessage">
                                                    {apiError}
                                                </span>
                                            )}

                                            <div className="submit_button">
                                                <button
                                                    type="submit"
                                                    onClick={trainerSignUp()}
                                                >
                                                    <p>Continue to Account</p>
                                                    <ArrowHoverBlacked />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="login_items">
                                        <h4>Already have an account?</h4>

                                        <Link to="/">
                                            Sign In now
                                            <BlueHoverButton />
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
            loginOrSignupAct: loginOrSignUp,
        },
        dispatch
    );
};

const BannerTrainer = connect(null, mapDispatchToProps)(BannerTrainerFC);

export default BannerTrainer;
