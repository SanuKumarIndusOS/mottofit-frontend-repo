import React from "react";
import GoogleLogin from "react-google-login";

import Google from "../../../assets/files/SignUp/Google Logo.svg";

export const GoogleLoginButton = ({
  responseGoogle,
  clientId,
  RenderComponent,
  label,
}) => {
  return (
    <GoogleLogin
      clientId={clientId}
      // uxMode="redirect"
      render={(renderProps) => (
        <RenderComponent
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          Icon={Google}
          label={label}
          className="google-auth"
        />
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      // cookiePolicy={"single_host_origin"}
    />
  );
};
