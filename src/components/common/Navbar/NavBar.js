import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Person from "../../../assets/SignUp/Person Icon.svg";
import { Nav, Bars } from "./NavbarStyled";
import "./styles.css";
import LogoImage from "../../../assets/SVG/Motto Logo.svg";
import Line from "../../../assets/SVG/Blue Line.svg";
import Line2 from "../../../assets/SVG/Blue Line 2.svg";
import SignIn from "../../SignIn/Banner";

export const NavBar = ({ toggle }) => {
    const [showModel, setShowModel] = useState(false);

    const openModal = () => {
        setShowModel((prev) => !prev);
    };

    return (
        <>
            <nav className="navbar1 ">
                <div className="nav_wrapper container">
                    <div className="header-links1">
                        <Link to="/findtrainer">How it works</Link>
                        <img src={Line} alt="icon" />
                        <Link to="/">Who we are</Link>
                    </div>
                    <Bars onClick={toggle} />
                    <div className="logo-content1">
                        <Link to="">
                            <img
                                src={LogoImage}
                                alt="logo"
                                className="changeLogo1"
                            />
                        </Link>
                    </div>
                    <div className="search-items1">
                        <div className="input-item1">
                            <input
                                className="input"
                                type="text"
                                placeholder="Rotating prompts go here"
                            ></input>
                            <BiSearch className="search-icon1" />
                        </div>
                        <div className="login-item1">
                            <img src={Line2} alt="icon" />

                            <img src={Person} alt="icon" onClick={openModal} />
                            <SignIn
                                showModel={showModel}
                                setShowModel={setShowModel}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
