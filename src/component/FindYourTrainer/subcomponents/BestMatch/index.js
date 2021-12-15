import React, { useState, useEffect } from "react";
import "./styles.scss";

import useLoadMore from "component/common/Hooks/useLoadMore";

// Component imports
import TrainerCard from "component/common/TrainerCard/index";

// TODO
// 1. Seperate component for view more trainers/sessions button

function BestMatch({ searchBestMatch, trainerSearchFilterData }) {
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

  //Effects
  useEffect(() => {
      
      setapiParams([JSON.stringify(trainerSearchFilterData),"match"]);
  }, []);

  useEffect(() => {
      console.log(renderData);
  }, [renderData])
  return (
    <div className="best-match-container">
      <div className="trainer-card__grid">
        <TrainerCard />
      </div>

      <div className="view-more-trainer-container">
        <div className="view-more-trainer__cta"> View More Trainers</div>
      </div>
    </div>
  );
}

export default BestMatch;
