import React, { Component } from "react";
import "./styles.scss";
import Icon1 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 1.svg";
import Icon2 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 2.svg";
import Icon3 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 3.svg";
import Icon4 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 4.svg";
import Icon5 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 5.svg";
import Icon6 from "../../../assets/files/TrainerSignUp/ExperienceTrainer/Icon 6.svg";

export default class ExperienceTrainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="big_container">
          <div className="personal_container_trainer container">
            <div className="personal_trainer_description">
              <h2 className="heading">
                Here is why you should apply to be a Motto Trainer
              </h2>
              <p className="discription">
                Your personal trainer marketplace for Strength & HIIT, Boxing,
                Yoga & Pilates. Train virtually from anywhere or locally in
                Motto markets.
              </p>
            </div>
            <div className="right_container">
              <ExperienceParent
                icon={Icon1}
                description="Be a part of an elite community of trainers to boost your brand"
              />
              <ExperienceParent
                icon={Icon2}
                description="  Get access to a large client network."
              />
              <ExperienceParent
                icon={Icon3}
                description="Maximise your time and earnings by booking 1 on 1 or group sessions "
              />
              <ExperienceParent
                icon={Icon4}
                description="Minimize customer acquisition cost"
              />
              <ExperienceParent
                icon={Icon5}
                description="Get matched with the right clients based on your training expertise"
              />
              <ExperienceParent
                icon={Icon6}
                description="Get access to our trusted partner brands"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ExperienceParent = (props) => {
  return (
    <>
      <div className="flex-contents">
        <div className="image">
          <img src={props.icon} alt="icon" />
        </div>
        <p className="discription">{props.description}</p>
      </div>
    </>
  );
};
