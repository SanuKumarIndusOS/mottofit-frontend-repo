import React from "react";
import "./styles.scss";

// Component imports
import TrainerCard from "component/common/TrainerCard/index";

// TODO
// 1. Seperate component for view more trainers/sessions button

function BestMatch() {
  return (
    <div className="best-match-container">
      <div className="trainer-card__grid">
        <TrainerCard />
        <TrainerCard />
        <TrainerCard />

        <TrainerCard />
        <TrainerCard />
        <TrainerCard />

        <TrainerCard />
        <TrainerCard />
        <TrainerCard />
      </div>

      <div className="view-more-trainer-container">
        <div className="view-more-trainer__cta"> View More Trainers</div>
      </div>
    </div>
  );
}

export default BestMatch;
