import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
// import { useForm } from "react-hook-form";
import Mail from "../../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../../assets/files/SignUp/Password Icon.svg";
import { COMMON_URL } from "helpers/baseURL";
import { bindActionCreators } from "redux";
import { loginOrSignUp } from "action/authAct";
import { connect } from "react-redux";
import { AuthApi } from "service/apiVariables";
import validate from "service/validation";

const AdminLoginFC = ({ loginAct }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    signUpType: "email",
    deviceName: "email",
  });

  const [error, setErrors] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [apiError, setApiError] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      email: data.email,
      password: data.password,
      signUpType: data.signUpType,
      deviceName: data.deviceName,
    };

    if (!validateFields(payload)) return;

    const { adminApi } = AuthApi;

    setApiError("");

    loginAct(adminApi, payload)
      .then(({ type, token }) => {
        if (type === "admin") {
          localStorage.setItem("admin-token", token);
          history.push("/admins/dashboard");
        }
      })
      .catch((error) => {
        setApiError("Sorry, something went wrong.", error.message);
      });

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(item),
    // };
    // fetch(`${COMMON_URL}/v1/admin/login`, requestOptions)
    //   .then(async (response) => {
    //     const data = await response.json();
    //     localStorage.setItem("admin-token", data["token"]);
    //     if (response.ok) {
    //     } else {
    //       setApiError("User Not Registered", response.statusText);
    //     }
    //   })
    //   .catch((error) => {
    //     setApiError("Sorry, something went wrong.", error.message);
    //   });
  }
  const onChangeValue = (e) => {
    e.persist && e.persist();
    const { name, value } = e.target || e || {};

    let tempErrors = { ...error };

    tempErrors[name] = undefined;
    setData({ ...data, [name]: value });
    setErrors({ ...error, ...tempErrors });
  };

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
      <div className="outter_admin_login">
        <div className="container">
          <div className="inner_admin_login">
            <div className="login_wraper">
              <h2>Mottofit Admin Dashboard </h2>
              <form onSubmit={handleSubmit}>
                <div className="inner_form_loginAdmin">
                  <label>Email</label>
                  <div>
                    <div className="input_item1_signin">
                      <input
                        type="text"
                        placeholder="Email"
                        value={data.email}
                        onChange={onChangeValue}
                        name="email"
                      />
                      <img src={Mail} alt="icon" />
                    </div>
                    {error.email && (
                      <span className="fs-14 text-danger">
                        {error.email[0]}
                      </span>
                    )}
                  </div>

                  <label>Password</label>
                  <div>
                    <div className="input_item1_signin">
                      <input
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        value={data.password}
                        onChange={onChangeValue}
                        name="password"
                      />
                      <img src={Password} alt="icon" onClick={showPassword} />
                    </div>
                    {error.password && (
                      <span className="fs-14 text-danger">
                        {error.password[0]}
                      </span>
                    )}
                  </div>
                  {apiError && <span className="errorMessage">{apiError}</span>}
                  <button type="submit" onClick={handleSubmit}>
                    Login
                  </button>
                </div>
              </form>
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
      loginAct: loginOrSignUp,
    },
    dispatch
  );
};

const AdminLogin = connect(null, mapDispatchToProps)(AdminLoginFC);

export default AdminLogin;
