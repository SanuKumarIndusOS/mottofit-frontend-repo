import React, { useState } from "react";
import "./styles.scss";
import { COMMON_URL } from "helpers/baseURL";
import { history } from "helpers";
import Password from "../../../../assets/files/SignUp/Password Icon.svg";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
import validate from "service/validation";

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

        const payload = {
            password: passwordData.password,
            newPassword: passwordData.newPassword,
            confirmPassword: passwordData.confirmPassword,
        };
        if (!validateFields(payload)) return;

        fetch(`${COMMON_URL}/v1/trainer/change-password`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
            method: "POST",
            body: JSON.stringify(payload),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    alert("New Password has been updated!");
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

    const [error, setErrors] = useState({});

    // validation
    const validationRules = () => {
        let passwordValidation = {
            format: {
                pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/,
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
                    message: "^Old Password is required",
                },
                ...passwordValidation,
            },
            newPassword: {
                presence: {
                    allowEmpty: false,
                    message: "^New Password is required",
                },
                ...passwordValidation,
            },
            confirmPassword: {
                presence: {
                    allowEmpty: false,
                    message: "^Confirm Password is required",
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

            console.log(errors);
            setErrors({ ...errors, ...fieldInvalidList });
        }

        return !fieldInvalidList;
    };

    const onChangeValue = (e) => {
        e.persist && e.persist();
        const { name, value } = e.target || e || {};
        let tempErrors = { ...error };
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
                                    onChange={onChangeValue}
                                    name="password"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <span>
                                {error.password && (
                                    <span>{error.password[0]}</span>
                                )}
                            </span>

                            <div className="newPassword">
                                <input
                                    type={
                                        newPasswordShown ? "text" : "password"
                                    }
                                    placeholder="New Password"
                                    value={passwordData.newPassword}
                                    onChange={onChangeValue}
                                    name="newPassword"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showNewPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <span>
                                {error.newPassword && (
                                    <span>{error.newPassword[0]}</span>
                                )}
                            </span>

                            <div className="newPassword">
                                <input
                                    type={
                                        newPasswordShown ? "text" : "password"
                                    }
                                    placeholder="Confirm New Password"
                                    value={passwordData.confirmPassword}
                                    onChange={onChangeValue}
                                    name="confirmPassword"
                                />
                                <img
                                    src={Password}
                                    alt="icon"
                                    onClick={showNewPassword}
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                            <span>
                                {error.confirmPassword && (
                                    <span>{error.confirmPassword[0]}</span>
                                )}
                            </span>

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
