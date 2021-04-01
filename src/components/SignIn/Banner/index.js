import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.scss";
import Facebook from "../../../assets/SignUp/Fb Logo.svg";
import Google from "../../../assets/SignUp/Google Logo.svg";
import Mail from "../../../assets/SignUp/Email Icon.svg";
import Password from "../../../assets/SignUp/Password Icon.svg";
import ArrowSecondary from "../../../assets/SignUp/ArrowSecondary.svg";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import Arrow from "../../../assets/SignUp/Arrow.svg";

Modal.setAppElement("#root");
const SignIn = ({ showModel, setShowModel }) => {
    const history = useHistory();

    const [data, setData] = useState({
        email: "",
        password: "",
        signUpType: "email",
        deviceName: "email",
    });
    const [passwordShown, setPasswordShown] = useState(false);
    const [apiError, setApiError] = useState('')

    const onChangeValue = (e) => {
        e.persist();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const { register, errors, handleSubmit } = useForm();
    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    

    async function logIn() {

        const item = {
            email: data.email,
            password: data.password,
            signUpType: data.signUpType,
            deviceName: data.deviceName,
        };
            console.log(item);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item),
        };
        fetch("http://doodlebluelive.com:2307/v1/login", requestOptions)
            .then(async (response) => {
                const data = await response.json();
                localStorage.setItem("user-info", JSON.stringify(data));
                if (response.ok) {
                    history.push("/findtrainer");
                } else {
                setApiError('User Not Registered',response.statusText)
                }
            })
            .catch((error) => {
                setApiError('Sorry, something went wrong.',error.message)
            });
    }
    const preventSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <>
            <div className="modal-container">
                {showModel ? (
                    <Modal
                        isOpen={showModel}
                        onRequestClose={() => setShowModel(false)}
                        style={{
                            overlay: {
                                backgroundColor: "#000000ca",
                                opacity: "1",
                            },
                        }}
                    >
                        <div className="outter_container">
                            <div className="inner_container">
                                <IoIosClose
                                    onClick={() => setShowModel(false)}
                                />
                            </div>
                            <div className="wrapper_inner">
                                <h2>Welcome to Mottofit</h2>
                                <p>
                                    Sign into your account by filling in the
                                    details below
                                </p>
                                <div className="form_items">
                                    <form onSubmit={preventSubmit}>
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
                                                <span>
                                                    {errors.email.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className="input_items">
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
                                                    Password should contain
                                                    atleast one number and one
                                                    special character
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
                                                <Link to="/">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                        {apiError && <span className='errorMessage'>{apiError}</span>}

                                        <div className="submit_button">
                                            <button
                                                type="submit"
                                                onClick={handleSubmit(logIn)}
                                            >
                                                Login into Motto{" "}
                                                <img src={Arrow} alt="icon" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
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
                                <div className="login_items">
                                    <h4>Don't have an account yet?</h4>
                                    <div className="links_item">
                                        <Link to="/signup">
                                            User Sign Up
                                            <img
                                                src={ArrowSecondary}
                                                alt="icon"
                                            />
                                        </Link>
                                        <Link to="/trainersignup">
                                            Trainer Sign Up
                                            <img
                                                src={ArrowSecondary}
                                                alt="icon"
                                            />
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

export default SignIn;
