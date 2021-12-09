import React from "react";
import "./styles.scss";

import { getFormatDate } from "service/helperFunctions";
import useNameEncoder from "component/common/Hooks/useNameEncoder";

import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";

import { history } from "helpers";

function SessionCard({ data, activeTab, cancelAction }) {
  const encodedName = useNameEncoder(
    data?.trainerDetail?.firstName,
    data?.trainerDetail?.lastName
  );

  // Change functions
  const handleBookAgain = () => {
    return history.push(
      `/trainer/profile/${data?.trainerDetail?.id}/${encodedName}`
    );
  };

  const handleCancel = () => {
        cancelAction(data?.id);
  };

  // Render functions
  const renderVenueText = () => {
    return data?.sessionType === "virtual"
      ? "Virtual"
      : data?.venue === "clientLocation"
      ? "My Location"
      : "The Trainer's Gym";
  };

  const renderCardControls = () => {
    if (activeTab === "upcoming") {
      return (
        <>
          <div className="control--sm border-right--grey">Reschedule</div>
          <div className="control--sm" onClick={handleCancel}>
            Cancel
          </div>
        </>
      );
    }

    if (activeTab === "previous") {
      return (
        <>
          <div
            className="control--sm border-right--grey"
            onClick={handleBookAgain}
          >
            Book Again
          </div>
          <div className="control--sm txt--red">{data?.sessionStatus}</div>
        </>
      );
    }

    if (activeTab === "invited") {
      return (
        <>
          <div className="control--sm border-right--grey">Expired Session</div>
          <div className="control--sm">View Trainer</div>
        </>
      );
    }
  };

  return (
    <div className="session-card-container">
      <div className="session-info-container">
        <div className="session-date-box-container">
          <div className="session-date-box">
            <div className="date--bg">{data?.sessionDate.substr(8, 2)}</div>
            <div className="month--bg">FEB</div>
          </div>
        </div>

        <div className="session-info-content">
          <div className="session__title">
            <span> {data?.title} </span>with{" "}
            <span> {data?.trainerDetail?.firstName}</span>
          </div>

          <div className="session__secondary-info">
            <div className="info--sm">
              <img src={AvailabilityIcon} alt="icon" />
              <div> {getFormatDate(data.sessionStartTime, "LT", true)} EST</div>
            </div>
            <div className="info--sm">
              <img src={LocationIcon} alt="icon" />
              <div>{renderVenueText()}</div>
            </div>
          </div>

          <div className="session__controls">{renderCardControls()}</div>
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
