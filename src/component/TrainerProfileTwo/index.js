import React from "react";
import "./styles.scss";

import MottoSessionType from "./subcomponents/MottoSessionType";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateUserDetails, } from "action/userAct";

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

  const handleBooking = (price, type, venue, passData=null) => {
    if (!localStorage.getItem("token")) {
      history.push("/mobile/login");
      history.push(`?${encodeURIComponent("nextpath=/trainer/profile/"+id)}`);
    } else {
      console.log(passData,"ll");
      var storedata = {
        sessionData: {
          trainerId: id,
          city: trainerData?.servicableLocation,
          sessionType: venue === "virtual" ? "virtual" : "inPerson",
          venue: venue !== "virtual" ? venue : "clientLocation",
          trainingType: type,
          price: price,
          newPass: passData
        },
      };

      updateUserDetails(storedata);
     history.push(`/user/scheduler/${id}`);
    }
  };

  return (
    <div className="trainer_profile_container">
      <div style={{ width: "30%" }}></div>
      <div style={{ width: "70%" }}>
        {" "}
        <MottoSessionType
          oneOnone={trainerData?.oneOnOnePricing}
          social={trainerData?.socialSessionPricing}
          classPricing={trainerData?.classSessionPricing}
          handleBooking={handleBooking}
          trainerId={id}
        />
      </div>
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
