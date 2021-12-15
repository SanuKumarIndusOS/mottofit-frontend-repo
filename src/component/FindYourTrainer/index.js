import React from "react";
import "./styles.scss";

//Redux imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrainerDetails, searchBestMatch } from "action/trainerAct";
import { updateUserDetails } from "action/userAct";

//Component imports
import SearchFilter from "component/common/SearchFilter/index";
import BestMatch from "./subcomponents/BestMatch";

function TrainerFilter({ trainerSearchFilterData }) {
  //Action functions
  const search_filter_action = (payload) => {};

  return (
    <div className="trainer-filter-container">
      <div className="search-filter">
        <SearchFilter
          type="find"
          searchAction={search_filter_action}
          activeQuery={trainerSearchFilterData}
        />
      </div>

      <BestMatch />
    </div>
  );
}

const mapStateToProps = (state) => ({
  trainerQueryData: state.trainerReducer.query,
  trainerSearchFilterData: state.trainerReducer.searchFilterParams,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
      updateTrainerDetails,
      searchBestMatch,
    },
    dispatch
  );
};

const FindTrainerV2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainerFilter);

export default FindTrainerV2;
