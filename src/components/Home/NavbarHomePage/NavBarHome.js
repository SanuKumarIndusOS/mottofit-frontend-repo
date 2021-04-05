import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Person from "../../../assets/SignUp/Person Icon.svg";
import { Nav, Bars } from "./NavbarHomeStyled";
import Logo from "../../../assets/SVG/Motto Logo Home.svg";
import LogoImage from "../../../assets/SVG/Motto Logo.svg";
import Line from "../../../assets/SVG/Blue Line.svg";
import Line2 from "../../../assets/SVG/Blue Line 2.svg";

import "./stylesHome.css";
import SignIn from "../../SignIn/Banner";
// import SignIn from '../../component/SignIn/Banner/index'

const NavBarHome = ({ toggle }) => {
    const [navbar, setNavbar] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const [logo, setLogo] = useState(false);

    const openModal = () => {
        setShowModel((prev) => !prev);
    };

    useEffect(() => {
        setNavbar(true);
        return () => setNavbar(false);
    }, []);

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setNavbar(true);
            setLogo(true);
        } else {
            setNavbar(false);
            setLogo(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <Nav
            className={
                navbar ? "navbaractive active" : "navbar-sass"
            }
        >
            <div className="main_navbar container ">
                <div className="header-links">
                    <Link to="/findtrainer">How it works</Link>
                    <img src={Line} alt="icon" />
                    <Link to="/">Who we are</Link>
                </div>
                <Bars onClick={toggle} />
                <div className="logo-content">
                    {logo ? (
                        <img
                            src={LogoImage}
                            alt="logo"
                            className="changeLogo"
                        />
                    ) : (
                        <img src={Logo} alt="logo" 
                        className="defaultLogo"
                        
                        />
                    )}
                </div>
                <div className="search-items">
                    <div className="input-item">
                        <input
                        className='input'
                            type="text"
                            placeholder="Rotating prompts go here"
                        />
                        <BiSearch className="search-icon" />
                    </div>
                    <div className="login-item">
                        <img src={Line2} alt="icon" />
                        <img src={Person} alt="icon" onClick={openModal} />
                        <SignIn
                            showModel={showModel}
                            setShowModel={setShowModel}
                        />
                    </div>
                </div>
            </div>
        </Nav>
    );
};

export default NavBarHome;
