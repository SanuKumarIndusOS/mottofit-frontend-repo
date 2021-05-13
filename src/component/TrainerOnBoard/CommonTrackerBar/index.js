import React from "react";
import "./styles.scss";
import People_active from "../../../assets/files/SVG/Person Icon.svg";
import People_inactive from "../../../assets/files/SVG/Person_2.svg";
import Trainer_active from "../../../assets/files/SVG/Training_active.svg";
import Trainer_inactive from "../../../assets/files/SVG/Training Icon.svg";

import Schedule_active from "../../../assets/files/SVG/Schedule_slot_active.svg";
import Schedule_inactive from "../../../assets/files/SVG/Schedule Slot Icon.svg";
import Arrow_inactive from "../../../assets/files/SVG/Arrow_active.svg";
import Arrow_active from "../../../assets/files/SVG/Arrow 1.svg";

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
  let ABout_you_text;
  let Training_background_text;
  let Availability_text;

  //PeopleBarIcon
  if (window.location.pathname.includes("/about")) {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_inactive} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_inactive} alt="icon" />;
    Arrow_one = <img src={Arrow_inactive} alt="icon" />;
    Arrow_two = <img src={Arrow_inactive} alt="icon" />;
    ABout_you_text = <p className="active">About you</p>;
    Training_background_text = <p className="inactive">Training background</p>;
    Availability_text = <p className="inactive">Availability</p>;
  }

  //TrainerBarIcon
  if (window.location.pathname.includes("/background")) {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_active} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_inactive} alt="icon" />;
    Arrow_one = <img src={Arrow_active} alt="icon" />;
    Arrow_two = <img src={Arrow_inactive} alt="icon" />;
    ABout_you_text = <p className="completed">About you</p>;
    Training_background_text = <p className="active">Training background</p>;
    Availability_text = <p className="inactive">Availability</p>;
  }

  //ScheduleBarIcon
  if (window.location.pathname.includes("/avaliability")) {
    PeopleBarIcon = <img src={People_active} alt="icon" />;
    TrainerBarIcon = <img src={Trainer_active} alt="icon" />;
    ScheduleBarIcon = <img src={Schedule_active} alt="icon" />;
    Arrow_one = <img src={Arrow_active} alt="icon" />;
    Arrow_two = <img src={Arrow_active} alt="icon" />;
    ABout_you_text = <p className="completed">About you</p>;
    Training_background_text = <p className="completed">Training background</p>;
    Availability_text = <p className="active">Availability</p>;
  }

  return (
    <>
      <div className="tracker_main">
        <div className="wrapper_item container">
          <div className="items">
            {PeopleBarIcon}
            {ABout_you_text}
          </div>
          {Arrow_one}
          <div className="items">
            {TrainerBarIcon}
            {Training_background_text}
          </div>
          {Arrow_two}
          <div className="items">
            {ScheduleBarIcon}
            {Availability_text}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerTracker;
