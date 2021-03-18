import React from "react";
import "./styles.scss";
import NYC from "../../../assests/Home/Location/NYC.png";
import right from "../../../assests/Home/Location/right.png";
import left from "../../../assests/Home/Location/left.png";

const Location = () => {
  return (
    <div className="container">
      <div className="content_container">
        <div className="header">Browse by Location</div>
        <div className="discription">
          In-Person training available in New York City, Hamptons & Miami, with
          more <br /> locations coming soon. Live virtual training available
          anywhere!
        </div>
      </div>

      <div className="image_element_container">
        <div className="left_button">
          <img src={left} alt="" srcset="" />
        </div>
        <div className="image_container">
          <div className="image_location">
            <img src={NYC} alt="" />
          </div>
          <div className="image_title">New York City</div>
        </div>
        <div className="image_container">
          <div className="image_location">
            <img src={NYC} alt="" />
          </div>
          <div className="image_title">New York City</div>
        </div>
        <div className="image_container">
          <div className="image_location">
            <img src={NYC} alt="" />
          </div>
          <div className="image_title">New York City</div>
        </div>
        <div className="right_button">
          <img src={right} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Location;
