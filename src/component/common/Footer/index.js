import React from "react";
import "./styles.scss";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Line from "../../../assets/files/SVG/Line 2.svg";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <footer>
          <div className="footer_outter ">
            <div className="footer_main">
              <div className="footer_left">
                <div className="footer_left_items">
                  <p>Stalk us for updates</p>
                  <div className="footer_socialIcons">
                    <ul className="footer_social">
                      <li>
                        <a
                          href="https://www.instagram.com/bookmotto/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiOutlineInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/book_motto"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" rel="noreferrer">
                          <AiFillYoutube />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/trainmotto/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer_right">
                <div className="footer_right_inner container">
                  <div className="right_wrapper">
                    <div className="logo_contents ">
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
                      <a href="mailto:hello@motto.com" target="_blank">
                        hello@motto.com
                      </a>
                    </div>
                    <ul className="footer_links">
                      <li>
                        <Link to="/">Who we are</Link>
                      </li>
                      <li>
                        <Link to="/how-it-works">How it works</Link>
                      </li>
                      <li>
                        <Link to="/trainer/find">Find your trainer</Link>
                      </li>
                      <li>
                        <Link to="/trainer/signup">Be a trainer</Link>
                      </li>
                    </ul>
                    <hr />
                  </div>
                  <div className="footer_contents">
                    <div className="footer_policy">
                      <p>
                        © {new Date().getFullYear()} Motto All Rights reserved,{" "}
                        <span>
                          {" "}
                          Designed by{" "}
                          <a
                            href="https://www.lucid.co.in/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Lucid
                          </a>
                        </span>
                      </p>

                      <div className="footer_privacy">
                        <ul className="footer_privacy_ul">
                          <li>
                            <Link to="/">FAQs</Link>
                          </li>
                          <img src={Line} alt="svg" />
                          <li>
                            <Link to="/">Privacy Policy </Link>
                          </li>
                          <img src={Line} alt="svg" />
                          <li>
                            <Link to="/">Terms of Use </Link>
                          </li>
                          <img src={Line} alt="svg" />
                          <li>
                            <Link to="/">Legal </Link>
                          </li>
                        </ul>
                        <div className="hr_mobile"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
