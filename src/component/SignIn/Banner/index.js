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
import useForm from "./useForm";
import validateInfo from "./validation";
import { trainerDetail } from "action/trainerAct";
import { history } from "helpers";
import validate from "service/validation";

const closeIcon = <img src={CloseIcon} alt="close" className="close_login" />;

const SignInFC = ({
  showModel,
  setShowModel,
  loginAct,
  submitForm,
  trainerDetail,
}) => {
  // const history = useHistory();
  const myRef = useRef(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    signUpType: "email",
    deviceName: "email",
  });

  const [error, setErrors] = useState({});
  // const { data, handleFormSubmit, error, setData } = useForm(
  //   validateInfo,
  //   submitForm
  // );

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
    e.preventDefault();
    const payload = {
      email: data.email,
      password: data.password,
      signUpType: data.signUpType,
      deviceName: data.deviceName,
    };

    if (!validateFields(payload)) return;

    const { loginApi } = AuthApi;

    // NEED USER DATA AFTER LOGIN AND SIGNUP

    // if (Object.keys(error).length === 0) {
    loginAct(loginApi, payload)
      .then((res) => {
        localStorage.setItem("user-id", res.id);
        if (res["type"] === "trainer") {
          trainerDetail().then((response) => {
            if (response.applicationStatus === null) {
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
    // }
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
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
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

      // console.log(errors);
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
                        <input
                          className="check"
                          type="checkbox"
                          value="lsRememberMe"
                          id="rememberMe"
                        />{" "}
                        <label>Remember me</label>
                      </div>
                      <div className="forgotpass_right">
                        <Link to="/forgot" className="forgotpass">
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
      trainerDetail,
    },
    dispatch
  );
};

const SignIn = connect(null, mapDispatchToProps)(SignInFC);

export default SignIn;
