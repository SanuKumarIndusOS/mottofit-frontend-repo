import React from "react";
import "./styles.scss";

import MottoSessionType from "./subcomponents/MottoSessionType";

import { getTrainerDetail } from "action/adminAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function TrainerProfileTwo({ getTrainerDetail }) {
  const [trainerData, setTrainerData] = React.useState("");

  React.useEffect(() => {
    getTrainerDetail("ce82d301-f648-445f-864d-e80e628f82b9", false).then(
      (data) => {
        setTrainerData(data);
        console.log(data);
      }
    );
  }, []);
  return (
    <div className="trainer_profile_container">
      <div style={{ width: "30%" }}></div>
      <div style={{ width: "70%" }}>
        {" "}
        <MottoSessionType
          oneOnone={trainerData?.oneOnOnePricing}
          social={trainerData?.socialSessionPricing}
          classPricing={trainerData?.classSessionPricing}
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTrainerDetail,
    },
    dispatch
  );
};

const TrainerProfile2 = connect(null, mapDispatchToProps)(TrainerProfileTwo);

export default TrainerProfile2;
