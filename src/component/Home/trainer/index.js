import React, { Component } from "react";
import "./styles.scss";

export default class Trainer extends Component {
  render() {
    return (
      <div className="background_container">
        <div className="container_trainer">
          <div className="qustion">
            Are you a trainer interested in joining Motto?
          </div>
          <div className="answer">
            Get access & matched with the right clients based on your expertise.
            Maximize your time and earnings by booking 1-on-1 or group workouts.
            Minimize customer acquisition cost with no upfront or subscription
            fees.
          </div>
          <div className="link">
            <div className="text">APPLY AS A TRAINER</div>
            <div className="button">
              <img src="" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
