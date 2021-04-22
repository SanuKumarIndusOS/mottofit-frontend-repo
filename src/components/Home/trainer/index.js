import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Watermark from '../../../assets/Home/trainer/M Watermark.png'
import ArrowHover from "../../common/ButtonIcon/ArrowHover";
import BlueHoverButton from "../../common/BlueArrowButton";

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
                        booking 1-on-1 or group workouts. Minimize <br></br>
                        customer acquisition cost with no upfront or subscription fees.
                    </div>

                    <div className="link">
                        <div className='button-text'>
                            <Link to="/">APPLY AS A TRAINER <BlueHoverButton/></Link>
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
