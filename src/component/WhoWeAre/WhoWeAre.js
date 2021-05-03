import React from "react";
import "./styles.scss";
import FindIcon from "../../assets/files/WhoAreWe/Image 1.svg";
import Icon2 from "../../assets/files/WhoAreWe/Image 2.svg";
import Icon3 from "../../assets/files/WhoAreWe/Image 3.svg";
import Icon4 from "../../assets/files/WhoAreWe/Image 4.svg";
import WaterMark from "../../assets/files/WhoAreWe/M Watermark.svg";

export const WhoWeAre = () => {
    return (
        <>
            <div className="outter_we_container">
                <div className="container">
                    <div className="inner_we_container">
                        <div className="we_wrapper">
                            <div className="we_section">
                                <h2>Who We Are</h2>
                                <span></span>

                                <p>
                                    We are three friends who love fitness, and
                                    have been consistently frustrated by the
                                    process of finding quality trainers.
                                </p>
                            </div>
                            <div className="we_section">
                                <img src={FindIcon} alt="icon" />

                                <p>
                                    Like you, we want the process of booking a
                                    trainer for your unique needs to be
                                    seamless, trusted & personal!
                                </p>
                            </div>
                            <div className="we_section">
                                <div className="section_images">
                                    <img src={Icon2} alt="icon" />
                                    <img src={Icon3} alt="icon" />
                                    <img src={Icon4} alt="icon" />
                                </div>
                                <p>
                                    Whether your idea of a great workout is
                                    having intense 1 on 1 sessions, or getting a
                                    social sweat with friends & peers, we are
                                    building a community to ensure you get the
                                    unrivaled & trustworthy training experience
                                    you deserve.
                                </p>
                            </div>
                            <div className="we_section">
                                <span className="separator"></span>

                                <h6>#dowhatmoveyou</h6>
                            </div>
                        </div>
                        <img
                            src={WaterMark}
                            alt="watermark"
                            className="watermark"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
