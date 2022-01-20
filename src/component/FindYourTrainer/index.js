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
      } else {
        let searchQuery = window.location.search.slice(1);
        let queryStrings = searchQuery.split("&");
        let _location, _city, _trainingType, _date, _availability;

        queryStrings.map((item) => {
          if (item.includes("location")) {
            if (item.split("=")[1] !== null) {
              _location = item.split("=")[1];
            } else {
              _location = "";
            }
          }

          if (item.includes("city")) {
            if (item.split("=")[1] !== null) {
              _city = item.split("=")[1];
            } else {
              _city = "";
            }
          }

          if (item.includes("training")) {
            if (item.split("=")[1] !== null) {
              _trainingType = item.split("=")[1];
            } else {
              _trainingType = "";
            }
          }

          if (item.includes("schedule")) {
            if (item.split("=")[1] !== null) {
              _date = item.split("=")[1];
            } else {
              _date = "";
            }
          }

          if (item.includes("availability")) {
            if (item.split("=")[1] !== null) {
              _availability = item.split("=")[1];
            } else {
              _availability = "";
            }
          }
        });
        console.log(queryStrings);
        let payload = {
          location: _location,
          city: _city,
          trainingType: _trainingType,
          date: _date,
          availability: _availability,
        };

        // console.log(payload);
        settrainerDataParams(payload);
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
