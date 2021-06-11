import React, { useState } from "react";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import Mail from "../../../assets/files/SignUp/Email Icon.svg";
import Phone from "../../../assets/files/SignUp/Phone Icon.svg";
import Password from "../../../assets/files/SignUp/Password Icon.svg";
import Facebook from "../../../assets/files/SignUp/Fb Logo.svg";
import Google from "../../../assets/files/SignUp/Google Logo.svg";
import "./styles.scss";
import { Link, useHistory } from "react-router-dom";
import ArrowHover from "../../common/ButtonIcon/ArrowHover";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import { AuthApi } from "service/apiVariables";
import { loginOrSignUp } from "action/authAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import validate from "service/validation";

const SignUpFC = ({ loginOrSignupAct }) => {
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

  const [error, setErrors] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [apiError, setApiError] = useState("");
  const onChangeValue = (e) => {
    e.persist();

    const { name, value } = e.target || e || {};

    const tempErrors = { ...error };

    tempErrors[name] = undefined;
    setData({ ...data, [name]: value });
    setErrors({ ...error, ...tempErrors });
  };

  const history = useHistory();

  async function signUp(e) {
    e.preventDefault();
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNo: data.phoneNo,
      password: data.password,
      cpassword: data.cpassword,
      location: data.location,
      signUpType: data.signUpType,
    };

    const { userSignUp } = AuthApi;

    if (!validateFields(payload)) return;

    loginOrSignupAct(userSignUp, payload)
      .then(() => {
        localStorage.setItem("type", 3);
        history.push("/trainer/find");
      })
      .catch((error) => {
        setApiError("Sorry, something went wrong.", error.message);
      });
  }

  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const showConfirmPassword = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

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

    let nameValidation = {
      format: {
        pattern: /^[a-zA-Z ]*$/,
        flags: "i",
        message: "must be alphabets and spaces",
      },
      length: {
        minimum: 3,
        tooShort: "must contain alteast 3 character",
        maximum: 35,
        tooLong: "must contain less than 35 character",
      },
    };
    return {
      firstName: {
        presence: {
          allowEmpty: false,
          message: "^First name is required",
        },
        ...nameValidation,
      },
      lastName: {
        presence: {
          allowEmpty: false,
          message: "^Last name is required",
        },
        ...nameValidation,
      },
      location: {
        presence: {
          allowEmpty: false,
          message: "^Location is required",
        },
        ...nameValidation,
      },
      phoneNo: {
        presence: {
          allowEmpty: false,
          message: "^Phone number is required",
        },
        format: {
          pattern: /^[1-9][0-9]*$/,
          flags: "i",
          message: "^Invalid number",
        },
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
      setErrors({ ...errors, ...fieldInvalidList });
    }

    return !fieldInvalidList;
  };

  return (
    <>
      <div className="main_container">
        <div className="wrapper">
          <div className="inner_wrapper">
            <div className="inner_items">
              <h2>Sign Up with Motto!</h2>
              <p>Fill up the following details to create your account</p>
              <div className="form_items">
                <form onSubmit={signUp}>
                  <div className="input_items">
                    <input
                      placeholder="Name"
                      type="text"
                      value={data.firstName}
                      name="firstName"
                      onChange={onChangeValue}
                    />
                    <img src={Person} alt="icon" />

                    {error.firstName && <span>{error.firstName[0]}</span>}
                  </div>
                  <div className="input_items">
                    <input
                      placeholder="LastName"
                      type="text"
                      value={data.lastName}
                      name="lastName"
                      onChange={onChangeValue}
                    />
                    <img src={Person} alt="icon" />
                    {error.lastName && <span>{error.lastName[0]}</span>}
                  </div>

                  <div className="input_items">
                    <input
                      placeholder="Location"
                      type="text"
                      value={data.location}
                      name="location"
                      onChange={onChangeValue}
                    />
                    <img src={Person} alt="icon" />
                    {error.location && <span>{error.location[0]}</span>}
                  </div>

                  <div className="input_items">
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
                  <div className="input_items">
                    <input
                      placeholder="Phone"
                      type="text"
                      value={data.phoneNo}
                      name="phoneNo"
                      onChange={onChangeValue}
                    />
                    <img src={Phone} alt="icon" />
                    {error.phoneNo && <span>{error.phoneNo[0]}</span>}
                  </div>
                  <div className="input_items">
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
                  <div className="input_items">
                    <input
                      placeholder="Confirm Password"
                      type={confirmPasswordShown ? "text" : "password"}
                      name="cpassword"
                      value={data.cpassword}
                      onChange={onChangeValue}
                    />
                    <img
                      src={Password}
                      alt="icon"
                      onClick={showConfirmPassword}
                    />

                    {error.cpassword && <span>{error.cpassword[0]}</span>}
                  </div>
                  {apiError && <span className="errorMessage">{apiError}</span>}

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
                      Sign up with Google
                    </button>
                  </div>
                  <div className="submit_button">
                    <button type="submit" onClick={signUp}>
                      {" "}
                      <ArrowHoverBlacked />
                    </button>
                  </div>
                </form>
              </div>
              <div className="login_content_signup">
                <h1>Already have an account?</h1>

                <Link to="/">
                  Sign In now
                  <ArrowHover />
                </Link>
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

const SignUp = connect(null, mapDispatchToProps)(SignUpFC);

export default SignUp;
