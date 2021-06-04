import React, { useState } from "react";
import "./styles.scss";
import { COMMON_URL } from "helpers/baseURL";
import ArrowHoverBlacked from "component/common/BlackCircleButton/ArrowHoverBlacked";
const ForgotPassword = () => {
    const [forgotData, setForgotData] = useState({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${COMMON_URL}/v1/user/reset-password`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: forgotData.email,
            }),
        })
            .then((resp) => resp.json())
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const onChangeValue = (e) => {
        setForgotData({ ...forgotData, email: e.target.value });
    };
    return (
        <>
            <div className="container forgot_main">
                <h2>Forgot Password?</h2>{" "}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={forgotData.email}
                        name="email"
                        onChange={onChangeValue}
                    />
                    <button type="submit" className="forgot_submit">
                        Submit <ArrowHoverBlacked />
                    </button>
                </form>
            </div>
        </>
    );
};
export default ForgotPassword;
