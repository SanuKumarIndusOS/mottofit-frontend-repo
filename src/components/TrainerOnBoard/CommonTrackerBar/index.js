import React from "react";
import "./styles.scss";
import People_active from "../../../assets/SVG/Person Icon.svg";
import People_inactive from "../../../assets/SVG/Person_2.svg";
import Trainer_active from "../../../assets/SVG/Training_active.svg";
import Trainer_inactive from "../../../assets/SVG/Training Icon.svg";

import Schedule_active from "../../../assets/SVG/Schedule_slot_active.svg";
import Schedule_inactive from "../../../assets/SVG/Schedule Slot Icon.svg";
import Arrow_inactive from "../../../assets/SVG/Arrow_active.svg";
import Arrow_active from "../../../assets/SVG/Arrow 1.svg";

const TrainerTracker = () => {
  // console.log(this.props.location)

  const log = () => {
    console.log("hihi", window.location.pathname);
  };

  log();

  let PeopleBarIcon;
  let TrainerBarIcon;
  let ScheduleBarIcon;
  let Arrow_one;
  let Arrow_two;

  //PeopleBarIcon
  if (window.location.pathname === "/aboutTrainer") {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_inactive} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_inactive} alt="icon" />;
    Arrow_one =  <img src={Arrow_inactive} alt="icon" />;
    Arrow_two = <img src={Arrow_inactive} alt="icon" />;
  }

  //TrainerBarIcon
  if (window.location.pathname === "/trainerbackground") {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_active} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_inactive} alt="icon" />;
    Arrow_one =  <img src={Arrow_active} alt="icon" />;
    Arrow_two = <img src={Arrow_inactive} alt="icon" />;
  }

  //ScheduleBarIcon
  if (window.location.pathname === "/trainer-avaliability") {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_active} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_active} alt="icon" />;
     Arrow_one =  <img src={Arrow_active} alt="icon" />;
    Arrow_two = <img src={Arrow_active} alt="icon" />;
  }

  return (
    <>
      <div className="tracker_main">
        <div className="wrapper_item">
          <div className="items">
            {PeopleBarIcon}
            <p activeClassName="active">About you</p>
          </div>
          {/* <img src={Arrow1} alt="icon" /> */}
          {Arrow_one}
          <div className="items">
            {TrainerBarIcon}
            <p activeClassName="active">Training background</p>
          </div>
          {/* <img src={Arrow1} alt="icon" /> */}
          {Arrow_two}
          <div className="items">
            {ScheduleBarIcon}
            <p activeClassName="active">Avaliability</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerTracker;
