import React from "react";
import "./styles.scss";

import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";

function SessionCard() {
  return (
    <div className="session-card-container">
      <div className="session-info-container">
        <div className="session-date-box-container">
          <div className="session-date-box">
            <div className="date--bg">16</div>
            <div className="month--bg">FEB</div>
          </div>
        </div>
        <div className="session-info-content">
          <div className="session__title">Motto Session with Heena</div>
          <div className="session__secondary-info">
            <div className="info--sm">
              <img src={AvailabilityIcon} alt="icon" />
               <div>4:00 AM EST</div>
            </div>
            <div className="info--sm">
            <img src={LocationIcon} alt="icon" />
            <div>Virtual</div>
            </div>
          </div>
          <div className="session__controls"></div>
        </div>
      </div>

      <div className="package-info">
        <div className="package-ribbon"></div>
        <div className="package-remaining"></div>
        <div className="package-validity"></div>
      </div>
    </div>
  );
}

export default SessionCard;
