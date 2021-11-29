import React from "react";
import "./styles.scss";

import MottoSessionType from "./subcomponents/MottoSessionType";
import ProfileHeader from "./subcomponents/ProfieHeader/index";
import ProfileBody from "./subcomponents/ProfileBody";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";

import { history } from "helpers";
import { Link, useParams, useHistory } from "react-router-dom";

import Quote from "assets/files/FindTrainer/Quote Icon.svg";
import Tick from "assets/files/FindTrainer/Tick 1.svg";
import Gallery from "react-grid-gallery";
import BlueArrowButton from "component/common/BlueArrowButton";

function TrainerProfileTwo({
  getTrainerDetail,
  updateUserDetails,
  sessionData,
}) {
  const [trainerData, setTrainerData] = React.useState("");
  const { id } = useParams();

  const [imageGrid, setImageGrid] = React.useState([]);

  React.useEffect(() => {
    getTrainerDetail(id, false).then((data) => {
      setTrainerData(data);

      data?.images?.map((item) => {
        setImageGrid((oldArray) => [
          ...oldArray,
          {
            src: item,
            thumbnail: item,
          },
        ]);
      });
      console.log(data);
    });
  }, []);

  const handleBooking = (price, type, venue, passData = null, availPass) => {
    var storedata = {
      sessionData: {
        trainerId: id,
        city: trainerData?.servicableLocation,
        sessionType: venue === "virtual" ? "virtual" : "inPerson",
        venue: venue !== "virtual" ? venue : "clientLocation",
        trainingType: type,
        price: price,
        newPass: passData,
        availPass: availPass,
        areaOfExpertise: trainerData?.areaOfExpertise?.toString(),
      },
    };

    updateUserDetails(storedata);
    if (!localStorage.getItem("token")) {
      // history.push(`/mobile/login?${encodeURIComponent("nextpath=/user/scheduler/" + id)}`);
      history.push(`/user/scheduler/${id}`);
    } else {
      console.log(availPass, "ll");

      history.push(`/user/scheduler/${id}`);
    }
  };

  // const handleBooking = (price, type, venue, passData = null, availPass) => {
  //   if (!localStorage.getItem("token")) {
  //     history.push("/mobile/login");
  //     history.push(`?${encodeURIComponent("nextpath=/trainer/profile/" + id)}`);
  //   } else {
  //     console.log(availPass, "ll");
  //     var storedata = {
  //       sessionData: {
  //         trainerId: id,
  //         city: trainerData?.servicableLocation,
  //         sessionType: venue === "virtual" ? "virtual" : "inPerson",
  //         venue: venue !== "virtual" ? venue : "clientLocation",
  //         trainingType: type,
  //         price: price,
  //         newPass: passData,
  //         availPass: availPass,
  //       },
  //     };

  //     updateUserDetails(storedata);
  //     history.push(`/user/scheduler/${id}`);
  //   }
  // };

  return (
    // <div className="trainer_profile_container">
    //   <div className="left_pane"></div>
    //   <div className="right_pane">
    //     {" "}
    //     <MottoSessionType
    //       oneOnone={trainerData?.oneOnOnePricing}
    //       social={trainerData?.socialSessionPricing}
    //       classPricing={trainerData?.classSessionPricing}
    //       handleBooking={handleBooking}
    //       trainerId={id}
    //     />
    //   </div>
    // </div>

    <div className="trainer-profile-container">
      {/* {trainerData === ""?"Loading":  <ProfileHeader/>} */}
      <ProfileHeader
        trainerFirstName={trainerData?.firstName}
        profilePicture={trainerData?.profilePicture}
        trainerExpertise={trainerData?.areaOfExpertise}
      />

      <ProfileBody trainerData={trainerData} handleBooking={handleBooking} />

      {/* <div className="trainer-profile-body">
        <div className="profile-body--left-pane">
          <div className="trainer-about__scroll">
            Want to know more? About Leanna
          </div>
          <div className="trainer-pricing__scroll">
            View Leanna's Training options and rates
          </div>
          <br></br>
          <div className="trainer-request-message">
            <div className="trainer-request-txt">Have a Question</div>
            <div className="trainer-request-but">message {trainerData?.firstName} <BlueArrowButton/></div>
          </div>
        </div>
        <div className="profile-body--right-pane">
          <div className="my-motto">
            <img src={Quote} alt="qoute" />
            <p>{trainerData?.myMotto}</p>
          </div>
          <div className="session-pricing">
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
              trainerId={id}
              servicableLocation={trainerData?.servicableLocation}
              trainingFacilityLocation={trainerData?.trainingFacilityLocation}
            />
          </div>
          <div className="trainer-about">
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
      </div> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerDetail,
      updateUserDetails,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
});

const TrainerProfile2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerProfileTwo);

export default TrainerProfile2;
