import React, { useState } from "react";
import "./styles.scss";
import Image2 from "../../../assets/files/HowItWorks/Customize/How.jpg";
import svgBG from "../../../assets/files/Home/Experience/Oval Stamp.png";

const accordionData = [
    {
        title: "Top Training Talent! ",
        desc: "Each one of our elite fitness professionals are thoughtfully selected & vetted. Each one of them offers something specialized with their unique training “mottos”, diverse training locations and session sizes.",
    },
    {
        title: "The only in-person & virtual personal trainer marketplace        ",
        desc: "No streaming, no recording. We focus exclusively on personalized training sessions with trainers in real time.",
    },
    {
        title: "Easiest way to book a trainer",
        desc: "Browse and book your ideal session in a matter of clicks. No lengthy questionnaires or sign up process before seeing our trainers and available times. ",
    },
    {
        title: "No subscription fees!",
        desc: "Only pay for the sessions you book. There are no initiation fees, membership fees, or hidden costs. ",
    },
];

const TrainerMotto = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }

        setSelected(index);
    };
    return (
        <>
            <div className="outter_containerWork">
                <div className="container">
                    <div className="motto_main">
                        <div className="motto_grid">
                            <div className="motto_left">
                                <div className="motto_heading">
                                    <h2>
                                        What makes training with Motto
                                        different?
                                    </h2>
                                    {accordionData.map((item, index) => (
                                        <div className="motto_item" key={index}>
                                            <div
                                                className="motto_title"
                                                onClick={() => toggle(index)}
                                            >
                                                <h3>{item.title}</h3>
                                                <div
                                                    className={
                                                        selected === index
                                                            ? "line show"
                                                            : "line"
                                                    }
                                                ></div>
                                            </div>
                                            <div
                                                className={
                                                    selected === index
                                                        ? "motto_contentshow"
                                                        : "motto_content"
                                                }
                                            >
                                                <p>{item.desc}</p>
                                                <div></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="motto_right">
                                <div className="motto_img">
                                    <img src={Image2} alt="image" />
                                </div>
                                <img src={svgBG} alt="icon" className="stamp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerMotto;
