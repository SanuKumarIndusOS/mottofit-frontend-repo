import React, { useState } from "react";
import Person from "../../../assests/SignUp/Person Icon.svg";
import Mail from "../../../assests/SignUp/Email Icon.svg";
import Phone from "../../../assests/SignUp/Phone Icon.svg";
import Password from "../../../assests/SignUp/Password Icon.svg";
import Facebook from "../../../assests/SignUp/Fb Logo.svg";
import Google from "../../../assests/SignUp/Google Logo.svg";
import Arrow from "../../../assests/SignUp/Arrow.svg";
import ArrowSecondary from "../../../assests/SignUp/ArrowSecondary.svg";
import "./styles.scss";
import { Link, Redirect } from "react-router-dom";



const SignUp = () => {
    // const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [redirect, setRedirect] = useState(false);


    // async function signUp(){
    //     let item = { name, email, phone, password, cpassword};
    //     console.log(item)

    //    let result = await fetch('',{
    //         method:'POST',
    //         body:JSON.stringify(item),
    //         headers:{
    //             "Content-Type":'application/json',
    //             "Accept":'application/json'
    //         }
    //     })
    //     result = await result.json()
    //     localStorage.setItem('user-info', JSON.stringify(result))
    //     history.push('/findtrainer')
    // }




     function signUp(){
        let item = { name, email, phone, password, cpassword};
        if(name && email){
        setRedirect(true)
        } else {
            setRedirect(false, 'not found')
        }
        console.log(item)

        localStorage.setItem('user-info', JSON.stringify(item))

        // history.push('/findtrainer')
    }

  

    return (
        <>
        {redirect ? <Redirect to={'/findtrainer'}/>: null}
            <div className="main_container">
                <div className="wrapper">
                    <div className="inner_wrapper">
                        <div className="inner_items">
                            <h3>Sign Up with Motto!</h3>
                            <p>
                                Fill up the following details to create your
                                account
                            </p>
                            <div className="form_items">
                                <form>
                                    <div className="input_items">
                                        <input
                                            placeholder="Name"
                                            type="text"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <img src={Person} alt="icon" />
                                        <span></span>
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Email"
                                            type="text"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <img src={Mail} alt="icon" />

                                        <span></span>
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Phone"
                                            type="text"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                        <img src={Phone} alt="icon" />

                                        <span></span>
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Create Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <img src={Password} alt="icon" />
                                        <span></span>
                                    </div>

                                    <div className="input_items">
                                        <input
                                            placeholder="Confirm Password"
                                            type="password"
                                            value={cpassword}
                                            onChange={(e) =>
                                                setCPassword(e.target.value)
                                            }
                                        />
                                        <img src={Password} alt="icon" />
                                        <span></span>
                                    </div>
                                </form>
                            </div>
                            <div className="or_items">
                                <div className="hr_line"></div>
                                <div>
                                    <p>or</p>
                                </div>
                                <div className="hr_line"></div>
                            </div>
                            <div className="social_buttons">
                                <button className="facebook-auth">
                                    <img src={Facebook} alt="icon" />
                                    Sign Up with Facebook
                                </button>

                                <button className="google-auth">
                                    <img src={Google} alt="icon" />
                                    Sign Up with Google
                                </button>
                            </div>
                            <div className="submit_button">
                                <button onClick={signUp}>
                                    Continue to Account{" "}
                                    <img src={Arrow} alt="icon" />
                                </button>
                            </div>
                            <div className="login_items">
                                <h4>Already have an account?</h4>

                                <Link to="/">
                                    Sign In now
                                    <img src={ArrowSecondary} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
