import React from "react";
import FacebookLogin from "react-facebook-login";

import FaceBook from "../../../assets/files/SignUp/Fb Logo.svg";

import config from "config";

export const FacebookLoginButton = ({
  responseFacebook,
  appId,
  RenderComponent,
}) => {
  return (
    <FacebookLogin
      appId={appId}
      autoLoad={false}
      textButton="Sign In with Facebook"
      icon={<img src={FaceBook} alt="icon" />}
      cssClass="facebook-auth"
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
};
