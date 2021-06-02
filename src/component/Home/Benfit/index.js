import React from "react";
import "./styles.scss";
import Personal from "../../../assets/files/Home/Benfit/Icon 1.svg";
import Session from "../../../assets/files/Home/Benfit/Icon 3.svg";
import Social from "../../../assets/files/Home/Benfit/Date Social.svg";
const benifitList = [
  {
    heading: "Keep it Personal with a 1 on 1",
    description:
      "Train individually with a top trainer for the highest quality of training and a personalized experience.",
    imageAsset: Personal,
  },
  {
    heading: "Make a Date as a Social Session",
    description:
      "Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs.",
    imageAsset: Social,
  },
  {
    heading: "Create a class",
    description:
      "Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly.",
    imageAsset: Session,
  },
];
const Benifet = () => {
  return (
    <div className="content">
      <div className="smallContainer container">
        {benifitList.map((list, index) => {
          return (
            <div className="personal" key={index}>
              <div className="personal_img">
                <img src={list.imageAsset} alt="logo" />
              </div>
              <h2 className="personal_heading">{list.heading}</h2>
              <p className="personal_description">{list.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benifet;
