import React from "react";
import "./styles.scss";
import Instagram from "../../../assets/SVG/Insta Icon.svg";
import Web from "../../../assets/SVG/Web Icon.svg";
import DropDown from "../../../assets/SVG/Drop Down 4.svg";
// import TrainerBackground from "../TrainerBackground";
import {  Link,NavLink,useHistory } from "react-router-dom";
import ArrowBlackHover from '../../common/ButtonIconBlackCircle/ArrowBlackHover'

const AboutTrainer = () => {

    const history = useHistory()

    const handleTrainerBackground = () => {
        history.push('/trainerbackground')
    }
    return (
        <>
            <div className="container main">
                <div className="wrapper_about">
                    <h2>Tell us a little bit about you</h2>
                    <p>
                        *Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem ipsum has been the. *All
                        these fields are mandatory.{" "}
                    </p>
                    <div className="">
                        <form className="wrapper_inputs">
                            <div className="wrapper_innerInput">
                                <label>Name*</label>
                                <input placeholder="Name" type="name" />
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Location*</label>
                                <input placeholder="Location" type="name" />
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Date of Birth*</label>
                                <input placeholder="DOB"  type="date" />
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Gender*</label>
                                <div className="iconwrapper">
                                    <select required 
                                    // name="gender" 
                                    // id="gender"
                                    >
                                         <option value="" disabled selected >Select your Gender</option>
                                        <option>Male</option>
                                        <option >Female</option>
                                        <option >Others</option>
                                    </select>
                                    <img src={DropDown} alt="icon" />
                                </div>
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Email*</label>
                                <input placeholder="Email" type='email' />
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Phone*</label>
                                <input placeholder="Phone Number" type='phone'/>
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Website</label>
                                <div className="iconwrapper">
                                    <input placeholder="Add your website"  type='text'/>
                                    <img src={Web} alt="icon" />
                                </div>
                            </div>
                            <div className="wrapper_innerInput">
                                <label>Instagram</label>
                                <div className="iconwrapper">
                                    <input placeholder="Add yor Instagram Handle" type='text' />
                                    <img src={Instagram} alt="icon" />
                                </div>
                            </div>

                            <div className="submit_button">
                                <Link type="submit" onClick={handleTrainerBackground} >
                                    Continue
                                    <ArrowBlackHover/>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTrainer;
