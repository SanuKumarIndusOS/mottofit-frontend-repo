import React from 'react';
import "./styles.scss";

import BlackCircleButton from "../../common/BlackCircleButton/ArrowHoverBlacked";

function TrainerCard() {
    return (
        <div className="trainer-card-container">
            <div className="trainer-card--profile-picture"></div>
            <div className="trainer-card--profile-brief"></div>
            <div className="trainer-card--cta">
                <div className="trainer-card--cta-action">BOOK A SESSION <BlackCircleButton/></div>
                <div className="trainer-card--cta-price"><span>from </span>$125</div>
            </div>
        </div>
    )
}

export default TrainerCard
