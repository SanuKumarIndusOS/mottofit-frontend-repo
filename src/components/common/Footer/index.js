import React from "react";
import "./styles.sass";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Line from '../../../assets/SVG/Line 2.svg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="left">
                    <div className="left-footer">
                        <p>Stalk us for updates</p>
                        <ul className="icons">
                            <li>
                                <Link to="/">
                                    <AiOutlineInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <AiFillYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaFacebookF />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container-box">
                    <div className="middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="568.953"
                            height="430"
                            viewBox="0 0 568.953 430"
                        >
                            <path
                                id="Path_13694"
                                data-name="Path 13694"
                                d="M204.856,0,0,430H356.133L536.977,50.4,568.952,0Z"
                                transform="translate(0)"
                                fill="#2c2c2c"
                            />
                        </svg>
                    </div>
                    <div className="right">
                        <div className="ul-items">
                            <div className="logo-contents">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="79"
                                    height="111.101"
                                    viewBox="0 0 79 111.101"
                                >
                                    <g
                                        id="Motto_Logo"
                                        data-name="Motto Logo"
                                        transform="translate(-395.634 -179.45)"
                                    >
                                        <path
                                            id="Path_14221"
                                            data-name="Path 14221"
                                            d="M435.134,290.551a39.543,39.543,0,0,1-39.5-39.5v-32.1a39.5,39.5,0,0,1,79,0v32.1A39.543,39.543,0,0,1,435.134,290.551Zm0-107.743A36.181,36.181,0,0,0,399,218.948v32.1a36.138,36.138,0,1,0,72.277,0v-32.1A36.181,36.181,0,0,0,435.134,182.808Z"
                                            fill="#53bfd2"
                                        />
                                        <path
                                            id="Path_14222"
                                            data-name="Path 14222"
                                            d="M440.989,196.271h-7.745l.223,1.555c.074.511.151,1.006.226,1.493.163,1.049.317,2.042.411,3.024.055.571.139,1.135.223,1.7a10.673,10.673,0,0,1,.077,4.184c-1.171,4.707-2.259,9.51-3.313,14.156q-.676,2.972-1.356,5.945t-1.385,5.945l-12.27-38.062h-7.9l2.4,7.512c1.346,4.176,2.693,8.35,4.013,12.536a2.852,2.852,0,0,1,.132,1.332l-.117.538c-1.448,6.708-2.945,13.641-4.541,20.43-.5,2.146-1.133,4.229-1.8,6.433-.3,1-.6,2-.893,3l-.5,1.735h8l.07-1.284a158.816,158.816,0,0,1,2.846-22.332l7.669,23.745,3.607-.18,7.333-31.447,4.544,31.462h7.685Z"
                                            transform="translate(8.027 11.969)"
                                            fill="#53bfd2"
                                        />
                                    </g>
                                </svg>
                                <a href="mailto:hello@motto.com">
                                    hello@motto.com
                                </a>
                            </div>
                            <ul className="about">
                                <li>
                                    <Link to="/">Who we are</Link>
                                </li>
                                <li>
                                    <Link to="/">How it works</Link>
                                </li>
                                <li>
                                    <Link to="/">Find your trainer</Link>
                                </li>
                                <li>
                                    <Link to="/">Be a trainer</Link>
                                </li>
                            </ul>
                            <hr />
                        </div>
                        <div className="content-rights">
                            <div className="rights">
                                <span>
                                    © {new Date().getFullYear()} Motto All
                                    Rights reserved,{" "}
                                </span>
                                <span className="span-text">
                                    Designed by <a href='/'>Lucid</a>
                                </span>
                            </div>
                            <div className="content-privacy">
                                <ul>
                                    <li>Privacy Policy</li> 
                                    <img src={Line} alt='svg'/>
                                    <li>Terms of Use</li>
                                    <img src={Line} alt='svg'/>

                                    <li>Legal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
