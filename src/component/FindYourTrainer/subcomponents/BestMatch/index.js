import React, { useState, useEffect } from "react";
import "./styles.scss";

import useLoadMore from "component/common/Hooks/useLoadMore";

// Component imports
import TrainerCard from "component/common/TrainerCard/index";
import BlueHoverButton from "component/common/BlueArrowButton";

// TODO
// 1. Seperate component for view more trainers/sessions button

function BestMatch({ searchBestMatch, trainerSearchFilterData, type }) {
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

  //Handle Change functions
  const handlePageChange = () => setActivePage(activePage + 1);

  //Effects
  useEffect(() => {
    console.log(trainerSearchFilterData);

    if (type === "bestMatch")
      return setapiParams([JSON.stringify(trainerSearchFilterData), "match"]);

    if (type === "otherMatch")
      return setapiParams([JSON.stringify(trainerSearchFilterData), "unmatch"]);
  }, [trainerSearchFilterData]);

  return (
    <div className="best-match-container">
      <div className="trainer-card__grid">
        {renderData?.map((item) => {
          return <TrainerCard data={item} />;
        })}
      </div>
      {isbuttonVisible ? (
        <div className="view-more-trainer-container">
          <div className="view-more-trainer__cta" onClick={handlePageChange}>
            View More Trainers <BlueHoverButton />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BestMatch;
