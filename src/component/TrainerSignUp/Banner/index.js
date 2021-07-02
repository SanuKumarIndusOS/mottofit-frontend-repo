import React, { useState } from "react";
import "./styles.scss";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Phone from "../../../assets/files/SignUp/Phone Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import { Link, useHistory } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import BlueHoverButton from "../../common/BlueArrowButton";
import { connect } from "react-redux";
import { loginOrSignUp } from "action/authAct";
import { bindActionCreators } from "redux";
import { AuthApi } from "service/apiVariables";
// import useForm from "./useForm";
// import validateInfo from "./validation";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import validate from "service/validation";
import { Toast } from "service/toast";

const BannerTrainerFC = ({ loginOrSignupAct, submitForm }) => {
  const history = useHistory();

  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    cpassword: "",
    signUpType: "email",
  });

  const [error, setErrors] = useState({});

  // const { data, handleFormSubmit, error, setData, dataSubmit } = useForm(
  //     validateInfo,
  //     submitForm
  // );

  const onChangeValue = (e) => {
    e.persist && e.persist();
    const { name, value } = e.target || e || {};

    let tempErrors = { ...error };

    tempErrors[name] = undefined;
    setData({ ...data, [name]: value });
    setErrors({ ...error, ...tempErrors });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [apiError, setApiError] = useState("");
  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const showConfirmPassword = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      phoneNumber: data.phoneNumber,
      signUpType: data.signUpType,
    };

    if (!validateFields(payload)) return;

    payload["phoneNumber"] = data.phoneNumber.includes("+")
      ? data.phoneNumber
      : `+${data?.phoneNumber}`;

    const { trainerSignUp } = AuthApi;
    // console.log(payload);

    // if (dataSubmit) {
    loginOrSignupAct(trainerSignUp, payload)
      .then(({ data }) => {
        localStorage.setItem("type", 2);
        history.push("/trainer/about");
      })
      .catch((error) => {
        // setApiError(error.message);
        Toast({ type: "error", message: error.message || "Error" });
      });
    // }
  }

  const validationRules = () => {
    let passwordValidation = {
      format: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_#%*?&])[A-Za-z\d@_#$!%*?&]*$/,
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
    };
    return {
      name: {
        presence: {
          allowEmpty: false,
          message: "^Name is required",
        },
        format: {
          pattern: /^[a-zA-Z ]*$/,
          flags: "i",
          message: "^Enter a valid name",
        },
        length: {
          minimum: 3,
          tooShort: "must contain alteast 3 character",
          maximum: 35,
          tooLong: "must contain less than 35 character",
        },
      },
      phoneNumber: {
        presence: {
          allowEmpty: false,
          message: "^Phone number is required",
        },
        // format: {
        //   pattern: /^[1-9][0-9]*$/,
        //   flags: "i",
        //   message: "^Invalid number",
        // },
        length: {
          minimum: 8,
          tooShort: "^Invalid number",
          maximum: 15,
          tooLong: "^Invalid number",
        },
      },
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
        ...passwordValidation,
      },
      cpassword: {
        presence: {
          allowEmpty: false,
          message: "^Confirm password is required",
        },
        equality: {
          attribute: "password",
          message: "^Passwords doesn't match",
          comparator: function (v1, v2) {
            return JSON.stringify(v1) === JSON.stringify(v2);
          },
        },
        ...passwordValidation,
      },
    };
  };

  const validateFields = (data) => {
    let fieldInvalidList = validate(data, validationRules());

    if (fieldInvalidList !== undefined) {
      let errors = {
        ...fieldInvalidList,
      };

      console.log(errors);
      setErrors({ ...errors, ...fieldInvalidList });
    }

    return !fieldInvalidList;
  };

  return (
    <>
      <div className="banner_container_trainer">
        <div className="wrapper_main container">
          <div className="item_left">
            <h2>Sign Up to be a part of the Motto Family</h2>
            <h6>
              Create an account to start the application process of becoming a
              Motto trainer in one of our live cities.
            </h6>
          </div>
          <div className="wrapper">
            <div className="item_right">
              <div className="inner_wrapper ">
                <div className="inner_items">
                  <h3>Train with Motto!</h3>
                  <p>Sign up to apply to become a Motto Trainer</p>
                  <div className="form_items_trainer">
                    <form onSubmit={handleSubmit}>
                      <div className="input_items_trainer">
                        <input
                          placeholder="Full Name"
                          type="text"
                          value={data.name}
                          name="name"
                          onChange={onChangeValue}
                          className="fullname"
                        />
                        <img src={Person} alt="icon" />
                        {error.name && <span>{error.name[0]}</span>}
                      </div>

                      <div className="input_items_trainer">
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

                      <div className="input_items_trainer">
                        <ReactPhoneInput
                          disableDropdown
                          countryCodeEditable={false}
                          country="us"
                          placeholder="Phone Number"
                          inputProps={{
                            name: "phoneNumber",
                          }}
                          value={data.phoneNumber}
                          name="phoneNumber"
                          onChange={(e) => {
                            onChangeValue({
                              target: {
                                name: "phoneNumber",
                                value: e,
                              },
                            });
                          }}
                        />

                        <img src={Phone} alt="icon" />
                        {error.phoneNumber && (
                          <span>{error.phoneNumber[0]}</span>
                        )}
                      </div>

                      <div className="input_items_trainer">
                        <input
                          placeholder="Create Password"
                          type={passwordShown ? "text" : "password"}
                          value={data.password}
                          name="password"
                          onChange={onChangeValue}
                        />
                        <img src={Password} alt="icon" onClick={showPassword} />
                        {error.password && <span>{error.password[0]}</span>}
                      </div>

                      <div className="input_items_trainer">
                        <input
                          placeholder="Confirm Password"
                          type={confirmPasswordShown ? "text" : "password"}
                          value={data.cpassword}
                          name="cpassword"
                          onChange={onChangeValue}
                        />
                        <img
                          src={Password}
                          alt="icon"
                          onClick={showConfirmPassword}
                        />
                        {error.cpassword && <span>{error.cpassword[0]}</span>}
                      </div>
                      {apiError && (
                        <span className="errorMessage">{apiError}</span>
                      )}

                      <div className="submit_button">
                        <button type="submit" onClick={handleSubmit}>
                          Continue to Account
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
          <br />
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
