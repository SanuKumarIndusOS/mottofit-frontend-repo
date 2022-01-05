import React, { useState } from "react";

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
import ArrowHoverBlacked from "../BlackCircleButton/ArrowHoverBlacked";
import { Button } from "reactstrap";
import { history } from "helpers";

import { updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const MottoPassCard = ({
  updateUserDetails,
  data,
  className = "",
  isAdminView = false,
  isUserView = false,
  handleClick = () => {},
  requestTrainerAct = () => {},
}) => {
  const {
    totalPassCount,
    price,
    expiresIn,
    passType,
    trainer,
    remains,
    user,
    trainerId,
  } = data || {};

  const [isLoading, setLoading] = useState(false);

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

  let userFullName = isAdminView
    ? `with ${user?.firstName || ""} ${user?.lastName || ""}`
    : "";

  let adminPropValue = {};

  if (isAdminView) {
    adminPropValue["onClick"] = handleClick;
  }

  const handleUserViewRoute = (type) => {
    if (type === "session") {
      var storedata = {
        sessionData: {
          trainerId: trainerId,
          city: null,
          sessionType: passType === "virtual" ? "virtual" : "inPerson",
          venue: passType === "virtual" ? "clientLocation" : passType,
          trainingType: "1on1",
          price: null,
          areaOfExpertise: "Motto Session",
        },
      };

      updateUserDetails(storedata);
      return history.push(`/user/scheduler/${trainerId}`);

      console.log(data);
    } else if (type === "message") {
      return handleRequestTrainer();
    }
  };

  const handleRequestTrainer = () => {
    requestTrainerAct(trainerId, (data) => setLoading(data));
  };

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
        } ${trainer?.lastName || ""} ${userFullName}`}</h1>{" "}
        <br></br>
        <p>
          {parseInt(remains)} out of {totalPassCount} passes remaining
        </p>
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
      {isUserView && (
        <div className="user-view-content d-flex align-items-center justify-content-between px-3 pb-4 flex-wrap">
          <button
            color="primary"
            className="pass-button"
            onClick={() => handleUserViewRoute("session")}
          >
            Book Session
          </button>
          <button
            color="primary"
            outline
            className="text-capitalize pass-button"
            onClick={() => handleUserViewRoute("message")}
            disabled={isLoading}
          >
            {!isLoading ? (
              <>{`Message ${trainer?.firstName || ""}`}</>
            ) : (
              "Loading..."
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
    },
    dispatch
  );
};

const MottoPassCardT = connect(
  mapStateToProps,
  mapDispatchToProps
)(MottoPassCard);

export default MottoPassCardT;

// export { MottoPassCard };
