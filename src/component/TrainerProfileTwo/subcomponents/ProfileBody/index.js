import React from "react";
import "./styles.scss";

import MottoSessionType from "component/TrainerProfileTwo/subcomponents/MottoSessionType/index";

import Quote from "assets/files/FindTrainer/Quote Icon.svg";
import Tick from "assets/files/FindTrainer/Tick 1.svg";
import Gallery from "react-grid-gallery";
import BlueArrowButton from "component/common/BlueArrowButton";

import { HiOutlineLocationMarker } from "react-icons/hi";

function ProfileBody({ trainerData, handleBooking, imageGrid, handleRequestTrainer }) {
  const aboutRef = React.useRef(null);
  const priceRef = React.useRef(null);

  return (
    <div className="trainer-profile-body">
      <div className="mobile-profile-info">
        <div className="trainer-name">
          {trainerData?.firstName + " " + trainerData?.lastName}
        </div>
        <div className="trainer-expertise">
          {String(trainerData?.areaOfExpertise).replace(/,/g, ", ")}
        </div>
      </div>
      <div className="profile-body--left-pane">
        <div
          className="trainer-about__scroll"
          onClick={() => {
            aboutRef.current.scrollIntoView({ block: "center" });
          }}
        >
          About {trainerData?.firstName}
        </div>
        <div
          className="trainer-pricing__scroll"
          onClick={() => {
            priceRef.current.scrollIntoView();
          }}
        >
          View {trainerData?.firstName}'s Training options <span> & </span> rates
        </div>
        <br></br>
        <div className="trainer-location">
         <HiOutlineLocationMarker/> {trainerData?.location}
        </div>
        <br></br>
        <div className="trainer-request-message">
          <div className="trainer-request-txt">Have a Question</div>
          <div className="trainer-request-but" onClick={handleRequestTrainer}>
            message {trainerData?.firstName} <BlueArrowButton />
          </div>
        </div>
      </div>
      <div className="profile-body--right-pane">
        <div className="my-motto">
          <img src={Quote} alt="qoute" />
          <p>{trainerData?.myMotto}</p>
        </div>
        <div className="session-pricing" ref={priceRef}>
          <div className="right-pane--header">
            Train with {trainerData?.firstName}
          </div>
          <div className="right-pane--content">
            Browse & choose your session type to continue. You can then choose
            an available time or message your trainer for more availability &
            questions.
          </div>

          <MottoSessionType
            oneOnone={trainerData?.oneOnOnePricing}
            social={trainerData?.socialSessionPricing}
            classPricing={trainerData?.classSessionPricing}
            handleBooking={handleBooking}
            trainerId={trainerData?.id}
            servicableLocation={trainerData?.serviceableNeighbourHood}
            trainingFacilityLocation={trainerData?.trainingFacilityLocation}
          />
        </div>
        <div className="trainer-about" ref={aboutRef}>
          <div className="right-pane--header">
            About {trainerData?.firstName}
          </div>
          <div className="right-pane--content">
            {trainerData?.trainingProcess}
          </div>
        </div>
        <div className="trainer-gallery">
          <Gallery
            images={imageGrid}
            enableImageSelection={false}
            maxRows="5"
          />
        </div>
        <div className="certifications">
          <div className="right-pane--header">Certifications</div>
          <div className="certification-main">
            {trainerData?.certification?.map((item) => {
              return (
                <div className="certification-container">
                  <div className="certification-icon">
                    <img src={Tick} height="28" width="28"></img>
                  </div>
                  <div className="certification-name">{item?.certificate}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
