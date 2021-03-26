import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Person from "../../../assests/SignUp/Person Icon.svg";
import { Nav, Bars } from "./NavbarHomeStyled";
import Logo from "../../../assests/Home/Banner/Motto Logo.png";
import "./stylesHome.css";
import SignIn from "../../SignIn/Banner";
// import SignIn from '../../component/SignIn/Banner/index'

const NavBarHome = ({ toggle }) => {
    const [navbar, setNavbar] = useState(false);
    const [showModel, setShowModel] = useState(false);

    const openModal = () => {
        setShowModel((prev) => !prev);
    };

    useEffect(() => {
        setNavbar(true);
        return () => setNavbar(false);
    }, []);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <Nav className={navbar ? "navbaractive active" : "navbar-sass"}>
            <div className="header-links">
                <Link to="/findtrainer">How it works</Link>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="36"
                    viewBox="0 0 20 36"
                >
                    <defs>
                        <filter
                            id="Blue_Line"
                            x="0"
                            y="0"
                            width="20"
                            height="36"
                            filterUnits="userSpaceOnUse"
                        >
                            <feOffset dy="3" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood floodColor="#624123" />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                        </filter>
                    </defs>
                    <g
                        transform="matrix(1, 0, 0, 1, 0, 0)"
                        filter="url(#Blue_Line)"
                    >
                        <line
                            id="Blue_Line-2"
                            data-name="Blue Line"
                            y2="18"
                            transform="translate(10 6)"
                            fill="none"
                            stroke="#53bfd2"
                            strokeWidth="2"
                        />
                    </g>
                </svg>
                <Link to="/">Who we are</Link>
            </div>
            <Bars onClick={toggle} />
            <div className="logo-content">
                <img src={Logo} alt="logo" />
            </div>
            <div className="search-items">
                <div className="input-item">
                    <input
                        type="text"
                        placeholder="Rotating prompts go here"
                    ></input>
                    <BiSearch className="search-icon" />
                </div>
                <div className="login-item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="58"
                        viewBox="0 0 20 58"
                    >
                        <defs>
                            <filter
                                id="Blue_Line_2"
                                x="0"
                                y="0"
                                width="20"
                                height="58"
                                filterUnits="userSpaceOnUse"
                            >
                                <feOffset dy="3" input="SourceAlpha" />
                                <feGaussianBlur
                                    stdDeviation="3"
                                    result="blur"
                                />
                                <feFlood floodColor="#624123" />
                                <feComposite operator="in" in2="blur" />
                                <feComposite in="SourceGraphic" />
                            </filter>
                        </defs>
                        <g
                            transform="matrix(1, 0, 0, 1, 0, 0)"
                            filter="url(#Blue_Line_2)"
                        >
                            <line
                                id="Blue_Line_2-2"
                                data-name="Blue Line 2"
                                y2="40"
                                transform="translate(10 6)"
                                fill="none"
                                stroke="#53bfd2"
                                strokeWidth="2"
                            />
                        </g>
                    </svg>
                    <img src={Person} alt="icon" onClick={openModal} />
                    <SignIn showModel={showModel} setShowModel={setShowModel} />
                </div>
            </div>
        </Nav>
    );
};

export default NavBarHome;
