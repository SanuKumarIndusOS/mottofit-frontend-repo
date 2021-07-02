import React from "react";
import GoogleLogin from "react-google-login";

import Google from "../../../assets/files/SignUp/Google Logo.svg";

export const GoogleLoginButton = ({
  responseGoogle,
  clientId,
  RenderComponent,
}) => {
  return (
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <RenderComponent
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          Icon={Google}
          label=" Sign In with Google"
          className="google-auth"
        />
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      // cookiePolicy={"single_host_origin"}
    />
  );
};
