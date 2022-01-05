import React from "react";
import TrainerTracker from "component/TrainerOnBoard/CommonTrackerBar";
import TrainerBackground from "component/TrainerOnBoard/TrainerBackground";

const TrainerBackgroundSection = (props) => {
  return (
    <div>
      <TrainerTracker />
      <TrainerBackground {...props} />
    </div>
  );
};

export default TrainerBackgroundSection;
