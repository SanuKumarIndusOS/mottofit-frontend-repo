import React, { useState } from "react";
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
import validateInfo from  "./validation";

// import PhoneFormatter from "react-headless-phone-input/lazy";
// import PhoneInput from "react-phone-number-input/input";
// import "react-phone-number-input/style.css";

const BannerTrainerFC = ({ loginOrSignupAct, submitForm }) => {
    const history = useHistory();

    const {data,handleFormSubmit,error,setData} = useForm(validateInfo, submitForm);

    // const [data, setData] = useState({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     password: "",
    //     cpassword: "",
    //     signUpType: "email",
    // });

    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [apiError, setApiError] = useState("");
    const { register, errors, handleSubmit, watch } = useForm();
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

        // const requestOptions = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(item),
        // };

        


        if(Object.keys(error).length === 0){
            const { trainerSignUp } = AuthApi;
            loginOrSignupAct(trainerSignUp, payload)
            .then(({ data }) => {
                // console.log(data);
              history.push("/trainer/about");
            })
            .catch((error) => {
                setApiError(error.message);
            });
        }


        

        // fetch("http://doodlebluelive.com:2307/v1/trainer/sign-up", requestOptions)
        //   .then(async (response) => {
        //     const data = await response.json();
        //     localStorage.setItem("user-info", JSON.stringify(data));
        //     if (response.ok) {
        //     } else {
        //       setApiError("Email already registered", response.statusText);
        //     }
        //   })
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setData({
    //         ...data,
    //         [name]: value,
    //     });
    // };

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
                                                    placeholder="Fullname"
                                                    type="text"
                                                    value={data.name}
                                                    name="name"
                                                    onChange={onChangeValue}
                                                    // ref={register({
                                                    //     pattern: /^[A-Za-z_ ]+$/i,
                                                    //     required: true,
                                                    //     minLength: 2,
                                                    // })}
                                                />
                                                <img src={Person} alt="icon" />
                                                {error.name && (
                                                    <span>
                                                        {error.name}
                                                    </span>
                                                )}
                                                {/* {errors.name?.type ===
                                                    "required" && (
                                                    <span>
                                                        This field is required
                                                    </span>
                                                )}
                                                {errors.name?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        This field should
                                                        contain more then one
                                                        charater
                                                    </span>
                                                )}
                                                {errors.name?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        This field accept only
                                                        alphabets
                                                    </span>
                                                )} */}
                                            </div>

                                            <div className="input_items_trainer">
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
                                                {error.email && (
                                                    <span>
                                                        {error.email}
                                                    </span>
                                                )}
                                                {/* {errors.email?.type ===
                                                    "required" && (
                                                    <span>
                                                        This field is required
                                                    </span>
                                                )}
                                                {errors.email?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Please enter a valid
                                                        email address
                                                    </span>
                                                )}
                                                {errors.email?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        Please enter a valid
                                                        email address
                                                    </span>
                                                )} */}
                                            </div>

                                            <div className="input_items_trainer">
                                                {/* <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={data.phoneNumber}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                        })
                                                    }
                                                    name="phone"
                                                    defaultCountry="US"
                                                /> */}
                                                <input
                                                    placeholder="Phone"
                                                    type="tel"
                                                    value={data.phoneNumber}
                                                    name="phoneNumber"
                                                    onChange={onChangeValue}
                                                    // ref={register({
                                                    //     required: true,
                                                    //     minLength: 6,
                                                    //     maxLength: 11,
                                                    // })}
                                                />
                                                <img src={Phone} alt="icon" />
                                                {error.phoneNumber && (
                                                    <span>
                                                        {
                                                            error.phoneNumber
                                                        }
                                                    </span>
                                                )}
                                                {/* {errors.phoneNumber?.type ===
                                                    "required" && (
                                                    <span>
                                                        This field is required
                                                    </span>
                                                )}
                                                {errors.phoneNumber?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Enter a valid number
                                                    </span>
                                                )}
                                                {errors.phoneNumber?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )} */}
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
                                                    // ref={register({
                                                    //     required: true,
                                                    //     minLength: 6,
                                                    //     maxLength: 16,
                                                    //     pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                                    // })}
                                                />
                                                <img
                                                    src={Password}
                                                    alt="icon"
                                                    onClick={showPassword}
                                                />
                                                         {error.password && (
                                                    <span>
                                                        {
                                                            error.password
                                                        }
                                                    </span>
                                                )}
                                                {/* {errors.password?.type ===
                                                    "required" && (
                                                    <span>
                                                        This field is required
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Password should be more
                                                        then 6 Charcters
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        Password should contain
                                                        atleast one one captial
                                                        letter, number and
                                                        special character
                                                    </span>
                                                )} */}
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
                                                    // ref={register({
                                                    //     validate: (value) =>
                                                    //         value ===
                                                    //         watch("password"),
                                                    //     required: true,
                                                    //     minLength: 6,
                                                    //     maxLength: 16,
                                                    //     pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                                    // })}
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
                                                        {
                                                            error.cpassword
                                                        }
                                                    </span>
                                                )}
                                                {/* {errors.cpassword?.type ===
                                                    "required" && (
                                                    <span>
                                                        This field is required
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Password should be more
                                                        then 6 Charcters
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        Password should contain
                                                        atleast one one captial
                                                        letter, number and
                                                        special character
                                                    </span>
                                                )}
                                                {errors.cpassword?.type !==
                                                    errors.password && (
                                                    <span>
                                                        The passwords do not
                                                        match
                                                    </span>
                                                )} */}
                                            </div>
                                            {apiError && (
                                                <span className="errorMessage">
                                                    {apiError}
                                                </span>
                                            )}

                                            <div className="submit_button">
                                                <button type="submit" value="submit"
                                                      onClick={trainerSignUp}
                                            
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
