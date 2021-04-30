// TODO Error handling on login page

import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles.scss";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import { AuthApi } from "service/apiVariables";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, loginOrSignUp } from "action/authAct";

const closeIcon = <img src={CloseIcon} alt="close" />;

const SignInFC = ({ showModel, setShowModel, loginAct }) => {
  const history = useHistory();
  const myRef = useRef(null);

  const [data, setData] = useState({
    email: "",
    password: "",
    signUpType: "email",
    deviceName: "email",
  });
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

    loginAct(loginApi, payload)
      .then(() => {
        history.push("/trainer/find");
      })
      .catch((error) => {
        setApiError("Sorry, something went wrong.", error.message);
      });

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
              boaderRadius: "20px",
            }}
            closeIcon={closeIcon}
            onClose={() => setShowModel(false)}
          >
            <div className="outter_container">
              <div className="inner_container"></div>
              <div className="wrapper_inner">
                <h2>Welcome to Motto!</h2>
                <p>Sign into your account by filling in the details below</p>
                <div className="form_item_login">
                  <form onSubmit={preventSubmit}>
                    <div className="input_item1_signin">
                      <input
                        placeholder="Email"
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={onChangeValue}
                        ref={register({
                          required: "This field is required",
                          minLength: {
                            value: 2,
                            message: "Enter a valid name",
                          },
                        })}
                      />
                      <img src={Mail} alt="icon" />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className="input_item1_signin">
                      <input
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        value={data.password}
                        onChange={onChangeValue}
                        name="password"
                        ref={register({
                          required: true,
                          minLength: 6,
                          maxLength: 16,
                          pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/,
                        })}
                      />
                      <img src={Password} alt="icon" onClick={showPassword} />
                      {errors.password?.type === "required" && (
                        <span>This input is required</span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span>Password should be more then 6 Charcters</span>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <span>This field exceed max length</span>
                      )}
                      {errors.password?.type === "pattern" && (
                        <span>
                          Password should contain atleast one number and one
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
                        <Link to="/" className="forgotpass">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    {apiError && (
                      <span className="errorMessage">{apiError}</span>
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
                        Sign In with Facebook
                      </button>

                      <button className="google-auth">
                        <img src={Google} alt="icon" />
                        Sign In with Google
                      </button>
                    </div>
                    <div className="submit_button">
                      <Link
                        className="login_button"
                        type="submit"
                        onClick={handleSubmit(logIn)}
                      >
                        Signin
                        <ArrowHoverBlacked />
                      </Link>
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
