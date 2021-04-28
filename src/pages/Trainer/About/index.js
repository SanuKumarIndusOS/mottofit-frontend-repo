import React from "react";
import TrainerTracker from "component/TrainerOnBoard/CommonTrackerBar";
import AboutTrainer from "component/TrainerOnBoard/TrainerAboutYou";

const AboutTrainerSection = () => {
  return (
    <div>
      <TrainerTracker />
      <AboutTrainer />
    </div>
  );
};

export default AboutTrainerSection;
