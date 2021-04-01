import React from "react";
import "./styles.scss";
import People from "../../../assets/SVG/Person Icon.svg";
import Trainer from "../../../assets/SVG/Training Icon.svg";
import Schedule from "../../../assets/SVG/Schedule Slot Icon.svg";

const TrainerTracker = () => {
    return (
        <>
            <div className="tracker_main">
                <div className="wrapper_item">
                    <div className="items">
                        <img src={People} alt="icon" />
                        <p>About you</p>
                    </div>
                    <div className="items">
                        <img src={Trainer} alt="icon" />
                        <p>Training background</p>
                    </div>
                    <div className="items">
                        <img src={Schedule} alt="icon" />
                        <p>Avaliability</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerTracker;
