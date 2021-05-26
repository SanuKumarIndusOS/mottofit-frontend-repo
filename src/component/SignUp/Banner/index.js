import React, { useState } from "react";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Phone from "../../../assets/files/SignUp/Phone Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import "./styles.scss";
import { Link, useHistory } from "react-router-dom";
import ArrowHover from "../../common/ButtonIcon/ArrowHover";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
// import { api } from "service/api";
import { AuthApi } from "service/apiVariables";
import { loginOrSignUp } from "action/authAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import useForm from "./useForm";
import validateInfo from "./validation";

const SignUpFC = ({ loginOrSignupAct, submitForm }) => {
    const { data, handleFormSubmit, error, setData } = useForm(
        validateInfo,
        submitForm
    );

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [apiError, setApiError] = useState("");
    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const history = useHistory();

    async function signUp() {
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNo: data.phoneNo,
            password: data.password,
            cpassword: data.cpassword,
            location: data.location,
            signUpType: data.signUpType,
        };

        const { userSignUp } = AuthApi;

        if (Object.keys(error).length === 0) {
            loginOrSignupAct(userSignUp, payload)
                .then(() => {
                    history.push("/trainer/find");
                })
                .catch((error) => {
                    setApiError("Sorry, something went wrong.", error.message);
                });
        }
    }

    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const showConfirmPassword = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    return (
        <>
            <div className="main_container">
                <div className="wrapper">
                    <div className="inner_wrapper">
                        <div className="inner_items">
                            <h2>Sign Up with Motto!</h2>
                            <p>
                                Fill up the following details to create your
                                account
                            </p>
                            <div className="form_items">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="input_items">
                                        <input
                                            placeholder="Name"
                                            type="text"
                                            value={data.firstName}
                                            name="firstName"
                                            onChange={onChangeValue}
                                        />
                                        <img src={Person} alt="icon" />

                                        {error.firstName && (
                                            <span>{error.firstName}</span>
                                        )}
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="LastName"
                                            type="text"
                                            value={data.lastName}
                                            name="lastName"
                                            onChange={onChangeValue}
                                        />
                                        <img src={Person} alt="icon" />
                                        {error.lastName && (
                                            <span>{error.lastName}</span>
                                        )}
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Location"
                                            type="text"
                                            value={data.location}
                                            name="location"
                                            onChange={onChangeValue}
                                        />
                                        <img src={Person} alt="icon" />
                                        {error.location && (
                                            <span>{error.location}</span>
                                        )}
                                    </div>

                                    <div className="input_items">
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
                                    <div className="input_items">
                                        <input
                                            placeholder="Phone"
                                            type="text"
                                            value={data.phoneNo}
                                            name="phoneNo"
                                            onChange={onChangeValue}
                                        />
                                        <img src={Phone} alt="icon" />
                                        {error.phoneNo && (
                                            <span>{error.phoneNo}</span>
                                        )}
                                    </div>
                                    <div className="input_items">
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
                                            <span>{error.password}</span>
                                        )}
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="Confirm Password"
                                            type={
                                                confirmPasswordShown
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="cpassword"
                                            value={data.cpassword}
                                            onChange={onChangeValue}
                                        />
                                        <img
                                            src={Password}
                                            alt="icon"
                                            onClick={showConfirmPassword}
                                        />

                                        {error.cpassword && (
                                            <span>{error.cpassword}</span>
                                        )}
                                    </div>
                                    {apiError && (
                                        <span className="errorMessage">
                                            {apiError}
                                        </span>
                                    )}

                                    <div className="or_items">
                                        <div className="hr_line"></div>
                                        <div>
                                            <p>or</p>
                                        </div>
                                        <div className="hr_line"></div>
                                    </div>
                                    <div className="social_buttons">
                                        <button className="facebook-auth">
                                            <img src={Facebook} alt="icon" />
                                            Sign Up with Facebook
                                        </button>

                                        <button className="google-auth">
                                            <img src={Google} alt="icon" />
                                            Sign up with Google
                                        </button>
                                    </div>
                                    <div className="submit_button">
                                        <button
                                            type="submit"
                                            onClick={signUp()}
                                        >
                                            Continue to Account{" "}
                                            <ArrowHoverBlacked />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="login_content_signup">
                                <h1>Already have an account?</h1>

                                <Link to="/">
                                    Sign In now
                                    <ArrowHover />
                                </Link>
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

const SignUp = connect(null, mapDispatchToProps)(SignUpFC);

export default SignUp;
