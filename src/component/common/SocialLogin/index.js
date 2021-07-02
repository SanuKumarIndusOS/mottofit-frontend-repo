import React from "react";
import { GoogleLoginButton } from "./GoogleLoginButton";

import config from "config";
import { FacebookLoginButton } from "./FacebookLoginButton";

export const SocialLogin = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <div>
      <FacebookLoginButton
        appId={config.facebookAppId}
        RenderComponent={CustomButton}
        responseFacebook={responseFacebook}
      />

      <GoogleLoginButton
        clientId={config.googleClientId}
        RenderComponent={CustomButton}
        responseGoogle={responseGoogle}
      />
    </div>
  );
};

const CustomButton = ({ onClick, disabled, className, Icon, label }) => {
  return (
    <button
      className={`${className} ${disabled ? "disable-btn" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <img src={Icon} alt="social login icon" />
      {label}
    </button>
  );
};
