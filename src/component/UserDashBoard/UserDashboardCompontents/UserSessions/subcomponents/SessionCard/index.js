import React, { useState } from "react";
import "./styles.scss";

import { history } from "helpers";
import { getFormatDate } from "service/helperFunctions";
import useNameEncoder from "component/common/Hooks/useNameEncoder";
import useWithinTwelveHours from "component/common/Hooks/useWithinTwelveHours";

import AvailabilityIcon from "assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "assets/files/TrainerDashboard/Message/Location Icon.svg";

import Dialog from "@material-ui/core/Dialog";
import moment from "moment";

function SessionCard({ data, activeTab, cancelAction, rescheduleAction }) {
  const [cancelAlert, setcancelAlert] = useState(false);
  const [isReschedule, setIsReschedule] = useState(false);
  const encodedName = useNameEncoder(
    data?.trainerDetail?.firstName,
    data?.trainerDetail?.lastName
  );
  const isWithinTwelveHours = useWithinTwelveHours(data?.sessionStartTime);

  // Change functions
  const handleBookAgain = () => {
    return history.push(
      `/trainer/profile/${data?.trainerDetail?.id}/${encodedName}`
    );
  };

  // Cancel button control
  const handleCancel = () => {
    isWithinTwelveHours ? setcancelAlert(true) : cancelAction(data?.id);
  };

  // Reschedule button control
  const handleReschedule = () => {
    setcancelAlert(true);
    setIsReschedule(true);
  };

  // Dialog open/close control
  const handleCancelAlert = () => {
    setcancelAlert(false);
    setTimeout(() => {
      if (isReschedule) {
        setIsReschedule(false);
      }
    }, 100);
  };

  // Dialog CONTINUE/CANCEL CTA control
  const handleDialogCancel = () => {
    if (isReschedule) {
      cancelAction(data?.id);
      return rescheduleAction(data);
    } else {
      cancelAction(data?.id);
      return setcancelAlert(false);
    }
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
          <div
            className="control--sm border-right--grey"
            onClick={handleReschedule}
          >
            Reschedule
          </div>
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
    <>
      <div className="session-card-container">
        <div className="session-info-container">
          <div className="session-date-box-container">
            <div className="session-date-box">
              <div className="date--bg">{data?.sessionDate?.substr(8, 2)}</div>
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
                <div>
                  {getFormatDate(data.sessionStartTime, "LT", true)} EST
                </div>
              </div>
              <div className="info--sm">
                <img src={LocationIcon} alt="icon" />
                <div>{renderVenueText()}</div>
              </div>
            </div>

            <div className="session__controls">{renderCardControls()}</div>
          </div>
        </div>

        {data?.mottoPass ? (
          <div className="package-info">
            <div className="package-ribbon">Motto Package</div>
            <div className="package-remaining">{data?.mottoPass?.remains} Sessions Remaining</div>
            <div className="package-validity">
              <img src={AvailabilityIcon} alt="icon" /> Valid until{" "}
              {moment(data?.mottoPass?.expiresIn).format("MMMM Do, YYYY")}
            </div>
          </div>
        ) : null}
      </div>

      <Dialog
        onClose={handleCancelAlert}
        aria-labelledby="cancel-dialog"
        open={cancelAlert}
      >
        <div className="cancel-dialog">
          <h3>Alert!</h3>
          <hr />
          {isReschedule ? (
            isWithinTwelveHours ? (
              <div>
                Rescheduling now will cancel your current booking and you will
                incur full cost of that booking as its less than 12 hrs away.
                Would you like to continue?
              </div>
            ) : (
              <div>
                Your booking will be cancelled. You can pick a new time. Would
                you like to continue?
              </div>
            )
          ) : (
            <div>
              Your trainer has already set aside this time for you, so you will
              be charged fully for cancellations less than 12 hrs before a
              session. Proceed with cancelling?
            </div>
          )}

          <hr />
          <div>
            {isReschedule ? (
              <button
                className="cancel-dialog__button button--blue"
                onClick={handleDialogCancel}
              >
                Continue
              </button>
            ) : (
              <button
                className="cancel-dialog__button button--red"
                onClick={handleDialogCancel}
              >
                Cancel
              </button>
            )}

            <button
              className="cancel-dialog__button"
              onClick={handleCancelAlert}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default SessionCard;
