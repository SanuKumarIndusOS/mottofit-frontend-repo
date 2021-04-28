import React from "react";
import "./styles.scss";
import Image1 from "../../../assets/files/HowItWorks/Customize/Image 1.png";
import Image2 from "../../../assets/files/HowItWorks/Customize/Image 3.png";

const CustomizesSection = () => {
  return (
    <>
      <div className="container">
        <div className="cust_main">
          <div className="cust_headings">
            <h2>Customize your workout</h2>
            <p>
              Book a training session for Strength & HIIT, Boxing, Yoga &
              Pilates. Train virtually from anywhere or in-person in Motto
              cities.
            </p>
          </div>
          <div className="cust_wrapper">
            <div className="cust_cards">
              <RenderCards
                image={Image1}
                title="Keep it Personal with a 1 on 1"
                detials="Train individually with a top trainer for the highest quality of training and a personalized experience."
              />
              <RenderCards
                image={Image2}
                title="Make a Date as a Social Session"
                detials="Add up to 3 friends to your session. Get personal attention, while you enjoy a social experience at lower costs."
              />
              <RenderCards
                image={Image1}
                title="Create a Class"
                detials="Design your very own workout party. Choose a top trainer, and add up to 14 more friends to split the cost evenly."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const RenderCards = (props) => {
  return (
    <>
      <div className="cust_cards_inner">
        <img src={props.image} alt="picture" />
        <h4>{props.title}</h4>
        <p>{props.detials}</p>
      </div>
    </>
  );
};

export default CustomizesSection;
