import React from "react";
import "./styles.scss";

import MottoSessionType from "./subcomponents/MottoSessionType";
import ProfileHeader from "./subcomponents/ProfieHeader/index";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";

import { history } from "helpers";
import { Link, useParams, useHistory } from "react-router-dom";

function TrainerProfileTwo({
  getTrainerDetail,
  updateUserDetails,
  sessionData,
}) {
  const [trainerData, setTrainerData] = React.useState("");
  const { id } = useParams();

  React.useEffect(() => {
    getTrainerDetail(id, false).then((data) => {
      setTrainerData(data);
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
      <ProfileHeader />
      

      
      
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
