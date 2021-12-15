import React from "react";
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


  const handleMobileFilter = () =>{
    history.push("/mobiles/filter");
  }
  //Action functions
  const search_filter_action = (payload) => {};

  const [
    renderData,
    activePage,
    setActivePage,
    setapiParams,
    dataLoader,
    setdataLoader,
    isbuttonVisible,
    isEmpty,
    setisEmpty,
  ] = useLoadMore(searchBestMatch, true, 6);

  React.useEffect(() => {
    // setActivePage(1);
    setapiParams([JSON.stringify(trainerSearchFilterData), "match"]);
  }, []);

  React.useEffect(() => {
    console.log(renderData);
  }, [renderData]);

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

      {/* <BestMatch searchBestMatch={searchBestMatch} trainerSearchFilterData={trainerSearchFilterData} /> */}
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
