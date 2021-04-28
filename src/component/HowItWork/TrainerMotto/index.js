import React, { useState } from "react";
import "./styles.scss";
import Image2 from "../../../assets/files/HowItWorks/Customize/Image 3.png";
import svgBG from "../../../assets/files/Home/Experience/Oval Stamp.png";

const accordionData = [
  {
    title: "We find you the top training talent!",
    desc:
      "Each one of our elite fitness professionals are thoughtfully selected & vetted. Each one of them offers something specialized with their unique training “mottos”, diverse training locations and session sizes.",
  },
  {
    title: "A unique personal trainer marketplace.",
    desc:
      "Each one of our elite fitness professionals are thoughtfully selected & vetted. Each one of them offers something specialized with their unique training “mottos”, diverse training locations and session sizes.",
  },
  {
    title: "We make it easy to book a trainer.",
    desc:
      "Each one of our elite fitness professionals are thoughtfully selected & vetted. Each one of them offers something specialized with their unique training “mottos”, diverse training locations and session sizes.",
  },
  {
    title: "No need to pay a subscription fees",
    desc:
      "Each one of our elite fitness professionals are thoughtfully selected & vetted. Each one of them offers something specialized with their unique training “mottos”, diverse training locations and session sizes.",
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
                  <h2>What makes training with Motto different?</h2>
                  {accordionData.map((item, index) => (
                    <div className="motto_item" key={index}>
                      <div
                        className="motto_title"
                        onClick={() => toggle(index)}
                      >
                        <h3>{item.title}</h3>
                        <div
                          className={selected === index ? "line show" : "line"}
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
