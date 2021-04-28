import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Tick from "../../../assets/files/FindTrainer/Tick 1.svg";
import BlueHoverButton from "../../common/BlueArrowButton";
import Footer from "../../common/Footer";
import ArrowBack from "../../../assets/files/SVG/Arrow Back.svg";
import ArrowNext from "../../../assets/files/SVG/Arrow Next.svg";

const UserMottoPass = () => {
  return (
    <>
      <div className="motto_outter_container">
        <div className="container">
          <div className="motto_inner_container">
            <div className="motto_links">
              <div className="links_wrapper">
                <div className="outter_links">
                  <img src={ArrowBack} alt="icon" />
                  <div className="inner_links">
                    <Link to="/user-onboard/book-session">
                      {" "}
                      Change your Booking
                    </Link>
                    <div></div>
                  </div>
                </div>
                <div className="outter_links">
                  <div className="inner_links">
                    <Link to="/user-onboard/user-payments">
                      Skip to Payment
                    </Link>
                    <div></div>
                  </div>
                  <img src={ArrowNext} alt="icon" />
                </div>
              </div>
            </div>
            <div className="motto_wrapper">
              <div className="motto_pass_wrapper">
                <h2>Get a Motto Pass to Do More for Less</h2>
                <div className="motto_pass_items">
                  <div className="motto_pass_left">
                    <div class="session_pass">
                      <h3>3 Session Pass</h3>
                    </div>
                    <div className="session_pass_inner">
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          Valid for <span>Jane Doe</span> only
                        </h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>Non-transferable pass</h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          It can be used anytime within 30 days of the purchase
                        </h5>
                      </div>
                      <div className="session_offer">
                        <h1>
                          <span>$100</span> $90{" "}
                          <span className="offer">/ Session</span>
                        </h1>
                      </div>
                    </div>
                    <div className="get_sessionPass">
                      <button>
                        get this pass now <BlueHoverButton />
                      </button>
                    </div>
                    <div className="button_line"></div>
                  </div>

                  <div className="motto_pass_right">
                    <div class="session_pass">
                      <h3>10 Session Pass</h3>
                    </div>
                    <div className="session_pass_inner">
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          Valid for <span>Jane Doe</span> only
                        </h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>Non-transferable pass</h5>
                      </div>
                      <div className="session_pass_content">
                        <img src={Tick} alt="icon" />
                        <h5>
                          It can be used anytime within 90 days of the purchase
                        </h5>
                      </div>
                      <div className="session_offer">
                        <h1>
                          <span>$100</span> $75{" "}
                          <span className="offer">/ Session</span>
                        </h1>
                      </div>
                    </div>
                    <div className="get_sessionPass">
                      <button>
                        get this pass now <BlueHoverButton />
                      </button>
                    </div>
                    <div className="button_line"></div>
                  </div>
                </div>
              </div>
              <div className="session_skip">
                <h4>
                  Not right now?
                  <Link to="/user-onboard/user-payments">
                    CONTINUE TO PAYMENT <BlueHoverButton />
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserMottoPass;
