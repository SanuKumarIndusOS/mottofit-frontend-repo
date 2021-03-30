import React, { useState } from "react";
import "./styles.scss";
import Person from "../../../assests/SignUp/Person Icon.svg";
import Mail from "../../../assests/SignUp/Email Icon.svg";
import Phone from "../../../assests/SignUp/Phone Icon.svg";
import Password from "../../../assests/SignUp/Password Icon.svg";
import Arrow from "../../../assests/SignUp/Arrow.svg";
import ArrowSecondary from "../../../assests/SignUp/ArrowSecondary.svg";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

const BannerTrainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const { register, errors, handleSubmit, watch } = useForm();

    // const history = useHistory();

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

    const showPassword = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const showConfirmPassword = () => {
        setConfirmPasswordShown(confirmPasswordShown ? false : true);
    };

    function trainerSignUp() {
        let item = { name, email, phone, password, cpassword };
        if (name && email) {
            setRedirect(true);
        } else {
            setRedirect(false, "not found");
        }
        console.log(item);

        localStorage.setItem("user-info", JSON.stringify(item));
        // history.push('/findtrainer')
    }
    return (
        <>
            {redirect ? <Redirect to={"/findtrainer"} /> : null}

            <div className="banner_container">
                <div className="wrapper_main">
                    <div className="item_left">
                        <h2>Sign Up to be a part of the Motto Family</h2>
                        <p>
                            Create an account to start the application process
                            of becoming a Motto trainer in one of our live
                            cities.
                        </p>
                    </div>
                    <div className="wrapper">
                        <div className="item_right">
                            <div className="inner_wrapper">
                                <div className="inner_items">
                                    <h3>Sign Up with Motto!</h3>
                                    <p>
                                        Fill up the following details to create
                                        your account
                                    </p>
                                    <div className="form_items">
                                        <form>
                                            <div className="input_items">
                                                <input
                                                    placeholder="Name"
                                                    type="text"
                                                    value={name}
                                                    name="name"
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    ref={register({
                                                        pattern: /^[A-Za-z]+$/i,
                                                        required: true,
                                                        minLength: 2,
                                                    })}
                                                />
                                                <img src={Person} alt="icon" />
                                                {errors.name && (
                                                    <span>
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                                {errors.name?.type ===
                                                    "required" && (
                                                    <span>
                                                        This input is required
                                                    </span>
                                                )}
                                                {errors.name?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        This field should
                                                        contain more then one
                                                        charater
                                                    </span>
                                                )}
                                                {errors.name?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        This field accept only
                                                        alphabets
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items">
                                                <input
                                                    placeholder="Email"
                                                    type="email"
                                                    value={email}
                                                    name="email"
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    ref={register({
                                                        required:
                                                            "This filed is required",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Enter a valid name",
                                                        },
                                                    })}
                                                />
                                                <img src={Mail} alt="icon" />
                                                {errors.email && (
                                                    <span>
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items">
                                                <input
                                                    placeholder="Phone"
                                                    type="text"
                                                    value={phone}
                                                    name="phone"
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    ref={register({
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 11,
                                                    })}
                                                />
                                                <img src={Phone} alt="icon" />
                                                {errors.phone && (
                                                    <span>
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                                {errors.phone?.type ===
                                                    "required" && (
                                                    <span>
                                                        This input is required
                                                    </span>
                                                )}
                                                {errors.phone?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Enter a valid number
                                                    </span>
                                                )}
                                                {errors.phone?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items">
                                                <input
                                                    placeholder="Create Password"
                                                    type={passwordShown ? 'text': 'password'}
                                                    value={password}
                                                    name="password"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    ref={register({
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 16,
                                                        pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                                    })}
                                                />
                                                <img
                                                    src={Password}
                                                    alt="icon"
                                                    onClick={showPassword}
                                                />
                                                {errors.password?.type ===
                                                    "required" && (
                                                    <span>
                                                        This input is required
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Password should be more
                                                        then 6 Charcters
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )}
                                                {errors.password?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        Password should contain
                                                        atleast one number and
                                                        one special character
                                                    </span>
                                                )}
                                            </div>

                                            <div className="input_items">
                                                <input
                                                    placeholder="Confirm Password"
                                                    type={confirmPasswordShown? 'text': 'password'}
                                                    value={cpassword}
                                                    name="cpassword"
                                                    onChange={(e) =>
                                                        setCPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    ref={register({
                                                        validate: (value) =>
                                                            value ===
                                                            watch("password"),
                                                        required: true,
                                                        minLength: 6,
                                                        maxLength: 16,
                                                        pattern: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/,
                                                    })}
                                                />
                                                <img
                                                    src={Password}
                                                    alt="icon"
                                                    onClick={showConfirmPassword}
                                                />
                                                {errors.cpassword?.type ===
                                                    "required" && (
                                                    <span>
                                                        This input is required
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "minLength" && (
                                                    <span>
                                                        Password should be more
                                                        then 6 Charcters
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "maxLength" && (
                                                    <span>
                                                        This field exceed max
                                                        length
                                                    </span>
                                                )}
                                                {errors.cpassword?.type ===
                                                    "pattern" && (
                                                    <span>
                                                        Password should contain
                                                        atleast one number and
                                                        one special character
                                                    </span>
                                                )}
                                                {errors.cpassword?.type !==
                                                    errors.password && (
                                                    <span>
                                                        The passwords do not
                                                        match
                                                    </span>
                                                )}
                                            </div>

                                            <div className="submit_button">
                                                <button
                                                    onClick={handleSubmit(
                                                        trainerSignUp
                                                    )}
                                                >
                                                    <p>Continue to Account</p>
                                                    <img
                                                        src={Arrow}
                                                        alt="icon"
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="login_items">
                                        <h4>Already have an account?</h4>

                                        <Link to="/">
                                            Sign In now
                                            <img
                                                src={ArrowSecondary}
                                                alt="icon"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerTrainer;
