import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Success = () => {
    return (
        <div className="container h-100">
            <div className="success">
                <h2> The New Password has been generated, successfully !</h2>
                <p>Please check your email!</p>

                <Link to="/">Go Back to Home</Link>
            </div>
        </div>
    );
};
