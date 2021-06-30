import React from "react";
import "./styles.scss";
import Tfc from "./Tfc";
const TrainerSchedule = () => {
  return (
    <>
      <div className="container px-0">
        <div className="schedule_main">
          <div className="schedule_heading">
            <h1>My Schedule</h1>
            {/* <div className="dates">
                            <a href="#">Day</a>
                            <a href="#">Week</a>
                            <a href="#">Month</a>
                        </div> */}
          </div>
          <div className="schedule_wrapper">
            <div className="eventCalender">
              <Tfc />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerSchedule;
