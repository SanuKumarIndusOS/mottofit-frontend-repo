import React from "react";
import "./styles.scss";

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
          <div className="session__secondary-info"></div>
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
