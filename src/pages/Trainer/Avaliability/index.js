import React from "react";
import TrainerTracker from "component/TrainerOnBoard/CommonTrackerBar";
import AboutTrainer from "component/TrainerOnBoard/TrainerAboutYou";
import TrainerAvailability from "component/TrainerOnBoard/TrainerAvailability";

const TrainerAvaliabilitySection = () => {
  return (
    <div>
      <TrainerTracker />
      <TrainerAvailability />
    </div>
  );
};

export default TrainerAvaliabilitySection;
