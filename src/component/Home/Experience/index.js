import React, { Component } from "react";
import "./styles.scss";
import strength_img from "../../../assets/files/Home/Experience/Strength & HIIT Image.png";
import boxing_img from "../../../assets/files/Home/Experience/Boxing Image.png";
import yoga_img from "../../../assets/files/Home/Experience/Yoga Image.png";
import pilates_img from "../../../assets/files/Home/Experience/Pilates Image.png";
import svgBG from "../../../assets/files/Home/Experience/Oval Stamp.png";
import Icon1 from "../../../assets/files/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assets/files/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assets/files/Home/Experience/icon/Icon3.png";
import Icon4 from "../../../assets/files/Home/Experience/icon/Icon4.png";
import Icon5 from "../../../assets/files/Home/Experience/icon/Icon5.png";
import Icon6 from "../../../assets/files/Home/Experience/icon/Icon6.png";
import { Link } from "react-router-dom";
import ArrowHoverBlacked from "../../common/BlackCircleButton/ArrowHoverBlacked";
import BlueHoverButton from "../../common/BlueArrowButton";

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
        <div className="big_container">
          <div className="experience_upper_container">
            <div className="heading">
              Experience the Best Training in <br /> these Categories
            </div>
            <div className="image_Container">
              <div className="image_strength_main">
                <img src={strength_img} alt="image" />
                <Link to="/" className="link_button">
                  Strength
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main">
                <img src={boxing_img} alt="image" />
                <Link to="/" className="link_button">
                  Boxing
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main">
                <img src={yoga_img} alt="image" />
                <Link to="/" className="link_button">
                  Yoga
                  <ArrowHoverBlacked />
                </Link>
              </div>
              <div className="image_strength_main">
                <img src={pilates_img} alt="image" />
                <Link to="/" className="link_button">
                  Pilates
                  <ArrowHoverBlacked />
                </Link>
                <img src={svgBG} className="svgBG" alt="svg" />
              </div>
              <img src={svgBG} className="svgBGMobile" alt="svg" />
            </div>

            <div className="image_container_mobile">
              <div className="row">
                <div className="vertical">
                  <img src={strength_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>STRENGTH</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
                <div className="vertical">
                  <img src={boxing_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>BOXING</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="vertical">
                  <img src={yoga_img} alt="image" />
                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>YOGA</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
                <div className="vertical">
                  <img src={pilates_img} alt="image" />

                  <div className="bottom_bar">
                    <div style={{ flex: "5" }}>PILATES</div>{" "}
                    <div style={{ flex: "1" }}>&#10141;</div>
                  </div>
                </div>
              </div>
              <div className="monogram"><img src={svgBG} className="svgBGMobile" alt="svg" /></div>
            </div>
          </div>
          {/* ------------------------------------personal--------------- */}

          <div className="personal_container">
            <div className="personal_trainer_description">
              <h2 className="heading">The Top Personal Trainer Marketplace</h2>
              <p className="discription">
                Your personal trainer marketplace for Strength & HIIT, Boxing,
                Yoga & Pilates. Train virtually from anywhere or locally in
                Motto markets.
              </p>
              <div className="link">
                <div className="button-text">
                  <Link to="/trainer/find" className="btn">
                    Find Your Best Match <BlueHoverButton />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_container_home">
              <ExperienceParent
                icon={Icon1}
                description="Discover only the top training talent"
              />
              <ExperienceParent
                icon={Icon4}
                description="A community of vetted personal trainers"
              />
              <ExperienceParent
                icon={Icon2}
                description="Personalized sessions to meet specific goals"
              />
              <ExperienceParent
                icon={Icon5}
                description="Save with cost-efficient social & group sessions "
              />
              <ExperienceParent
                icon={Icon3}
                description="Easy booking method & secure transactions "
              />
              <ExperienceParent
                icon={Icon6}
                description="Contactless & virtual training available"
              />

              <Link to="/trainer/find" className="btn find_your_trainer">
                Find Your Best Match <BlueHoverButton />
              </Link>
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
        <p className="discription_home">{props.description}</p>
      </div>
    </>
  );
};
