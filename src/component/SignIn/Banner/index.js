import React from "react";
import Modal from "react-modal";
import "./styles.scss";
import Facebook from "../../../assests/SignUp/Fb Logo.svg";
import Google from "../../../assests/SignUp/Google Logo.svg";
import Mail from "../../../assests/SignUp/Email Icon.svg";
import Password from "../../../assests/SignUp/Password Icon.svg";
import ArrowSecondary from "../../../assests/SignUp/ArrowSecondary.svg";
import { IoIosClose } from "react-icons/io";

import { Link } from "react-router-dom";

Modal.setAppElement("#root");
const SignIn = ({showModel, setShowModel}) => {

    return (
        <>
            <div className="modal-container">
                {showModel ? 
                <Modal
                    isOpen={showModel}
                    onRequestClose={() => setShowModel(false)}
                    style={{
                        overlay: {
                            opacity: "0.9",
                            backgroundColor:"black"
                        },
                    }}
                >
                    <div className="outter_container">
                        <div className="inner_container">
                            <IoIosClose onClick={() => setShowModel(false)} />
                        </div>
                        <div className="wrapper_inner">
                            <h2>Welcome to Mottofit</h2>
                            <p>
                                Sign into your account by filling in the details
                                below
                            </p>
                            <div className="form_items">
                                <form>
                                    <div className="input_items">
                                        <input
                                            placeholder="Email"
                                            type="text"
                                            // value={name}
                                            // onChange={(e) =>
                                            //     setName(e.target.value)
                                            // }
                                        />
                                        <img src={Mail} alt="icon" />
                                        <span></span>
                                    </div>
                                    <div className="input_items">
                                        <input
                                            placeholder="Password"
                                            type="password"
                                            // value={password}
                                            // onChange={(e) =>
                                            //     setPassword(e.target.value)
                                            // }
                                        />
                                        <img src={Password} alt="icon" />
                                        <span></span>
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
                                            <Link to="/">Forgot password?</Link>
                                        </div>
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
                                        <img src={ArrowSecondary} alt="icon" />
                                    </Link>
                                    <Link to="/trainersignup">
                                        Trainer Sign Up
                                        <img src={ArrowSecondary} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal> : null }
            </div>
        </>
    );
};

export default SignIn;
