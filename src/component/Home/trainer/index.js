import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Arrow from "../../../assests/Home/Experience/icon/arrow-orignal.png";
import Watermark from '../../../assests/Home/trainer/M Watermark.png'

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
                            <Link to="/">APPLY AS A TRAINER <img src={Arrow} alt="logo"/></Link>
                        </div>
                    </div>
                    <div className='watermark'>
                        <img src={Watermark} alt=''/>
                    </div>
                </div>
            </div>
        );
    }
}
