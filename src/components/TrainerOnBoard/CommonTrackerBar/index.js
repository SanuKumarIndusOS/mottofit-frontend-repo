import React from "react";
import "./styles.scss";
import People from "../../../assets/SVG/Person Icon.svg";
import Trainer from "../../../assets/SVG/Training Icon.svg";
import Schedule from "../../../assets/SVG/Schedule Slot Icon.svg";
import Arrow1 from '../../../assets/SVG/Arrow 1.svg'

const TrainerTracker = () => {
    
    return (
        <>
            <div className="tracker_main">
                <div className="wrapper_item">
                    <div className="items">
                        <img src={People} alt="icon" />
                        <p activeClassName='active'>About you</p>
                    </div>
                    <img src={Arrow1} alt='icon'/>
                    <div className="items">
                        <img src={Trainer} alt="icon" />
                        <p activeClassName='active'>Training background</p>
                    </div>
                    <img src={Arrow1} alt='icon'/>
                    <div className="items">
                        <img src={Schedule} alt="icon" />
                        <p activeClassName='active'>Avaliability</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerTracker;
