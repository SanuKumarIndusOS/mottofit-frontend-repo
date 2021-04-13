import React, { Component } from "react";
import "./styles.scss";
import strength_img from "../../../assets/Home/Experience/Strength & HIIT Image.png";
import boxing_img from "../../../assets/Home/Experience/Boxing Image.png";
import yoga_img from "../../../assets/Home/Experience/Yoga Image.png";
import pilates_img from "../../../assets/Home/Experience/Pilates Image.png";
import svgBG from "../../../assets/Home/Experience/Oval Stamp.png";
import Icon1 from "../../../assets/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assets/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assets/Home/Experience/icon/Icon3.png";
import Icon4 from "../../../assets/Home/Experience/icon/Icon4.png";
import Icon5 from "../../../assets/Home/Experience/icon/Icon5.png";
import Icon6 from "../../../assets/Home/Experience/icon/Icon6.png";
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
                            Experience the Best Training in these Categories
                        </div>
                        <div className="image_Container">
                            <div className="image_strength_main">
                                <img
                                    src={strength_img}
                                    alt={this.props.description}
                                />
                                <Link to="/" className="link_button">
                                    Strength & hiit
                                    <ArrowHoverBlacked />
                                </Link>
                            </div>
                            <div className="image_strength_main">
                                <img
                                    src={boxing_img}
                                    alt={this.props.description}
                                />
                                <Link to="/" className="link_button">
                                    Boxing
                                    <ArrowHoverBlacked />
                                </Link>
                            </div>
                            <div className="image_strength_main">
                                <img
                                    src={yoga_img}
                                    alt={this.props.description}
                                />
                                <Link to="/" className="link_button">
                                    Yoga
                                    <ArrowHoverBlacked />
                                </Link>
                            </div>
                            <div className="image_strength_main">
                                <img
                                    src={pilates_img}
                                    alt={this.props.description}
                                />
                                <Link to="/" className="link_button">
                                    Pilates
                                    <ArrowHoverBlacked />
                                </Link>
                                <img src={svgBG} className="svgBG" alt="svg" />
                            </div>
                            <img
                                src={svgBG}
                                className="svgBGMobile"
                                alt="svg"
                            />
                        </div>
                    </div>
                    {/* ------------------------------------personal--------------- */}

                    <div className="personal_container">
                        <div className="personal_trainer_description">
                            <h2 className="heading">
                                The Top Personal Trainer Marketplace
                            </h2>
                            <p className="discription">
                                Your personal trainer marketplace for Strength &
                                HIIT, Boxing, Yoga & Pilates. Train virtually
                                from anywhere or locally in Motto markets.
                            </p>
                            <div className="link">
                                <div className="button-text">
                                    <Link to="/" className="btn">
                                        Find Your Best Match <BlueHoverButton/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right_container">
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
