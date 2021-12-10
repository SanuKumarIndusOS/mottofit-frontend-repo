// TODO Error handling on login page

import React, { useState, useRef } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./styles.scss";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import CloseIcon from "../../../assets/files/FindTrainer/Cross.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import { AuthApi } from "service/apiVariables";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login, loginOrSignUp } from "action/authAct";
import { trainerDetail } from "action/trainerAct";
import { history, nextPathReRouter } from "helpers";
import validate from "service/validation";
import { updateUserDetails } from "action/userAct";
import { Toast } from "../../../service/toast";
import { GoogleLoginButton } from "../../common/SocialLogin/GoogleLoginButton";
import { SocialLogin } from "component/common/SocialLogin";
import { nextPathPusher } from "../../../helpers";

import CircularProgress from "@material-ui/core/CircularProgress";

import { change_login_status } from "action/NotificationAct";

const closeIcon = <img src={CloseIcon} alt="close" className="close_login" />;

const SignInFC = ({
  showModel,
  setShowModel,
  loginAct,
  trainerDetail,
  updateUserDetails,
  nextAction,
}) => {
  const [loginLoader, setloginLoader] = useState(false);
  const myRef = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    signUpType: "email",
    deviceName: "email",
  });

  const [error, setErrors] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);
  const [apiError, setApiError] = useState("");

  const onChangeValue = (e) => {
    e.persist();

    const { name, value } = e.target || {};

    let tempErrors = { ...error };

    tempErrors[name] = undefined;
    setData({ ...data, [name]: value });

    setErrors({ ...error, ...tempErrors });
  };

  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  async function logIn(e) {
    setloginLoader(true);
    e.preventDefault();
    const payload = {
      email: data.email,
      password: data.password,
      signUpType: data.signUpType,
      deviceName: data.deviceName,
    };

    if (!validateFields(payload)) {
      console.log("err");
      setloginLoader(false);
    }

    if (!validateFields(payload)) return;

    const { loginApi } = AuthApi;

    // NEED USER DATA AFTER LOGIN AND SIGNUP

    loginAct(loginApi, payload)
      .then((res) => {
        localStorage.setItem("user-id", res.id);

        let reduxData = {
          isModelOpen: false,
        };

        updateUserDetails(reduxData);

        console.log("log1");

        console.log(nextPathReRouter(nextAction));

        if (nextPathReRouter(nextAction)) return;

        console.log("log1");

        if (res["type"] === "trainer") {
          trainerDetail().then((response) => {
            if (response.applicationStatus === null) {
              history.push("/trainer/about");
            } else {
              history.push("/trainers/dashboard/session");
            }
          });
        } else {
          history.push("/users/dashboard/session");
        }
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        // setApiError(err.message);
      });
  }

  const validationRules = () => {
    return {
      email: {
        presence: {
          allowEmpty: false,
          message: "^Email is required",
        },
        email: true,
      },
      password: {
        presence: {
          allowEmpty: false,
          message: "^Password is required",
        },
        format: {
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,
          flags: "i",
          message:
            "^Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
        },
        length: {
          minimum: 8,
          tooShort: "must contain alteast 8 character",
          maximum: 12,
          tooLong: "must contain less than 12 character",
        },
      },
    };
  };

  const validateFields = (data) => {
    let fieldInvalidList = validate(data, validationRules());

    if (fieldInvalidList !== undefined) {
      let errors = {
        ...fieldInvalidList,
      };

      setErrors({ ...errors, ...fieldInvalidList });
    }

    return !fieldInvalidList;
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
                <p>Sign into your account by filling in the details below</p>
                {loginLoader ? (
                  <div className="loader">
                    Loging in, Please Wait!&ensp;
                    <CircularProgress />
                  </div>
                ) : null}

                <div className="form_item_login">
                  <form onSubmit={logIn}>
                    <div className="input_item1_signin">
                      <input
                        placeholder="Email"
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={onChangeValue}
                      />
                      <img src={Mail} alt="icon" />

                      {error.email && <span>{error.email[0]}</span>}
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

                      {error.password && <span>{error.password[0]}</span>}
                    </div>
                    <div className="remember_container">
                      <div className="remember_left">
                        {/* <input
                          className="check"
                          type="checkbox"
                          value="lsRememberMe"
                          id="rememberMe"
                        />{" "}
                        <label>Remember me</label> */}
                      </div>
                      <div className="forgotpass_right">
                        <Link
                          to="/forgot"
                          onClick={() => {
                            setShowModel(false);
                          }}
                          className="forgotpass"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    {apiError && (
                      <span className="errorMessage">{apiError}</span>
                    )}

                    <div className="submit_button">
                      <button
                        className="login_button"
                        type="submit"
                        onClick={logIn}
                      >
                        {loginLoader ? (
                          <div className="loader">
                            Loging in, Please Wait!&ensp;
                            {/* <CircularProgress /> */}
                          </div>
                        ) : (
                          <>
                            Sign In
                            <ArrowHoverBlacked />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="or_items">
                      <div className="hr_line"></div>
                      <div>
                        <p>or</p>
                      </div>
                      <div className="hr_line"></div>
                    </div>

                    <div className="social_buttons">
                      {/* <button className="facebook-auth">
                        <img src={Facebook} alt="icon" />
                        Sign In with Facebook
                      </button> */}

                      <SocialLogin loginType="login" />

                      {/* <GoogleLoginButton /> */}

                      {/* <button className="google-auth">
                        <img src={Google} alt="icon" />
                        Sign In with Google
                      </button> */}
                    </div>
                    {/* <div className="submit_button">
                      <button
                        className="login_button"
                        type="submit"
                        onClick={logIn}
                      >
                        Sign In
                        <ArrowHoverBlacked />
                      </button>
                    </div> */}
                  </form>
                </div>
                <div className="login_items">
                  <h4>Don't have an account yet?</h4>
                  <div className="links_item_signup">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowModel(false);
                        nextPathPusher("/user/signup");
                      }}
                    >
                      User Sign Up
                      <BlueHoverButton />
                    </Link>
                    <Link
                      to="/trainer/signup"
                      onClick={() => setShowModel(false)}
                    >
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

const mapStateToProps = (state) => ({
  nextAction: state.userReducer.nextAction,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginAct: loginOrSignUp,
      trainerDetail,
      updateUserDetails,
      change_login_status,
    },
    dispatch
  );
};

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInFC);

export default SignIn;
