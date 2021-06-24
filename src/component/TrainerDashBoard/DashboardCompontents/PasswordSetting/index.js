import React, { useState } from "react";
import "./styles.scss";
import { history } from "helpers";
import Password from "../../../../assets/files/SignUp/Password Icon.svg";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { changePasswordAct } from "action/authAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import validate from "service/validation";
import { ErrorComponent } from "component/common/ErrorComponent";
import { AuthApi } from "service/apiVariables";
import { Toast } from "service/toast";
const PasswordSettingClass = (props) => {
  // Password show or hide
  const [passwordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);

  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      password: passwordData.password,
      newPassword: passwordData.newPassword,
    };

    let payload = {
      password: passwordData.password,
      newPassword: passwordData.newPassword,
      confirmPassword: passwordData.confirmPassword,
    };

    const { pathname = "" } = props.location;

    const userType = pathname.split("/")[1];

    let currentApi =
      userType === "users"
        ? AuthApi.changePasswordUser
        : AuthApi.changePasswordTrainer;

    if (!validateFields(payload)) return;
    props
      .changePasswordAct(body, currentApi)
      .then(() => {
        history.push("/trainers/dashboard/schedule");
      })
      .catch((err) =>
        Toast({ type: "error", message: err.message || "Error" })
      );
  };
  const [error, setErrors] = useState({});
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
      password: {
        presence: {
          allowEmpty: false,
          message: "^Password is required",
        },
        ...passwordValidation,
      },
      newPassword: {
        presence: {
          allowEmpty: false,
          message: "^New password is required",
        },
        ...passwordValidation,
      },
      confirmPassword: {
        presence: {
          allowEmpty: false,
          message: "^Confirm password is required",
        },
        equality: {
          attribute: "newPassword",
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
  // Password show or hide
  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const showNewPassword = () => {
    setNewPasswordShown(newPasswordShown ? false : true);
  };
  const onChangeValue = (e) => {
    e.persist();

    const { name, value } = e.target || e || {};

    const tempErrors = { ...error };

    tempErrors[name] = undefined;
    setPasswordData({ ...passwordData, [name]: value });
    setErrors({ ...error, ...tempErrors });
  };
  return (
    <>
      <div className="container">
        <div className="password_main">
          <div className="password_heading">
            <h2>Password Change</h2>
          </div>
          <div className="password_form">
            <form onSubmit={handleSubmit}>
              <div className="newPassword">
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="Old Password"
                  value={passwordData.password}
                  onChange={(e) => onChangeValue(e)}
                  name="password"
                />
                <img
                  src={Password}
                  alt="icon"
                  onClick={showPassword}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {error.password && <ErrorComponent message={error.password[0]} />}
              <div className="newPassword">
                <input
                  type={newPasswordShown ? "text" : "password"}
                  placeholder="New Password"
                  value={passwordData.newPassword}
                  onChange={(e) => onChangeValue(e)}
                  name="newPassword"
                />
                <img
                  src={Password}
                  alt="icon"
                  onClick={showNewPassword}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {error.newPassword && (
                <ErrorComponent message={error.newPassword[0]} />
              )}
              <div className="newPassword">
                <input
                  type={newPasswordShown ? "text" : "password"}
                  placeholder="Confirm New Password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => onChangeValue(e)}
                  name="confirmPassword"
                />
                <img
                  src={Password}
                  alt="icon"
                  onClick={showNewPassword}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {error.confirmPassword && (
                <ErrorComponent message={error.confirmPassword[0]} />
              )}
              <button type="submit">
                Submit <ArrowHoverBlacked />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      changePasswordAct,
    },
    dispatch
  );
};

const PasswordSetting = connect(null, mapDispatchToProps)(PasswordSettingClass);

export default PasswordSetting;
