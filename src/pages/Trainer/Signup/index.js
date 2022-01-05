import React from "react";
import BannerTrainer from "component/TrainerSignUp/Banner";
import ExperienceTrainer from "component/TrainerSignUp/Experience";
import LocationTrainer from "component/TrainerSignUp/LocationTrainer";

const TrainerSignup = () => {
  return (
    <div>
      <BannerTrainer />
      <ExperienceTrainer />
      <LocationTrainer />
    </div>
  );
};

export default TrainerSignup;
