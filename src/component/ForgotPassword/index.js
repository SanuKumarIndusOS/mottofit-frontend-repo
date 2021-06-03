import React, { Component } from "react";
import axios from "axios";
class ForgotPassword extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.email,
        };

        // axios.post('', data).then(
        //     res => {

        //     }
        // )
    };

    render() {
        return (
            <>
                <div className="container" style={{ height: "100vh" }}>
                    <h2>Forgot Password</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="email"
                            placeholder="email"
                            onChange={(e) => (this.email = e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        );
    }
}
export default ForgotPassword;
