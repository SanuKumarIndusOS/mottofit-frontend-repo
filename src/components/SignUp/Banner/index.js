import React, { useState } from "react";
import Person from "../../../assets/SignUp/Person Icon.svg";
import Mail from "../../../assets/SignUp/Email Icon.svg";
import Phone from "../../../assets/SignUp/Phone Icon.svg";
import Password from "../../../assets/SignUp/Password Icon.svg";
import Facebook from "../../../assets/SignUp/Fb Logo.svg";
import Google from "../../../assets/SignUp/Google Logo.svg";
import Arrow from "../../../assets/SignUp/Arrow.svg";
import ArrowSecondary from "../../../assets/SignUp/ArrowSecondary.svg";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

const SignUp = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        password: "",
        cpassword: "",
        location: "",
        signUpType: "email",
    });
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [apiError, setApiError] = useState('')
    const { register, errors, handleSubmit, watch } = useForm();
    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const history = useHistory();

    async function signUp() {
        const item = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNo: data.phoneNo,
            password: data.password,
            cpassword: data.cpassword,
            location: data.location,
            signUpType: data.signUpType,
        };
        console.log(item);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(item),
        };
        fetch("http://doodlebluelive.com:2307/v1/user/sign-up", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                localStorage.setItem("user-info", JSON.stringify(data));

                if (response.ok) {
                    history.push("/findtrainer");
                } else {
                    setApiError('Email already registered',response.statusText);
                }
            })
            .catch((error) => {
                setApiError('Sorry, something went wrong.',error.message);
            });
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
                            <h3>Sign Up with Motto!</h3>
                            <p>
                                Fill up the following details to create your
                                account
                            </p>
                            <div className="form_items">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="input_items">
                                        <input
                                            placeholder="Name"
                                            type="text"
                                            value={data.firstName}
                                            name="firstName"
                                            onChange={onChangeValue}
                                            ref={register({
                                                pattern: /^[A-Za-z]+$/i,
                                                required: true,
                                                minLength: 2,
                                            })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {errors.firstName && (
                                            <span>
                                                {errors.firstName.message}
                                            </span>
                                        )}
                                        {errors.firstName?.type ===
                                            "required" && (
                                            <span>This input is required</span>
                                        )}
                                        {errors.firstName?.type ===
                                            "minLength" && (
                                            <span>
                                                This field should contain more
                                                then one charater
                                            </span>
                                        )}
                                        {errors.firstName?.type ===
                                            "pattern" && (
                                            <span>
                                                This field accept only alphabets
                                            </span>
                                        )}
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="LastName"
                                            type="text"
                                            value={data.lastName}
                                            name="lastName"
                                            onChange={onChangeValue}
                                            ref={register({
                                                pattern: /^[A-Za-z]+$/i,
                                                required: true,
                                                minLength: 2,
                                            })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {errors.lastName && (
                                            <span>
                                                {errors.lastName.message}
                                            </span>
                                        )}
                                        {errors.lastName?.type ===
                                            "required" && (
                                            <span>This input is required</span>
                                        )}
                                        {errors.lastName?.type ===
                                            "minLength" && (
                                            <span>
                                                This field should contain more
                                                then one charater
                                            </span>
                                        )}
                                        {errors.lastName?.type ===
                                            "pattern" && (
                                            <span>
                                                This field accept only alphabets
                                            </span>
                                        )}
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Location"
                                            type="text"
                                            value={data.location}
                                            name="location"
                                            onChange={onChangeValue}
                                            ref={register({
                                                pattern: /^[A-Za-z]+$/i,
                                                required: true,
                                                minLength: 2,
                                            })}
                                        />
                                        <img src={Person} alt="icon" />
                                        {errors.location && (
                                            <span>
                                                {errors.location.message}
                                            </span>
                                        )}
                                        {errors.location?.type ===
                                            "required" && (
                                            <span>This input is required</span>
                                        )}
                                        {errors.location?.type ===
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
                                        )}
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            value={data.email}
                                            name="email"
                                            onChange={onChangeValue}
                                            ref={register({
                                                required:
                                                    "This filed is required",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Enter a valid name",
                                                },
                                            })}
                                        />
                                        <img src={Mail} alt="icon" />

                                        {errors.email && (
                                            <span>{errors.email.message}</span>
                                        )}
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="Phone"
                                            type="text"
                                            value={data.phoneNo}
                                            name="phoneNo"
                                            onChange={onChangeValue}
                                            ref={register({
                                                required: true,
                                                minLength: 6,
                                                maxLength: 11,
                                            })}
                                        />
                                        <img src={Phone} alt="icon" />
                                        {errors.phoneNo && (
                                            <span>
                                                {errors.phoneNo.message}
                                            </span>
                                        )}
                                        {errors.phoneNo?.type ===
                                            "required" && (
                                            <span>This input is required</span>
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
                                            ref={register({
                                                required: true,
                                                minLength: 6,
                                                maxLength: 16,
                                                pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                            })}
                                        />
                                        <img
                                            src={Password}
                                            alt="icon"
                                            onClick={showPassword}
                                        />
                                        {errors.password?.type ===
                                            "required" && (
                                            <span>This input is required</span>
                                        )}
                                        {errors.password?.type ===
                                            "minLength" && (
                                            <span>
                                                Password should be more then 6
                                                Charcters
                                            </span>
                                        )}
                                        {errors.password?.type ===
                                            "maxLength" && (
                                            <span>
                                                This field exceed max length
                                            </span>
                                        )}
                                        {errors.password?.type ===
                                            "pattern" && (
                                            <span>
                                                Password should contain atleast
                                                one number and one special
                                                character
                                            </span>
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
                                            value={data.cpassword}
                                            onChange={onChangeValue}
                                            ref={register({
                                                validate: (value) =>
                                                    value === watch("password"),

                                                // validate: value =>
                                                // value === password.current || "The passwords do not match",
                                                required: true,
                                                minLength: 6,
                                                maxLength: 16,
                                                pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                            })}
                                            name="cpassword"
                                        />
                                        <img
                                            src={Password}
                                            alt="icon"
                                            onClick={showConfirmPassword}
                                        />
                                        {errors.cpassword?.type ===
                                            "required" && (
                                            <span>This input is required</span>
                                        )}
                                        {errors.cpassword?.type ===
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
                                        )}
                                        {errors.cpassword?.type ===
                                            "pattern" && (
                                            <span>
                                                Password should contain atleast
                                                one number and one special
                                                character
                                            </span>
                                        )}
                                        {errors.cpassword?.type !==
                                            errors.password && (
                                            <span>
                                                The passwords do not match
                                            </span>
                                        )}
                                    </div>
                                    {apiError && <span className='errorMessage'>{apiError}</span>}


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
                                            Sign Up with Google
                                        </button>
                                    </div>
                                    <div className="submit_button">
                                        <button
                                            type="submit"
                                            onClick={handleSubmit(signUp)}
                                        >
                                            Continue to Account{" "}
                                            <img src={Arrow} alt="icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="login_items">
                                <h4>Already have an account?</h4>

                                <Link to="/">
                                    Sign In now
                                    <img src={ArrowSecondary} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
