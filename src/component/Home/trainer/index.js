import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Circle from "../../../assests/SVG/circle.png";
import Arrow from "../../../assests/SVG/arrow.png";

export default class Trainer extends Component {
    render() {
        return (
            <div className="background_container">
                <div className="container_trainer">
                    <div className="qustion">
                        Are you a trainer interested in joining Motto?
                    </div>
                    <div className="answer">
                        Get access & matched with the right clients based on
                        your expertise. Maximize your time and earnings by
                        booking 1-on-1 or group workouts. Minimize customer
                        acquisition cost with no upfront or subscription fees.
                    </div>

                    <div className="link">
                        <div className='button-text'>
                            <Link to="/">APPLY AS A TRAINER</Link>
                        </div>
                        <div className="button-custom">
                            <img src={Arrow} alt="" srcSet="" />
                            <img src={Circle} alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
