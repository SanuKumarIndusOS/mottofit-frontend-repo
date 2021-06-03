// import React, { Component } from "react";
// import axios from "axios";
// class ForgotPassword extends Component {
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             email: this.email,
//         };
//         const headers = {
//             "Content-Type": "application/json",
//             Authorization: localStorage.getItem("token"),
//         };
//         axios
//             .post(
//                 "http://doodlebluelive.com:2307/v1/user/reset-password",
//                 { data },
//                 {
//                     headers: headers,
//                 }
//             )
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     render() {
//         return (
//             <>
//                 <div className="container" style={{ height: "100vh" }}>
//                     <h2>Forgot Password</h2>
//                     <form onSubmit={this.handleSubmit}>
//                         <input
//                             type="email"
//                             placeholder="email"
//                             value={data.email}
//                             name="email"
//                             onChange={(e) => (this.email = e.target.value)}
//                         />
//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </>
//         );
//     }
// }
// export default ForgotPassword;

import React, { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
    const [forgotData, setForgotData] = useState({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: forgotData.email,
        };

        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };
        axios
            .post(
                "http://doodlebluelive.com:2307/v1/user/reset-password",
                { payload },

                {
                    headers: headers,
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onChangeValue = (e) => {
        e.persist();
        setForgotData({ ...forgotData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container" style={{ height: "100vh" }}>
                <h2>Forgot Password</h2>{" "}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="email"
                        value={forgotData.email}
                        name="email"
                        onChange={onChangeValue}
                    />
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};
export default ForgotPassword;
