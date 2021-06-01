import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.scss";
import { useForm } from "react-hook-form";
import Mail from "../../../../assets/files/SignUp/Email Icon.svg";
import Password from "../../../../assets/files/SignUp/Password Icon.svg";
import { COMMON_URL } from "helpers/baseURL";
const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    signUpType: "email",
    deviceName: "email",
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const showPassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [apiError, setApiError] = useState("");

  const history = useHistory();

  async function adminLogIn() {
    const item = {
      email: data.email,
      password: data.password,
      signUpType: data.signUpType,
      deviceName: data.deviceName,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch(`${COMMON_URL}/v1/admin/login`, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        localStorage.setItem("admin-token", data["token"]);
        if (response.ok) {
          history.push("/admins/dashboard");
        } else {
          setApiError("User Not Registered", response.statusText);
        }
      })
      .catch((error) => {
        setApiError("Sorry, something went wrong.", error.message);
      });
  }
  const onChangeValue = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const preventSubmit = (e) => {
    e.preventDefault();
  };
  const { register, errors, handleSubmit } = useForm();

  return (
    <>
      <div className="outter_admin_login">
        <div className="container">
          <div className="inner_admin_login">
            <div className="login_wraper">
              <h2>Mottofit Admin Dashboard </h2>
              <form onSubmit={preventSubmit}>
                <div className="inner_form_loginAdmin">
                  <label>Email</label>
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

                  <label>Password</label>
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
                  {apiError && <span className="errorMessage">{apiError}</span>}
                  <button type="submit" onClick={handleSubmit(adminLogIn)}>
                    Login
                  </button>

                  {/* <div className="sigup_admin">
                                        <h4>Don't have an account yet?</h4>
                                        <Link
                                            type="submit"
                                            to="/"
                                            // onClick={handleSubmit(adminLogIn)}
                                        >
                                            Sign Up
                                        </Link>
                                    </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
