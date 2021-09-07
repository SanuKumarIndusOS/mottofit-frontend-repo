import React, { useState } from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";

import config from "config";
import { FacebookLoginButton } from "./FacebookLoginButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { socialLoginAct } from "action/authAct";
import { Toast } from "service/toast";
import { history, nextPathReRouter } from "helpers";
import { CommonPageLoader } from "../CommonPageLoader";

const SocialLoginFC = ({ socialLoginApi, type, loginType, nextAction }) => {
  const [isLoading, setLoading] = useState(false);
  const responseGoogle = (response) => {
    let payload = {
      access_token: response.accessToken,
    };

    console.log(response);

    response.accessToken && submitTokenApi(payload, "google");
  };

  const responseFacebook = (response) => {
    let payload = {
      access_token: response.accessToken,
    };

    response.accessToken && submitTokenApi(payload, "facebook");
  };

  const submitTokenApi = (payload, socialLoginType) => {
    setLoading(true);

    socialLoginApi(payload, loginType, socialLoginType, type)
      .then(async ({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user-id", data.id);
        let userType = type === "trainer" ? 2 : 3;
        localStorage.setItem("type", userType);

        if (nextPathReRouter(nextAction)) return;

        setLoading(false);

        if (userType === "trainer") {
          history.push("/trainers/dashboard/schedule");
        } else {
          history.push("/users/dashboard/session");
        }
      })
      .catch((err) => {
        Toast({ type: "error", message: err.message || "Error" });
        setLoading(false);
      });
  };

  if (isLoading) return <CommonPageLoader className="small-loader" />;

  return (
    <div>
      <FacebookLoginButton
        appId={config.facebookAppId}
        RenderComponent={CustomButton}
        responseFacebook={responseFacebook}
        label={`${
          loginType === "login"
            ? "Sign in with Facebook"
            : "Sign up with Facebook"
        }`}
      />

      <GoogleLoginButton
        clientId={config.googleClientId}
        RenderComponent={CustomButton}
        responseGoogle={responseGoogle}
        label={`${
          loginType === "login" ? "Sign in with Google" : "Sign up with Google"
        }`}
      />
    </div>
  );
};

const CustomButton = ({ onClick, disabled, className, Icon, label }) => {
  return (
    <button
      className={`${className} ${disabled ? "disable-btn" : ""}`}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <img src={Icon} alt="social login icon" />
      {label}
    </button>
  );
};

const mapDispatchToLogin = (dispatch) => {
  return bindActionCreators(
    {
      socialLoginApi: socialLoginAct,
    },
    dispatch
  );
};

export const SocialLogin = connect(null, mapDispatchToLogin)(SocialLoginFC);
