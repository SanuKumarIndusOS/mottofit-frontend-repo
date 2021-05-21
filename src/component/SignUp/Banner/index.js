import React, { useState } from "react";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Phone from "../../../assets/files/SignUp/Phone Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
import ArrowHover from "../../common/ButtonIcon/ArrowHover";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { api } from "service/api";
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
    const { register, errors, handleSubmit, watch } = useForm();
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
        // console.log(item);
        // const requestOptions = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(item),
        // };

        const { userSignUp } = AuthApi;

        if (Object.keys(error).length === 0) {
            loginOrSignupAct(userSignUp, payload)
                .then((data) => {
                    history.push("/trainer/find");
                })
                .catch((error) => {
                    setApiError("Sorry, something went wrong.", error.message);
                });
        }
        // fetch("http://doodlebluelive.com:2307/v1/user/sign-up", requestOptions)
        //   .then(async (response) => {
        //     const data = await response.json();
        //     localStorage.setItem("user-info", JSON.stringify(data));

        //     if (response.ok) {
        //       history.push("/trainer/find");
        //     } else {
        //       setApiError("Email already registered", response.statusText);
        //     }
        //   })
    }

    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const showConfirmPassword = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    return (
        <>
            {/* {redirect ? <Redirect to={"/findtrainer"} /> : null} */}
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
                                            // ref={register({
                                            //     pattern: /^[A-Za-z]+$/i,
                                            //     required: true,
                                            //     minLength: 2,
                                            // })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {/* {errors.firstName && (
                                            <span>
                                                {errors.firstName.message}
                                            </span>
                                        )}
                                        {errors.firstName?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )}
                                        {errors.firstName?.type ===
                                            "minLength" && (
                                            <span>
                                                This field should contain more
                                                then one charater
                                            </span>
                                        )} */}
                                        {/* {errors.firstName?.type ===
                                            "pattern" && (
                                            <span>
                                                This field accept only alphabets
                                            </span>
                                        )} */}
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
                                            // ref={register({
                                            //     pattern: /^[A-Za-z]+$/i,
                                            //     required: true,
                                            //     minLength: 2,
                                            // })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {error.lastName && (
                                            <span>{error.lastName}</span>
                                        )}
                                        {/* {errors.lastName && (
                                            <span>
                                                {errors.lastName.message}
                                            </span>
                                        )}
                                        {errors.lastName?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )}
                                        {errors.lastName?.type ===
                                            "minLength" && (
                                            <span>
                                                This field should contain more
                                                then one charater
                                            </span>
                                        )} */}
                                        {/* {errors.lastName?.type ===
                                            "pattern" && (
                                            <span>
                                                This field accept only alphabets
                                            </span>
                                        )} */}
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Location"
                                            type="text"
                                            value={data.location}
                                            name="location"
                                            onChange={onChangeValue}
                                            // ref={register({
                                            //     pattern: /^[A-Za-z]+$/i,
                                            //     required: true,
                                            //     minLength: 2,
                                            // })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {error.location && (
                                            <span>{error.location}</span>
                                        )}

                                        {/* {errors.location && (
                                            <span>
                                                {errors.location.message}
                                            </span>
                                        )}
                                        {errors.location?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )} */}
                                        {/* {errors.location?.type ===
                                            "minLength" && (
                                            <span>
                                                This field should contain more
                                                then one charater
                                            </span>
                                        )}
                                        {errors.location?.type ===
                                            "pattern" && (
                                            <span>
                                                This field accept only alphabets
                                            </span>
                                        )} */}
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            value={data.email}
                                            name="email"
                                            onChange={onChangeValue}
                                            // ref={register({
                                            //     required:
                                            //         "This filed is required",
                                            //     minLength: {
                                            //         value: 2,
                                            //         message:
                                            //             "Enter a valid name",
                                            //     },
                                            // })}
                                        />
                                        <img src={Mail} alt="icon" />

                                        {error.email && (
                                            <span>{error.email}</span>
                                        )}
                                        {/* {errors.email && (
                                            <span>{errors.email.message}</span>
                                        )} */}
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="Phone"
                                            type="text"
                                            value={data.phoneNo}
                                            name="phoneNo"
                                            onChange={onChangeValue}
                                            // ref={register({
                                            //     required: true,
                                            //     minLength: 6,
                                            //     maxLength: 11,
                                            // })}
                                        />
                                        <img src={Phone} alt="icon" />
                                        {error.phoneNo && (
                                            <span>{error.phoneNo}</span>
                                        )}

                                        {/* {errors.phoneNo && (
                                            <span>
                                                {errors.phoneNo.message}
                                            </span>
                                        )} */}
                                        {/* {errors.phoneNo?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )}
                                        {errors.phoneNo?.type ===
                                            "minLength" && (
                                            <span>Enter a valid number</span>
                                        )}
                                        {errors.phoneNo?.type ===
                                            "maxLength" && (
                                            <span>
                                                This field exceed max length
                                            </span>
                                        )} */}
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
                                            // ref={register({
                                            //     required: true,
                                            //     minLength: 6,
                                            //     maxLength: 16,
                                            //     // pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                            // })}
                                        />
                                        <img
                                            src={Password}
                                            alt="icon"
                                            onClick={showPassword}
                                        />
                                        {error.password && (
                                            <span>{error.password}</span>
                                        )}

                                        {/* {errors.password?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )}
                                        {errors.password?.type ===
                                            "minLength" && (
                                            <span>
                                                Password should be more then 6
                                                Charcters
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
                                                Password should contain atleast
                                                one one captial letter, number
                                                and special character
                                            </span>
                                        )} */}
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
                                            // ref={register({
                                            //     validate: (value) =>
                                            //         value === watch("password"),

                                            //     // validate: value =>
                                            //     // value === password.current || "The passwords do not match",
                                            //     required: true,
                                            //     minLength: 6,
                                            //     maxLength: 16,
                                            //     // pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                            // })}
                                        />
                                        <img
                                            src={Password}
                                            alt="icon"
                                            onClick={showConfirmPassword}
                                        />

                                        {error.cpassword && (
                                            <span>{error.cpassword}</span>
                                        )}
                                        {/* {errors.cpassword?.type ===
                                            "required" && (
                                            <span>This field is required</span>
                                        )} */}
                                        {/* {errors.cpassword?.type ===
                                            "minLength" && (
                                            <span>
                                                Password should be more then 6
                                                Charcters
                                            </span>
                                        )}
                                        {errors.cpassword?.type ===
                                            "maxLength" && (
                                            <span>
                                                This field exceed max length
                                            </span>
                                        )} */}
                                        {/* {errors.cpassword?.type ===
                                            "pattern" && (
                                            <span>
                                                Password should contain atleast
                                                one one captial letter, number
                                                and special character
                                            </span>
                                        )}
                                        {errors.cpassword?.type !==
                                            errors.password && (
                                            <span>
                                                The passwords do not match
                                            </span>
                                        )} */}
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
