import React from "react";
import "./styles.scss";

//REDUX Imports
import { getCalenderDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function UserSchedulerBlocks() {
  return <div className="schdlr-block-container"></div>;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCalenderDetails,
    },
    dispatch
  );
};

const UserSchedulerBlockC = connect(
  null,
  mapDispatchToProps
)(UserSchedulerBlocks);

export default UserSchedulerBlockC;
