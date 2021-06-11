import React, { useState } from "react";
import BoxingIcon from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Inactive.svg";
import PilatesIcon from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Inactive.svg";
import StrengthIcon from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Inactive.svg";
import YogaIcon from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Inactive.svg";
import HoverImage from "react-hover-image";

// Assets when hoveded
import BoxingIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Boxing_Active.svg";
import PilatesIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Pilates_Active.svg";
import StrengthIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Strength_HIIT_Active.svg";
import YogaIconIconActive from "../../../assets/files/FindTrainer/DropDownAssets/Yoga_Active.svg";

const Dropdown = ({ onClick = () => {}, selectedData }) => {
  const [ddBoxingState, setddBoxingState] = useState(false);
  const [ddPilatesState, setddPilatesState] = useState(false);
  const [ddYogaState, setddYogaState] = useState(false);
  const [ddHiitState, setddHiitState] = useState(false);

  return (
    <>
      <div className="box_3_active_home">
        <div className="dd_row_one">
          <div
            className={`option ${
              selectedData === "Boxing" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddBoxingState(!ddBoxingState);
              onClick({ vertical: "Boxing" });
              console.log(ddBoxingState, "boxing");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={BoxingIcon} hoverSrc={BoxingIconActive} />
              <h2>Boxing</h2>
            </div>
          </div>
          <div
            className={`option ${
              selectedData === "Pilates" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddPilatesState(!ddPilatesState);
              onClick({ vertical: "Pilates" });
              console.log(ddPilatesState, "pilates");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={PilatesIcon} hoverSrc={PilatesIconActive} />
              <h2>Pilates</h2>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className={`option ${
              selectedData === "Strength & Hiit" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddHiitState(!ddHiitState);
              console.log(ddHiitState, "hiit");
              onClick({ vertical: "Strength & Hiit" });
            }}
          >
            <div className="option_wapper">
              <HoverImage src={StrengthIcon} hoverSrc={StrengthIconActive} />
              <h2>Strength & Hiit</h2>
            </div>
          </div>
          <div
            className={`option ${
              selectedData === "Yoga" ? "selected-data" : ""
            }`}
            onClick={() => {
              setddYogaState(!ddYogaState);
              console.log(ddYogaState, "yoga");
              onClick({ vertical: "Yoga" });
            }}
          >
            <div className="option_wapper">
              <HoverImage src={YogaIcon} hoverSrc={YogaIconIconActive} />
              <h2>Yoga</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
