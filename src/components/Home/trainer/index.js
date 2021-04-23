import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import BlueHoverButton from "../../common/BlueArrowButton";

export default class Trainer extends Component {
    render() {
        return (
            <>
                <div className="outter_bg_container ">
                    <div className="background_container ">
                        <div className="container_empty"></div>
                        <div className="container_trainer ">
                            <div className="qustion">
                                Are you a trainer interested in joining Motto?
                            </div>
                            <div className="answer">
                                Get access & matched with the right clients
                                based on your expertise. Maximize your time and
                                earnings by booking 1-on-1 or group workouts.
                                Minimize customer acquisition cost with no
                                upfront or subscription fees.
                            </div>

                            <div className="link">
                                <div className="button-text">
                                    <Link to="/trainersignup">
                                        APPLY AS A TRAINER <BlueHoverButton />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
