import React from "react";
import "./styles.scss";

import ProfileHeader from "./subcomponents/ProfieHeader/index";
import ProfileBody from "./subcomponents/ProfileBody";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";

import { history } from "helpers";
import { useParams } from "react-router-dom";

function TrainerProfileTwo({ getTrainerDetail, updateUserDetails }) {
  const [trainerData, setTrainerData] = React.useState("");
  const { id } = useParams();

  const [imageGrid, setImageGrid] = React.useState([]);

  React.useEffect(() => {
    getTrainerDetail(id, false).then((data) => {
      setTrainerData(data);
      window.scrollTo(0, 0)

      data?.images?.map((item) => {
        setImageGrid((oldArray) => [
          ...oldArray,
          {
            src: item,
            thumbnail: item,
          },
        ]);
      });
      // console.log(data);
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

  return (
    <div className="trainer-profile-container">
      {/* {trainerData === ""?"Loading":  <ProfileHeader/>} */}
      <ProfileHeader
        trainerFirstName={trainerData?.firstName}
        profilePicture={trainerData?.profilePicture}
        trainerExpertise={trainerData?.areaOfExpertise}
      />
      <ProfileBody
        trainerData={trainerData}
        handleBooking={handleBooking}
        imageGrid={imageGrid}
      />
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
