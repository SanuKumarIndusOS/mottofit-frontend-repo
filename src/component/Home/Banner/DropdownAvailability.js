import React, { useState } from "react";
import HoverImage from "react-hover-image";

//Assets on normal
import EarlyInActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/EarlyBird_Inactive.svg";
import RiseInActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/Rise_Shine_Inactive.svg";
import MidInActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/Mid-DayBreak_Inactive.svg";
import HappyInActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/HappyHour_Inactive.svg";
import NeverTooInActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/NeverTooLate_Inactive.svg";

//Assets on hover
import EarlyActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/EarlyBird_Active.svg";
import RiseActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/Rise_Shine_Active.svg";
import MidActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/Mid_DayBreak_Active.svg";
import HappyActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/HappyHour_Active.svg";
import NeverTooActive from "../../../assets/files/FindTrainer/AvaliablityDropDownAssets/NeverTooLate_Active.svg";

import "./find.scss";

const DropdownTrainerAvailability = ({ onClick = () => {}, selectedData }) => {
  // const [ddBoxingState, setddBoxingState] = useState(false);
  // const [ddPilatesState, setddPilatesState] = useState(false);
  // const [ddYogaState, setddYogaState] = useState(false);
  // const [ddHiitState, setddHiitState] = useState(false);

  return (
    <>
      <div className="box_3_active_home" >
        <div className="dd_row_one">
          <div
            className={`option ${
              selectedData === "EarlyBird" ? "selected-data" : ""
            }`}
            onClick={() => {
              // setddBoxingState(!ddBoxingState);
              onClick({
                availability: { label: "Early Bird", value: "EarlyBird" },
              });
              //console.log(ddBoxingState, "boxing");
            }}
          >
            <div className="option_wapper">
              <HoverImage
                src={EarlyInActive}
                hoverSrc={EarlyActive}
                onClick={React.MouseEventHandler}
              />
              <h2>Early Bird</h2>
              <label>(5am-8am)</label>
            </div>
          </div>
          <div
            className={`option ${
              selectedData === "RiseAndShine" ? "selected-data" : ""
            }`}
            onClick={() => {
              // setddPilatesState(!ddPilatesState);
              onClick({
                availability: { label: "Rise & Shine", value: "RiseAndShine" },
              });
              // console.log(ddPilatesState, "pilates");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={RiseInActive} hoverSrc={RiseActive} />
              <h2>Rise & Shine</h2>
              <label>(8am-11am)</label>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className={`option ${
              selectedData === "MidDayBreak1" ? "selected-data" : ""
            }`}
            onClick={() => {
              // setddHiitState(!ddHiitState);
              onClick({
                availability: { label: "Mid-Day Break", value: "MidDayBreak1" },
              });
              // console.log(ddHiitState, "hiit");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={MidInActive} hoverSrc={MidActive} />
              <h2>Mid-day Break</h2>
              <label>(11:30am-2pm)</label>
            </div>
          </div>
          <div
            className={`option ${
              selectedData === "MidDayBreak2" ? "selected-data" : ""
            }`}
            onClick={() => {
              //setddYogaState(!ddYogaState);
              onClick({
                availability: {
                  label: "Mid-Day LunchTime",
                  value: "MidDayBreak2",
                },
              });
              //console.log(ddYogaState, "yoga");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={MidInActive} hoverSrc={MidActive} />
              <h2>Mid-Day LunchTime</h2>
              <label>(2pm-5pm)</label>
            </div>
          </div>
        </div>
        <div className="dd_row_two">
          <div
            className={`option ${
              selectedData === "HappyHours" ? "selected-data" : ""
            }`}
            onClick={() => {
              // setddYogaState(!ddYogaState);
              onClick({
                availability: {
                  label: "Happy Hour",
                  value: "HappyHours",
                },
              });
              // console.log(ddYogaState, "yoga");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={NeverTooInActive} hoverSrc={NeverTooActive} />
              <h2>Happy Hours</h2>
              <label>(5pm-8pm)</label>
            </div>
          </div>
          <div
            className={`option ${
              selectedData === "NeverTooLate" ? "selected-data" : ""
            }`}
            onClick={() => {
              // setddYogaState(!ddYogaState);
              onClick({
                availability: {
                  label: "Never Too Late",
                  value: "NeverTooLate",
                },
              });
              // console.log(ddYogaState, "yoga");
            }}
          >
            <div className="option_wapper">
              <HoverImage src={NeverTooInActive} hoverSrc={NeverTooActive} />
              <h2>Never Too Late</h2>
              <label>(8pm-11pm)</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownTrainerAvailability;
