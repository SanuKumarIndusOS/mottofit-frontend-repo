import React, { useState } from "react";
import BoxingIcon from "../../../assets/files/FindTrainer/DropDownAssets/Boxing Icon.svg";
import PilatesIcon from "../../../assets/files/FindTrainer/DropDownAssets/Pilates Icon.svg";
import StrengthIcon from "../../../assets/files/FindTrainer/DropDownAssets/Strength Icon.svg";
import YogaIcon from "../../../assets/files/FindTrainer/DropDownAssets/Yoga Icon.svg";
import './find.scss'

const DropdownTrainerAvailability = () => {
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
              <h2>Early Bird</h2>
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
              <h2>Rise & Shine</h2>
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
              <h2>Mid-day Break</h2>
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
              <h2>Happy Hour</h2>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className="option"
            onClick={() => {
              setddYogaState(!ddYogaState);
              console.log(ddYogaState, "yoga");
            }}
          >
            <div className="option_wapper">
              <img src={YogaIcon} alt="icon" />
              <h2>Never Too Late</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownTrainerAvailability;
