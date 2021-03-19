import React, { Component } from "react";
import "./styles.scss";
import strength_img from "../../../assests/Home/Experience/Strength.png";
import boxing_img from "../../../assests/Home/Experience/Boxing.png";
import yoga_img from "../../../assests/Home/Experience/Yoga.png";
import pilates_img from "../../../assests/Home/Experience/Pilates.png";
import Icon1 from "../../../assests/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assests/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assests/Home/Experience/icon/Icon3.png";
import Icon4 from "../../../assests/Home/Experience/icon/Icon4.png";
import Icon5 from "../../../assests/Home/Experience/icon/Icon5.png";
import Icon6 from "../../../assests/Home/Experience/icon/Icon6.png";
import { Link } from "react-router-dom";
import Circle from "../../../assests/SVG/circle.png";
import Arrow from "../../../assests/SVG/arrow.png";

export default class Experience extends Component {
  render() {
    return (
      <div className="big_container">
        <div className="experience_upper_container">
          <div className="heading">
            Experience the Best Training in <br /> these Categories
          </div>
          <div className="image_Container">
            <div className="image_strength_main">
              <img src={strength_img} alt="" />
            </div>
            <div className="image_strength_main">
              <img src={boxing_img} alt="" />
            </div>
            <div className="image_strength_main">
              <img src={yoga_img} alt="" />
            </div>
            <div className="image_strength_main">
              <img src={pilates_img} alt="" />
            </div>
          </div>
        </div>
        {/* ------------------------------------personal--------------- */}

        <div className="personal_container">
          <div className="personal_trainer_description">
            <div className="heading">
              The Top Personal <br />
              Trainer Marketplace
            </div>
            <div className="discription">
              Your personal trainer marketplace for Strength <br />& HIIT,
              Boxing, Yoga & Pilates. Train virtually <br /> from anywhere or
              locally in Motto markets.
            </div>
            <div className="link">
                        <div className='button-text'>
                            <Link to="/">APPLY AS A TRAINER</Link>
                        </div>
                        <div className="button-custom">
                            <img src={Arrow} alt="" srcSet="" />
                            <img src={Circle} alt="" srcSet="" />
                        </div>
                    </div>
          </div>
          <div className="personal_trainer_props_2">
            <div className="icon_1">
              <div className="image">
                <img src={Icon1} alt="" />
              </div>
              <div className="discription">
                Discover only the top <br />
                training talent
              </div>
            </div>
            <div className="icon_2">
              <div className="image">
                <img src={Icon2} alt="" />
              </div>
              <div className="discription">
                Personalized sessions to <br /> meet specific goals
              </div>
            </div>
            <div className="icon_3">
              <div className="image">
                <img src={Icon3} alt="" />
              </div>
              <div className="discription">
                Easy booking method & <br /> secure transactions
              </div>
            </div>
          </div>
          <div className="personal_trainer_props_3">
            <div className="icon_1">
              <div className="image">
                <img src={Icon4} alt="" />
              </div>
              <div className="discription">
                A community of vetted <br /> personal trainers
              </div>
            </div>
            <div className="icon_2">
              <div className="image">
                <img src={Icon5} alt="" />
              </div>
              <div className="discription">
                Save with cost-efficient <br />
                social & group sessions
              </div>
            </div>
            <div className="icon_1">
              <div className="image">
                <img src={Icon6} alt="" />
              </div>
              <div className="discription">
                Contactless & virtual <br />
                training available
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
