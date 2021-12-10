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


export const MottoPassCard = ({ data , className = "", isAdminView = false , handleClick = () => {} }) => {
  const { totalPassCount, price, expiresIn, passType, trainer, remains , user } = data || {};

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

  let userFullName = isAdminView ? `with ${user?.firstName || ""} ${user?.lastName || ""}` : "";

  let adminPropValue = {};

  if(isAdminView){
    adminPropValue["onClick"] = handleClick;
  }

  return (
    <div className={`mottopass-card ${className}`} {...adminPropValue}>
      <div className="pass-user-detail d-flex align-items-center flex-column position-relative">
        <div className="pass-user-profilepic position-absolute">
          <UserAvatar className="img-md" {...userData} />
        </div>
        <span className="mottopass-double-ribbon text-uppercase d-flex align-items-center justify-content-center position-relative">
          {`${totalPassCount} Session Package`}
        </span>
      </div>
      {/* <div className="book-again-container">
      <button className="book-again-cta">Book again</button>
      </div> */}
      <div className="pass-user-name text-center">
        <h1 className="fs-35 mb-4 mt-3 text-capitalize">{`${
          trainer?.firstName || ""
        } ${trainer?.lastName || ""} ${userFullName}`}</h1> <br></br>
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
      </div>
    </div>
  );
};
