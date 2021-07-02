import React from "react";
import "./styles.scss";
import ScheduleIcon from "../../../assets/files/UserOnboard/UserTrackerAssets/Schedule Slot Icon.svg";
import Session from "../../../assets/files/UserOnboard/UserTrackerAssets/Book Session Icon.svg";
import SessionActive from "../../../assets/files/UserOnboard/UserTrackerAssets/Book Session Icon Active.svg";
import Motto from "../../../assets/files/UserOnboard/UserTrackerAssets/Motto Pass Icon.svg";
import MottoActive from "../../../assets/files/UserOnboard/UserTrackerAssets/Motto Pass Icon Active.svg";
import Payment from "../../../assets/files/UserOnboard/UserTrackerAssets/Payment Icon.svg";
import PaymentActive from "../../../assets/files/UserOnboard/UserTrackerAssets/Payment Icon Active.svg";
import ArrowActive from "../../../assets/files/UserOnboard/UserTrackerAssets/Arrow Active.svg";
import ArrowInActive from "../../../assets/files/UserOnboard/UserTrackerAssets/Arrow InActive.svg";
import { history } from "helpers";

const UserTracker = () => {
  let ScheduleIconBar;
  let SessionIconBar;
  let MottoIconBar;
  let PaymentIconBar;
  let ArrowOne;
  let ArrowTwo;
  let ArrowThree;
  let ScheduleText;
  let SessionText;
  let MottoText;
  let PaymentText;

  let Icon_mobile;
  let Icon_text;
  // let Prev_mobile;
  // let Next_mobile;

  // ScheduleBarIcon
  if (window.location.pathname.includes("/user/scheduler")) {
    ScheduleIconBar = <img src={ScheduleIcon} alt="icon" />;
    SessionIconBar = <img src={Session} alt="icon" />;
    MottoIconBar = <img src={Motto} alt="icon" />;
    PaymentIconBar = <img src={Payment} alt="icon" />;
    ArrowOne = <img src={ArrowActive} alt="icon" />;
    ArrowTwo = <img src={ArrowInActive} alt="icon" />;
    ArrowThree = <img src={ArrowInActive} alt="icon" />;
    ScheduleText = <p className="active">Schedule your slot</p>;
    SessionText = <p className="inactive">Book Your Slot</p>;
    MottoText = <p className="inactive">Get a motto pass</p>;
    PaymentText = <p className="inactive">Make a Payment</p>;

    Icon_mobile = <img src={ScheduleIcon} alt="icon" />;
    Icon_text = <p className="active">Schedule your slot</p>;
   
    // Prev_mobile = <div className="tracker_prev_mobile">&lt;</div>;
    // Next_mobile = <div className="tracker_next_mobile">&gt;</div>;
  }

  // SessionBar

  if (window.location.pathname.includes("/user/session-type")) {
    ScheduleIconBar = <img src={ScheduleIcon} alt="icon" />;
    SessionIconBar = <img src={SessionActive} alt="icon" />;
    MottoIconBar = <img src={Motto} alt="icon" />;
    PaymentIconBar = <img src={Payment} alt="icon" />;
    ArrowOne = <img src={ArrowActive} alt="icon" />;
    ArrowTwo = <img src={ArrowInActive} alt="icon" />;
    ArrowThree = <img src={ArrowInActive} alt="icon" />;

    ScheduleText = <p className="active">Schedule your slot</p>;
    SessionText = <p className="active">Book Your Slot</p>;
    MottoText = <p className="inactive">Get a motto pass</p>;
    PaymentText = <p className="inactive">Make a Payment</p>;

    Icon_mobile = <img src={SessionActive} alt="icon" />;
    Icon_text = <p className="active">Book Your Slot</p>;

    // Prev_mobile = <div className="tracker_prev_mobile" onClick={()=>{history.push("/user/scheduler")}}>&lt;</div>;
    // Next_mobile = <div className="tracker_next_mobile">&gt;</div>;
  }

  if (window.location.pathname.includes("/user/motto-pass")) {
    ScheduleIconBar = <img src={ScheduleIcon} alt="icon" />;
    SessionIconBar = <img src={SessionActive} alt="icon" />;
    MottoIconBar = <img src={MottoActive} alt="icon" />;
    PaymentIconBar = <img src={Payment} alt="icon" />;
    ArrowOne = <img src={ArrowActive} alt="icon" />;
    ArrowTwo = <img src={ArrowActive} alt="icon" />;
    ArrowThree = <img src={ArrowInActive} alt="icon" />;
    ScheduleText = <p className="active">Schedule your slot</p>;
    SessionText = <p className="active">Book Your Slot</p>;
    MottoText = <p className="active">Get a motto pass</p>;
    PaymentText = <p className="inactive">Make a Payment</p>;

    Icon_mobile = <img src={MottoIconBar} alt="icon" />;
    Icon_text = <p className="active">Get a motto pass</p>;

    // Prev_mobile = <div className="tracker_prev_mobile" onClick={()=>{history.push("/user/session-type")}}>&lt;</div>;
    // Next_mobile = <div className="tracker_next_mobile">&gt;</div>;
  }

  if (window.location.pathname.includes("/user/payment")) {
    ScheduleIconBar = <img src={ScheduleIcon} alt="icon" />;
    SessionIconBar = <img src={SessionActive} alt="icon" />;
    MottoIconBar = <img src={MottoActive} alt="icon" />;
    PaymentIconBar = <img src={PaymentActive} alt="icon" />;
    ArrowOne = <img src={ArrowActive} alt="icon" />;
    ArrowTwo = <img src={ArrowActive} alt="icon" />;
    ArrowThree = <img src={ArrowActive} alt="icon" />;
    ScheduleText = <p className="active">Schedule your slot</p>;
    SessionText = <p className="active">Book Your Slot</p>;
    MottoText = <p className="active">Get a motto pass</p>;
    PaymentText = <p className="active">Make a Payment</p>;

    Icon_mobile = <img src={PaymentActive} alt="icon" />;
    Icon_text = <p className="active">Make a Payment</p>;

    // Prev_mobile = <div className="tracker_prev_mobile" onClick={()=>{history.push("/user/session-type")}}>&lt;</div>;
    // Next_mobile = <div className="tracker_next_mobile" >&gt;</div>;
  }

  return (
    <>
      <div className="tracker_main">
        <div className="wrapper_item container">
          <div className="items">
            {ScheduleIconBar}
            {ScheduleText}
          </div>
          {ArrowOne}
          <div className="items">
            {SessionIconBar} {SessionText}
          </div>
          {ArrowTwo}

          <div className="items">
            {MottoIconBar} {MottoText}
          </div>
          {ArrowThree}

          <div className="items">
            {PaymentIconBar} {PaymentText}
          </div>
        </div>
      </div>

      <div className="tracker_mobile">
        {/* {Prev_mobile} */}
        <div className="tracker_content_mobile">
          <div className="tracker_icon">{Icon_mobile}</div>
          <div className="tracker_text">{Icon_text}</div>
          <div className="tracker_step"></div>
        </div>
        {/* {Next_mobile} */}
      </div>
    </>
  );
};
export default UserTracker;
