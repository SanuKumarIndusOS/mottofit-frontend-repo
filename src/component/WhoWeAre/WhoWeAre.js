import React from "react";
import "./styles.scss";
import FindIcon from "../../assets/files/WhoAreWe/Image 1.svg";
import LeanPic from "assets/files/WhoAreWe/Lean.png"
import Icon2 from "../../assets/files/WhoAreWe/Image 2.svg";
import Icon3 from "../../assets/files/WhoAreWe/Image 3.svg";
import Icon4 from "../../assets/files/WhoAreWe/Image 4.svg";
import WaterMark from "../../assets/files/WhoAreWe/M Watermark.svg";

export const WhoWeAre = () => {
  return (
    <>
      <div className="outter_we_container">

        <div className="title_container">
          Who we Are
        </div>
        <div className="iconItem">
          <img src={FindIcon} alt="icon" /></div>

        <div className="heading1">
          A personal trainer marketplace
        </div>

        <div className="content1">
          Motto is a personal trainer marketplace. <br></br>We simplify the process of finding and booking high quality personal trainers both for in-person and virtual sessions.

        </div>

        <div className="motto_story">
          <div className="pictureL">
            <img src={LeanPic}/>
          </div>
          <div className="content2">
            <b>Motto's Story</b>
            <br></br>
            <br></br>
            <p>
              As one of the co-founders of Motto, Leanna Brittis created Motto after
              realizing that the fitness & wellness industry was lacking a marketplace for
              clients & trainers to find each other. During the COVID-19 pandemic, Leanna
              and two friends found themselves scattered in different cities, yet struggled
              with the same problem of finding high-quality personal training. Together
              they realized that no one should have a hard time finding the right
              professionals for their fitness and wellness needs.


            </p>
            <br></br>
            <p>While living in New York City, Leanna has had a career with an emphasis on
               both client services and operational/administrative management in the
               public relations, advertising & marketing industries. Now between New York City 
               & Miami, she’s been able to gain on-ground experience and grow her 
               networks in two cities where wellness & fitness industry are prioritized, and
               adapt these findings to Motto.
            </p>
          </div>
          
        </div>

        <div className="watermark">
        <img src={WaterMark} alt="watermark" className="watermark" /> 
          </div>
         

        {/* <div className="container">
          <div className="inner_we_container">
            <div className="we_wrapper">
              <div className="we_section">
                <h2>Who We Are</h2>
                <span></span>

                <p>
                  We are three friends who love fitness, and have been
                  consistently frustrated by the process of finding quality
                  trainers.
                </p>
              </div>
              <div className="we_section">
                <img src={FindIcon} alt="icon" />

                <p>
                  Like you, we want the process of booking a trainer for your
                  unique needs to be seamless, trusted & personal!
                </p>
              </div>
              <div className="we_section">
                <div className="section_images">
                  <img src={Icon2} alt="icon" />
                  <img src={Icon3} alt="icon" />
                  <img src={Icon4} alt="icon" />
                </div>
                <p>
                  Whether your idea of a great workout is having intense 1 on 1
                  sessions, or getting a social sweat with friends & peers, we
                  are building a community to ensure you get the unrivaled &
                  trustworthy training experience you deserve.
                </p>
              </div>
              <div className="we_section">
                <span className="separator"></span>

                <h6>#dowhatmovesyou</h6>
              </div>
            </div>
            <img src={WaterMark} alt="watermark" className="watermark" />
          </div>
        </div> */}
      </div>
    </>
  );
};
