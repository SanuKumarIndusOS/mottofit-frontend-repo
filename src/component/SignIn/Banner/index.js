// TODO Error handling on login page

import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles.scss";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import { AuthApi } from "service/apiVariables";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, loginOrSignUp } from "action/authAct";
import useForm from "./useForm";
import validateInfo from "./validation";
import { trainerDetail } from "action/trainerAct";

const closeIcon = <img src={CloseIcon} alt="close" className="close_login" />;

const SignInFC = ({
  showModel,
  setShowModel,
  loginAct,
  submitForm,
  trainerDetail,
}) => {
  const history = useHistory();
  const myRef = useRef(null);
  const { data, handleFormSubmit, error, setData } = useForm(
    validateInfo,
    submitForm
  );

  const [passwordShown, setPasswordShown] = useState(false);
  const [apiError, setApiError] = useState("");

  const onChangeValue = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

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

    if (Object.keys(error).length === 0) {
      loginAct(loginApi, payload)
        .then((res) => {
          localStorage.setItem("user-id", res.id);
          if (res["type"] === "trainer") {
            trainerDetail.then((data) => {
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
  }

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
                <p>Sign into your account by filling in the details below</p>
                <div className="form_item_login">
                  <form onSubmit={handleFormSubmit}>
                    <div className="input_item1_signin">
                      <input
                        placeholder="Email"
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={onChangeValue}
                      />
                      <img src={Mail} alt="icon" />

                      {error.email && <span>{error.email}</span>}
                    </div>
                    <div className="input_item1_signin">
                      <input
                        placeholder="Password"
                        type={passwordShown ? "text" : "password"}
                        value={data.password}
                        onChange={onChangeValue}
                        name="password"
                      />
                      <img src={Password} alt="icon" onClick={showPassword} />

                      {error.password && <span>{error.password}</span>}
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
                      <button
                        className="login_button"
                        type="submit"
                        onClick={logIn()}
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
      trainerDetail,
    },
    dispatch
  );
};

const SignIn = connect(null, mapDispatchToProps)(SignInFC);

export default SignIn;
