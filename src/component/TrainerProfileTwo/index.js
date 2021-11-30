import React from "react";
import "./styles.scss";

import CircularProgress from "@material-ui/core/CircularProgress";

import ProfileHeader from "./subcomponents/ProfieHeader/index";
import ProfileBody from "./subcomponents/ProfileBody";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";

import { history } from "helpers";
import { useParams } from "react-router-dom";
import { Toast } from "service/toast";
import { requestTrainerMessageAct } from "action/trainerAct";

function TrainerProfileTwo({ getTrainerDetail, updateUserDetails, requestTrainerMessageApi }) {
  const [trainerData, setTrainerData] = React.useState("");
  const { id } = useParams();
  const [isLoading, setLoading] = React.useState(false);

  const [imageGrid, setImageGrid] = React.useState([]);

  React.useEffect(() => {
    getTrainerDetail(id, false).then((data) => {
      setTrainerData(data);
      window.scrollTo(0, 0);

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

  const handleRequestTrainer = () => {
    setReqAlert(true);
    Toast({
      type: "success",
      message:
        "Login or create an account to message trainer requesting time and date of your choice",
    });

    const userId = localStorage.getItem("user-id");

    // CHECK WHETHER USER IS LOGGED IN,IF NOT REDURECT TO LOGIN PAGE

    // let callbackFunction = handleRequestTrainer;

    let reduxData = {
      nextAction: requestTrainerAct,
    };

    let redirectURL = `/mobile/login?${encodeURIComponent(
      `nextpath=/users/dashboard/message/requested`
    )}&requestSession=true`;

    if (!userId) {
      window.scrollTo(0, 0);
      updateUserDetails(reduxData);

      return history.push(redirectURL);
    }

    requestTrainerAct();
  };

  const [reqAlert, setReqAlert] = React.useState(false);

  const requestTrainerAct = () => {
    const userId = localStorage.getItem("user-id");
    return new Promise((resolve, reject) => {
      let payload = {
        channelType: "directMessageTrainer",
        trainerId: id,
        userId: [userId],
      };

      setLoading(true);
      requestTrainerMessageApi(payload)
        .then((data) => {
          const { channelSid } = data || {};

          let redirectURL = `/users/dashboard/message/requested`;

          if (channelSid)
            redirectURL = `${redirectURL}?channelId=${channelSid}`;

          console.log(redirectURL);

          setLoading(false);
          Toast({ type: "success", message: "Success" });
          history.push(redirectURL);
          // resolve();
        })
        .catch((err) => {
          setLoading(false);
          Toast({ type: "error", message: err.message || "Error" });
          reject(err);
        });
    });
  };

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
      {trainerData === "" ? (
        <div className="loader-parent">
          <CircularProgress />
        </div>
      ) : (
        <>
          <ProfileHeader
            trainerFirstName={trainerData?.firstName}
            trainerLastName={trainerData?.lastName}
            profilePicture={trainerData?.profilePicture}
            trainerExpertise={trainerData?.areaOfExpertise}
          />
          <ProfileBody
            trainerData={trainerData}
            handleBooking={handleBooking}
            imageGrid={imageGrid}
            handleRequestTrainer={handleRequestTrainer}
          />
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerDetail,
      updateUserDetails,
      requestTrainerMessageApi: requestTrainerMessageAct,
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
