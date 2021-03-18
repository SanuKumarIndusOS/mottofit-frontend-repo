import React from "react";
import "./style.scss";
import SearchButton from "../../../assests/Home/Banner/Search Button.png";
const Banner = () => {
  return (
    <div className="background">
      <div className="cntr_cotainer">
        <div className="heading_txt">Train with the Best</div>
        <div className="sub_heading_txt">
          Discover & book trusted personal trainers for
          <br />
          Strength & HIIT, Boxing, Yoga & Pilates
        </div>
        <div className="search-box">
          <div className="inner-choice-1">Location</div>
          <div className="inner-choice-2">|</div>

          <div className="inner-choice">Training Type</div>
          <div className="inner-choice-2">|</div>

          <div className="inner-choice">Schedule</div>
          <div className="inner-choice-2">|</div>

          <div className="inner-choice">Availability</div>
          <div className="inner-choice">
            <img src={SearchButton} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
