import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import {
    Nav,
    Bars
} from "./NavbarStyled";
import "./styles.css";

export const NavBar = ({ toggle }) => {
    const [navbar, setNavebar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavebar(true);
        } else {
            setNavebar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <>
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="130.706"
                        height="53.226"
                        viewBox="0 0 130.706 53.226"
                    >
                        <g
                            id="Motto_Logo"
                            data-name="Motto Logo"
                            transform="translate(-905 -37)"
                        >
                            <path
                                id="Path_13932"
                                data-name="Path 13932"
                                d="M342.044,252.518h-7.353l.546,3.044c.069.484.143.953.214,1.414.154.993.3,1.931.391,2.861.052.539.131,1.074.21,1.608a10.053,10.053,0,0,1,.074,3.96c-1.111,4.454-2.145,9-3.146,13.4q-.64,2.814-1.287,5.626t-1.315,5.626l-12.192-37.6h-7.5l2.819,8.688q1.919,5.926,3.811,11.862a2.7,2.7,0,0,1,.125,1.26l-.111.511c-1.374,6.347-2.8,12.909-4.311,19.332-.479,2.032-1.076,4-1.708,6.089-.285.943-.571,1.889-.847,2.842l-.475,1.642h7.6l.066-1.216a149.878,149.878,0,0,1,2.7-21.134l7.281,22.472,3.425-.171,6.961-29.759,4.316,29.774h7.3Z"
                                transform="translate(595.013 -215.454)"
                                fill="#53bfd2"
                            />
                            <path
                                id="Path_13933"
                                data-name="Path 13933"
                                d="M453.278,265.3V252.454h-6.761v12.634h-3.3V252.454h-6.751v12.877H431.48v3.981h5.111V304.68h6.692V269.312h3.342v35.382h6.682V269.336l5.11-.032v-4Z"
                                transform="translate(545.019 -215.454)"
                                fill="#53bfd2"
                            />
                            <path
                                id="Path_13934"
                                data-name="Path 13934"
                                d="M405.822,278.468a15.744,15.744,0,0,0-11.908-5.769H393.8a15.846,15.846,0,0,0-11.943,5.624c-7.321,8.3-7.329,21.822-.017,30.14A15.849,15.849,0,0,0,393.8,314.13c.121,0,.242,0,.363,0a15.753,15.753,0,0,0,12.007-6.217,23.564,23.564,0,0,0,5.065-14.5v-.067A22.964,22.964,0,0,0,405.822,278.468Zm-21.7,20.361a23.3,23.3,0,0,1,2.33-16.912,13.466,13.466,0,0,1,2.267-2.967,7.069,7.069,0,0,1,5.05-2.233,7.24,7.24,0,0,1,4.977,2.1A14.626,14.626,0,0,1,402.194,284a25.775,25.775,0,0,1,1.881,9.449,23.088,23.088,0,0,1-2.866,11.311,16.262,16.262,0,0,1-2.762,3.472,6.875,6.875,0,0,1-9.432-.038C386.668,306,385.115,303.026,384.127,298.829Z"
                                transform="translate(567.688 -223.907)"
                                fill="#53bfd2"
                            />
                            <path
                                id="Path_13935"
                                data-name="Path 13935"
                                d="M502.409,278.562a15.46,15.46,0,0,0-24.067-.22c-7.314,8.319-7.306,21.841.018,30.14a15.856,15.856,0,0,0,11.949,5.649c.126,0,.253,0,.38-.005a15.779,15.779,0,0,0,12.008-6.238,23.625,23.625,0,0,0,5.051-14.453v-.067A23.252,23.252,0,0,0,502.409,278.562Zm-21.752,20.357a23.345,23.345,0,0,1,2.326-17.043,16.717,16.717,0,0,1,2.149-2.842l.072-.082a6.626,6.626,0,0,1,4.875-2.175l.167,0a7.037,7.037,0,0,1,5.11,2.111,16.963,16.963,0,0,1,3.7,6.024,26.535,26.535,0,0,1,1.527,8.6,23.169,23.169,0,0,1-2.884,11.285,16.168,16.168,0,0,1-2.773,3.462,6.85,6.85,0,0,1-9.335,0C483.2,306.054,481.68,303.175,480.657,298.919Z"
                                transform="translate(527.958 -223.906)"
                                fill="#53bfd2"
                            />
                        </g>
                    </svg>
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
                        <Link to="/" className="link-icons">
                            <BsPerson />
                        </Link>
                    </div>
                </div>
            </Nav>
        </>
    );
};
