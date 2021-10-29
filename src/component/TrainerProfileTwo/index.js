import React from 'react';
import "./styles.scss";

import MottoSessionType from './subcomponents/MottoSessionType';


function TrainerProfileTwo() {
    return (
        <div className="trainer_profile_container">
            <div style={{width:"30%"}}></div>
            <div style={{width:"70%"}}> <MottoSessionType /></div>
           
        </div>
    )
}

export default TrainerProfileTwo
