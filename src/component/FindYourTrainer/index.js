import React, { useState, useEffect } from "react";
import "./styles.scss";

import { history } from "helpers";

//Redux imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateTrainerDetails, searchBestMatch } from "action/trainerAct";
import { updateUserDetails } from "action/userAct";

//Component imports
import SearchFilter from "component/common/SearchFilter/index";
import BestMatch from "./subcomponents/BestMatch";
import useLoadMore from "component/common/Hooks/useLoadMore";
import { BiSearch } from "react-icons/bi";

function TrainerFilter({ trainerSearchFilterData, searchBestMatch }) {
  const [trainerDataParams, settrainerDataParams] = useState(null);

  //Handle Change functions
  const handleMobileFilter = () => {
    history.push("/mobiles/filter");
  };

  //Action functions
  const search_filter_action = (payload) => {
    settrainerDataParams(payload);
  };

  //Effect functions
  useEffect(() => {
    if (Object.keys(trainerSearchFilterData).length === 0) {
      if (JSON.parse(localStorage.getItem("persistFilters")) !== null) {
        settrainerDataParams(
          JSON.parse(localStorage.getItem("persistFilters"))
        );
      }
    } else {
      settrainerDataParams(trainerSearchFilterData);
    }
  }, []);

  return (
    <div className="trainer-filter-container">
      <div className="search-filter">
        <SearchFilter
          type="find"
          searchAction={search_filter_action}
          activeQuery={trainerSearchFilterData}
        />
      </div>

      <div className="mobile-filter" onClick={handleMobileFilter}>
        <div className="mobile-filter-bar">
          <div className="mobile-filter__txt">Find Your Trainer</div>
          <div className="mobile-filter__icon">
            <BiSearch />
          </div>
        </div>
      </div>

      {trainerDataParams !== null ? (
        <>
          <BestMatch
            type="bestMatch"
            searchBestMatch={searchBestMatch}
            trainerSearchFilterData={trainerDataParams}
          />
          <div className="outside-results">
            <p>Just Outside Your Time</p>
          </div>
          <BestMatch
            type="otherMatch"
            searchBestMatch={searchBestMatch}
            trainerSearchFilterData={trainerDataParams}
          />
        </>
      ) : null}
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
