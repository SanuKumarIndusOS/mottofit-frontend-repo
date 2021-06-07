import React, { useState } from "react";
import "./styles.scss";
import { resetPassword } from "action/authAct";
import { history } from "helpers";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import validate from "service/validation";
import { ErrorComponent } from "component/common/ErrorComponent";
const ForgotPasswordClass = (props) => {
  const [email, setemail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    let body = {
      email,
    };
    if (!validateFields(body)) return;
    props
      .resetPassword(body)
      .then(() => {
        history.push("/forgot/success");
      })

      .catch((err) => console.log(err));
  }
  const [error, setErrors] = useState({});
  const validationRules = () => {
    return {
      email: {
        presence: {
          allowEmpty: false,
          message: "^Email is required",
        },
        email: true,
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
  const onChangeValue = (e) => {
    e.persist();
    const { name, value } = e.target || {};
    let tempErrors = { ...error };
    tempErrors[name] = undefined;
    setErrors({ ...error, ...tempErrors });
    setemail(value);
  };

  return (
    <div className="container forgot_main">
      <h2>Forgot Password?</h2>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          name="email"
          onChange={onChangeValue}
        />
        {error.email && <ErrorComponent message={error.email[0]} />}
        <button type="submit" className="forgot_submit">
          Submit <ArrowHoverBlacked />
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetPassword,
    },
    dispatch
  );
};

const ForgotPassword = connect(null, mapDispatchToProps)(ForgotPasswordClass);

export default ForgotPassword;
