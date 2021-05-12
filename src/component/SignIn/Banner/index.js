// TODO Error handling on login page

import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles.scss";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
// import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import { AuthApi } from "service/apiVariables";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, loginOrSignUp } from "action/authAct";
import useForm from "./useForm";
import validateInfo from  "./validation";

const closeIcon = <img src={CloseIcon} alt="close" className="close_login" />;

const SignInFC = ({ showModel, setShowModel, loginAct ,submitForm }) => {
    const history = useHistory();
    const myRef = useRef(null);
    const {data,handleFormSubmit,error,setData} = useForm(validateInfo, submitForm);

    const [passwordShown, setPasswordShown] = useState(false);
    const [apiError, setApiError] = useState("");

    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const { register, errors, handleSubmit } = useForm();
    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    async function logIn() {
        const payload = {
            email: data.email,
            password: data.password,
            signUpType: data.signUpType,
            deviceName: data.deviceName,
        };

        const { loginApi } = AuthApi;

        // NEED USER DATA AFTER LOGIN AND SIGNUP

         if(Object.keys(error).length === 0){
        loginAct(loginApi, payload)
        .then((res) => {
                if (res["type"] === "trainer") {
                    fetch("http://doodlebluelive.com:2307/v1/trainer", {
                        method: "get",
                        headers: new Headers({
                            Authorization: localStorage.getItem("token"),
                            "Content-Type": "application/x-www-form-urlencoded",
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(
                                "rr",
                                data["data"]["applicationStatus"]
                            );
                            if (data["data"]["applicationStatus"] === null) {
                                history.push("/trainer/about");
                            } else {
                                history.push("/trainers/dashboard/session");
                            }
                        });
                } else {
                    history.push("/trainer/find");
                }
            })
            .catch((error) => {
                setApiError("Sorry, something went wrong.", error.message);
            });
        }
        
        // const { loginApi } = AuthApi;

        // const requestOptions = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(item),
        // };
        // fetch("http://doodlebluelive.com:2307/v1/login", requestOptions)
        //   .then(async (response) => {
        //     const data = await response.json();
        //     localStorage.setItem("user-info", JSON.stringify(data));
        //     if (response.ok) {
        //       history.push("/trainer/find");
        //     } else {
        //       setApiError("User Not Registered", response.statusText);
        //     }
        //   })
        //   .catch((error) => {
        //     setApiError("Sorry, something went wrong.", error.message);
        //   });
    }

    const preventSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="modal-container">
                {showModel ? (
                    <Modal
                        open={showModel}
                        center
                        container={myRef.current}
                        styles={{
                            boaderRadius: "100px",
                        }}
                        closeIcon={closeIcon}
                        onClose={() => setShowModel(false)}
                    >
                        <div className="outter_container">
                            <div className="inner_container"></div>
                            <div className="wrapper_inner">
                                <h2>Welcome to Motto!</h2>
                                <p>
                                    Sign into your account by filling in the
                                    details below
                                </p>
                                <div className="form_item_login">
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="input_item1_signin">
                                            <input
                                                placeholder="Email"
                                                type="email"
                                                value={data.email}
                                                name="email"
                                                onChange={onChangeValue}
                                                // ref={register({
                                                //     pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                                //     required: true,
                                                //     minLength: 8,
                                                // })}
                                            />
                                            <img src={Mail} alt="icon" />

                                            {/* {errors.email?.type ===
                                                "required" && (
                                                <span>
                                                    This field is required
                                                </span>
                                            )}
                                            {errors.email?.type ===
                                                "minLength" && (
                                                <span>
                                                    This field should contain
                                                    greater then 8 charater
                                                </span>
                                            )} */}
                                            {/* {error.email?.type ===
                                                "pattern" && (
                                                <span>
                                                    Please enter a valid email
                                                    address
                                                </span>
                                            )} */}
                                              {error.email && (
                                                    <span>
                                                        {error.email}
                                                    </span>
                                                )}
                                        </div>
                                        <div className="input_item1_signin">
                                            <input
                                                placeholder="Password"
                                                type={
                                                    passwordShown
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={data.password}
                                                onChange={onChangeValue}
                                                name="password"
                                                // ref={register({
                                                //     required: true,
                                                //     minLength: 6,
                                                //     maxLength: 16,
                                                //     pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/,
                                                // })}
                                            />
                                            <img
                                                src={Password}
                                                alt="icon"
                                                onClick={showPassword}
                                            />
                                            {/* {errors.password?.type ===
                                                "required" && (
                                                <span>
                                                    This input is required
                                                </span>
                                            )}
                                            {errors.password?.type ===
                                                "minLength" && (
                                                <span>
                                                    Password should be more then
                                                    6 Charcters
                                                </span>
                                            )} */}
                                            {/* {errors.password?.type ===
                                                "maxLength" && (
                                                <span>
                                                    This field exceed max length
                                                </span>
                                            )}
                                            {errors.password?.type ===
                                                "pattern" && (
                                                <span>
                                                    Password should contain
                                                    atleast one one captial
                                                    letter, number and special
                                                    character
                                                </span>
                                            )} */}
                                            {error.password && (
                                                    <span>
                                                        {error.password}
                                                    </span>
                                                )}
                                        </div>
                                        <div className="remember_container">
                                            <div className="remember_left">
                                                <input
                                                    className="check"
                                                    type="checkbox"
                                                    value="lsRememberMe"
                                                    id="rememberMe"
                                                />{" "}
                                                <label>Remember me</label>
                                            </div>
                                            <div className="forgotpass_right">
                                                <Link
                                                    to="/"
                                                    className="forgotpass"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </div>
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
                                                <img
                                                    src={Facebook}
                                                    alt="icon"
                                                />
                                                Sign In with Facebook
                                            </button>

                                            <button className="google-auth">
                                                <img src={Google} alt="icon" />
                                                Sign In with Google
                                            </button>
                                        </div>
                                        <div className="submit_button">
                                            <button
                                                className="login_button"
                                                type="submit"
                                                onClick={logIn}
                                            >
                                                Signin
                                                <ArrowHoverBlacked />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="login_items">
                                    <h4>Don't have an account yet?</h4>
                                    <div className="links_item_signup">
                                        <Link to="/user/signup">
                                            User Sign Up
                                            <BlueHoverButton />
                                        </Link>
                                        <Link to="/trainer/signup">
                                            Trainer Sign Up
                                            <BlueHoverButton />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            loginAct: loginOrSignUp,
        },
        dispatch
    );
};

const SignIn = connect(null, mapDispatchToProps)(SignInFC);

export default SignIn;
