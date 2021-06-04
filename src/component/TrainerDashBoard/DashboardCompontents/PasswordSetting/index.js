import React, { useState } from "react";
import "./styles.scss";
import { COMMON_URL } from "helpers/baseURL";
import { history } from "helpers";
import Password from "../../../../assets/files/SignUp/Password Icon.svg";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";

const PasswordSetting = () => {
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

        fetch(`${COMMON_URL}/v1/trainer/change-password`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            method: "POST",
            body: JSON.stringify({
                password: passwordData.password,
                newPassword: passwordData.newPassword,
            }),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    alert("New Password has beed updated!");
                    history.push("/");
                } else {
                    alert("You're Old Password was not correct ");
                }
            })

            .catch((err) => console.log(err));
    };

    // Password show or hide
    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const showNewPassword = () => {
        setNewPasswordShown(newPasswordShown ? false : true);
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
                                    onChange={(e) => {
                                        setPasswordData({
                                            ...passwordData,
                                            password: e.target.value,
                                        });
                                    }}
                                    name="password"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <div className="newPassword">
                                <input
                                    type={
                                        newPasswordShown ? "text" : "password"
                                    }
                                    placeholder="New Password"
                                    value={passwordData.newPassword}
                                    onChange={(e) => {
                                        setPasswordData({
                                            ...passwordData,
                                            newPassword: e.target.value,
                                        });
                                    }}
                                    name="password"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showNewPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <div className="newPassword">
                                <input
                                    type={
                                        newPasswordShown ? "text" : "password"
                                    }
                                    placeholder="Confirm New Password"
                                    value={passwordData.confirmPassword}
                                    onChange={(e) => {
                                        setPasswordData({
                                            ...passwordData,
                                            confirmPassword: e.target.value,
                                        });
                                    }}
                                    name="password"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showNewPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
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
export default PasswordSetting;
