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
import CircularProgress from "@material-ui/core/CircularProgress";

import { BiSearch } from "react-icons/bi";

// TODO
// Trainer Card Check me out overlay 
// No Matches Found

function TrainerFilter({ trainerSearchFilterData, searchBestMatch }) {
  const [trainerDataParams, settrainerDataParams] = useState(null);
  const [loader, setloader] = useState(true);

  //Handle Change functions
  const handleMobileFilter = () => {
    history.push("/mobiles/filter");
  };

  //Action functions
  const search_filter_action = (payload) => {
    settrainerDataParams(payload);
    setloader(true);
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
            sectionHeading={null}
          />
        
          <BestMatch
            type="otherMatch"
            searchBestMatch={searchBestMatch}
            trainerSearchFilterData={trainerDataParams}
            sectionHeading="just outside your time"
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
