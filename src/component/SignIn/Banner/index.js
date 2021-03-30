import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.scss";
import Facebook from "../../../assests/SignUp/Fb Logo.svg";
import Google from "../../../assests/SignUp/Google Logo.svg";
import Mail from "../../../assests/SignUp/Email Icon.svg";
import Password from "../../../assests/SignUp/Password Icon.svg";
import ArrowSecondary from "../../../assests/SignUp/ArrowSecondary.svg";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import Arrow from "../../../assests/SignUp/Arrow.svg";

Modal.setAppElement("#root");
const SignIn = ({ showModel, setShowModel }) => {
    const history = useHistory();

    const [data, setData] = useState({
        email: "",
        password: "",
        signUpType: "email",
        deviceName: "email",
    });
    // const [redirect, setRedirect] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

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
        let result = await fetch(
            "http://doodlebluelive.com:2307/v1/user/login",
            {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
            history.push("/findtrainer");

        // if (result.status == "200") {
        //     history.push("/");
        // } else  {
        //     alert("invalid user");
        // }
        // return false
       
    }

    // function Login() {
    //     let item = {  email, password };
    //     if (email && password) {
    //         setRedirect(true);
    //     } else {
    //         setRedirect(false, "not found");
    //     }
    //     console.log(item);
    //     localStorage.setItem("user-info", JSON.stringify(item));
    //     // history.push('/findtrainer')
    // }

    return (
        <>
            {/* {redirect ? <Redirect to={"/findtrainer"} /> : null} */}

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
                                    <form onSubmit={(e) => e.preventDefault()}>
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
