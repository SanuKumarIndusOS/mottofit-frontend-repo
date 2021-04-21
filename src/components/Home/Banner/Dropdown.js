import React, { useState } from "react";
import BoxingIcon from "../../../assets/FindTrainer/DropDownAssets/Boxing Icon.svg";
import PilatesIcon from "../../../assets/FindTrainer/DropDownAssets/Pilates Icon.svg";
import StrengthIcon from "../../../assets/FindTrainer/DropDownAssets/Strength Icon.svg";
import YogaIcon from "../../../assets/FindTrainer/DropDownAssets/Yoga Icon.svg";

const Dropdown = () => {
    const [ddBoxingState, setddBoxingState] = useState(false);
    const [ddPilatesState, setddPilatesState] = useState(false);
    const [ddYogaState, setddYogaState] = useState(false);
    const [ddHiitState, setddHiitState] = useState(false);

    return (
        <>
            <div className="box_3_active">
                <div className="dd_row_one">
                    <div
                        className="option"
                        onClick={() => {
                            setddBoxingState(!ddBoxingState);
                            console.log(ddBoxingState, "boxing");
                        }}
                    >
                        <div className="option_wapper">
                            <img src={BoxingIcon} alt="icon" />
                            <h2>Boxing</h2>
                        </div>
                    </div>
                    <div
                        className="option"
                        onClick={() => {
                            setddPilatesState(!ddPilatesState);
                            console.log(ddPilatesState, "pilates");
                        }}
                    >
                        <div className="option_wapper">
                            <img src={PilatesIcon} alt="icon" />
                            <h2>Pilates</h2>
                        </div>
                    </div>
                </div>
                <div className="dd_row_two">
                    <div
                        className="option"
                        onClick={() => {
                            setddHiitState(!ddHiitState);
                            console.log(ddHiitState, "hiit");
                        }}
                    >
                        <div className="option_wapper">
                            <img src={StrengthIcon} alt="icon" />
                            <h2>Strength & Hiit</h2>
                        </div>
                    </div>
                    <div
                        className="option"
                        onClick={() => {
                            setddYogaState(!ddYogaState);
                            console.log(ddYogaState, "yoga");
                        }}
                    >
                        <div className="option_wapper">
                            <img src={YogaIcon} alt="icon" />
                            <h2>Yoga</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
