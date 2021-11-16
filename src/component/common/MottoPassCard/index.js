import React from "react";

// Styles
import "./mottopassCard.scss";
import { UserAvatar } from "../UserAvatar";

//icons

import Tick from "assets/files/FindTrainer/Tick 1.svg";
import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";
import DollarIcon from "assets/files/SVG/green_dollar_sign.svg";

//additonal packages
import moment from "moment";

export const MottoPassCard = ({ data }) => {
  const { totalPassCount, price, expiresIn, passType, trainer, remains } = data || {};

  let mottoPassType = "";

  let isExpired = moment(
    moment.tz("America/New_York").format("YYYY MM DD")
  ).isAfter(moment.tz(expiresIn, "America/New_York").format("YYYY MM DD"));

  let expirationDate = moment
    .tz(expiresIn, "America/New_York")
    .format("MMMM Do, YYYY");

  if (passType === "trainerLocation") {
    mottoPassType = "only Trainer's Location";
  } else if (passType === "virtual") {
    mottoPassType = "only Virtual";
  } else {
    mottoPassType = "only Client's Location";
  }

  let userData = {
    userName: `${trainer?.firstName || ""} ${trainer?.lastName || ""}`,
    profilePicture: trainer?.profilePicture,
  };

  let discountedPrice = Math.abs(price / totalPassCount).toFixed(2);

  return (
    <div className="mottopass-card">
      <div className="pass-user-detail d-flex align-items-center flex-column position-relative">
        <div className="pass-user-profilepic position-absolute">
          <UserAvatar className="img-md" {...userData} />
        </div>
        <span className="mottopass-double-ribbon text-uppercase d-flex align-items-center justify-content-center position-relative">
          {`${totalPassCount} Session Package`}
        </span>
      </div>
      <div className="pass-user-name text-center">
        <h1 className="fs-35 mb-4 mt-3 text-capitalize">{`${
          trainer?.firstName || ""
        } ${trainer?.lastName || ""}`}</h1> <br></br>
         <p >{remains} out of {totalPassCount} passes remaining</p>
      </div>
      <div className="mottopass-details d-flex flex-column align-items-start">
        <div className="mottopass-restriction d-flex align-items-start">
          <span>
            <img src={Tick} alt="session icon" />
          </span>
          <p className="fs-15">{`Valid for sessions with ${
            trainer?.firstName || ""
          } ${trainer?.lastName || ""} only`}</p>
        </div>
        <div className="mottopass-type-restriction d-flex align-items-start">
          <span>
            <img src={LocationIcon} alt="location icon" />
          </span>
          <p className="fs-15">{`Valid for ${mottoPassType} Training Sessions`}</p>
        </div>
        <div className="mottopass-expiration d-flex align-items-start">
          <span>
            <img src={AvailabilityIcon} alt="time icon" />
          </span>
          <p className="fs-15">{`${
            !isExpired ? "Valid until " : "Expired on "
          } ${expirationDate}`}</p>
        </div>
        {/* <div className="mottopass-discount-rate d-flex align-items-start">
          <span>
            <img src={DollarIcon} alt="dollar icon" />
          </span>
          <p className="fs-15">
            {` Each session is priced at a discounted rate of $${discountedPrice}/-`}
          </p>
          <br></br>
        
        </div> */}
        {/* <div className="mottopass-discount-rate d-flex align-items-start">
        <p >2 out of 3 passes remaining</p>
        </div> */}
        
      </div>
    </div>
  );
};
