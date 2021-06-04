import React from "react";
import "./styles.scss";
const PasswordSetting = () => {
    return (
        <>
            <div className="container">
                <div className="password_main">
                    <div className="password_heading">
                        <h2>Password Change</h2>
                    </div>
                    <div className="password_form">
                        <form>
                            <input type="text" placeholder="New Password" />
                            <input
                                type="text"
                                placeholder="Confirm New Password"
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PasswordSetting;
