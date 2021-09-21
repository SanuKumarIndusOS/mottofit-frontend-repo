import React from "react";

// Styles
import "./mottopassCard.scss";
import { UserAvatar } from "../UserAvatar";

//icons

import Tick from "assets/files/FindTrainer/Tick 1.svg";
import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";
import DollarIcon from "assets/files/SVG/dollar Icon.svg";

export const MottoPassCard = () => {
  return (
    <div className="mottopass-card">
      <div className="pass-user-detail d-flex align-items-center flex-column position-relative">
        <div className="pass-user-profilepic position-absolute">
          <UserAvatar className="img-md" />
        </div>
        <span className="mottopass-double-ribbon text-uppercase d-flex align-items-center justify-content-center position-relative">
          3 Session Pass
        </span>
      </div>
      <div className="pass-user-name text-center">
        <h1 className="fs-35 mb-4 mt-3">John Doe</h1>
      </div>
      <div className="mottopass-details d-flex flex-column align-items-start">
        <div className="mottopass-restriction d-flex align-items-center">
          <img src={Tick} alt="session icon" />
          <p className="fs-15">Valid for sessions with John Doe only</p>
        </div>
        <div className="mottopass-type-restriction d-flex align-items-center">
          <img src={LocationIcon} alt="location icon" />
          <p className="fs-15">Valid for only Virtual Training Sessions</p>
        </div>
        <div className="mottopass-expiration d-flex align-items-center">
          <img src={AvailabilityIcon} alt="time icon" />
          <p className="fs-15">Valid until March 12th, 2021</p>
        </div>
        <div className="mottopass-discount-rate d-flex align-items-start">
          <img src={DollarIcon} alt="dollar icon" />
          <p className="fs-15">
            Each session is priced at a discounted rate of $90/-
          </p>
        </div>
      </div>
    </div>
  );
};
