import React from "react";
import "./styles.scss";
import personal_img from "../../../assests/Home/Benfit/personal.png";
import season_img from "../../../assests/Home/Benfit/season.png";
import Benifit from "../../../assests/Home/Benfit/Icon4.png";

const Benifet = () => {
  return (
    <div className="container">
      <div className="smallContainer">
        <div className="personal">
          <div className="personal_img">
            <img src={personal_img} alt="" />
          </div>
          <div className="personal_heading">Keep it Personal with a 1 on 1</div>
          <div className="personal_description">
            Train individually with a top trainer for the highest quality of
            training and a personalized experience.
          </div>
        </div>
        <div className="socialSession">
          <div className="personal_img">
            <img src={Benifit} alt="" />
          </div>
          <div className="social_heading">Make a Date as a Social Session</div>
          <div className="social_description">
            Add up to 3 friends to your session. Get personal attention, while
            you enjoy a social experience at lower costs.
          </div>
        </div>
        <div className="classSession">
          <div className="personal_img">
            <img src={season_img} alt="" />
          </div>
          <div className="class_heading">Keep it Personal with a 1 on 1</div>
          <div className="class_description">
            Train individually with a top trainer for the highest quality of
            training and a personalized experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifet;
