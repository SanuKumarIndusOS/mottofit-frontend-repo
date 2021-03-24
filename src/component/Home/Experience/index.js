import React, { Component } from "react";
import "./styles.scss";
import strength_img from "../../../assests/Home/Experience/Strength & HIIT Image.png";
import boxing_img from "../../../assests/Home/Experience/Boxing Image.png";
import yoga_img from "../../../assests/Home/Experience/Yoga Image.png";
import pilates_img from "../../../assests/Home/Experience/Pilates Image.png";
import svgBG from "../../../assests/Home/Experience/Oval Stamp.png";
import Icon1 from "../../../assests/Home/Experience/icon/Icon1.png";
import Icon2 from "../../../assests/Home/Experience/icon/Icon2.png";
import Icon3 from "../../../assests/Home/Experience/icon/Icon3.png";
import Icon4 from "../../../assests/Home/Experience/icon/Icon4.png";
import Icon5 from "../../../assests/Home/Experience/icon/Icon5.png";
import Icon6 from "../../../assests/Home/Experience/icon/Icon6.png";
import ArrowIcon from "../../../assests/Home/Experience/icon/arrow-icon.png";
import Arrow from "../../../assests/Home/Experience/icon/arrow-orignal.png";
import { Link } from "react-router-dom";

export default class Experience extends Component {

    render(props) {
    
        return (
            <div className="big_container container">
                <div className="experience_upper_container">
                    <div className="heading">
                        Experience the Best Training in these Categories
                    </div>
                    <div className="image_Container">
                        <div className="image_strength_main">
                            <img src={strength_img} alt={this.props.description} />
                            <Link to='/' className='link_button'>Strength & hiit <img src={ArrowIcon} alt='icons'/> </Link>
                        </div>
                        <div className="image_strength_main">
                            <img src={boxing_img} alt={this.props.description} />
                            <Link to='/' className='link_button'>Boxing <img src={ArrowIcon} alt='icons'/> </Link>

                        </div>
                        <div className="image_strength_main">
                            <img src={yoga_img} alt={this.props.description} />
                            <Link to='/' className='link_button'>Yoga <img src={ArrowIcon} alt='icons'/> </Link>

                        </div>
                        <div className="image_strength_main">
                            <img src={pilates_img} alt={this.props.description} />
                            <Link to='/' className='link_button' >Pilates <img src={ArrowIcon} alt='icons'/> </Link>
                        </div>
                        <img src={svgBG}  className='svgBG' alt='svg'/>
                    </div>
                </div>
                {/* ------------------------------------personal--------------- */}

                <div className="personal_container container">
                    <div className="personal_trainer_description">
                        <h2 className="heading">
                            The Top Personal
                            Trainer Marketplace
                        </h2>
                        <p className="discription">
                            Your personal trainer marketplace for Strength{" "}
                            & HIIT, Boxing, Yoga & Pilates. Train
                            virtually from anywhere or locally in Motto
                            markets.
                        </p>
                        <div className="link">
                            <div className="button-text">
                                <Link to="/">APPLY AS A TRAINER</Link>
                            </div>
                            <div className="button-custom">
                                <img src={Arrow} alt="icon" srcSet="" />
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
        );
    }
}
const ExperienceParent = (props) => {
    return (
        <>
            <div className="flex-contents">
                <div className="image">
                    <img src={props.icon} alt='icon' />
                </div>
                <p className="discription">{props.description}</p>
            </div>
        </>
    );
};
