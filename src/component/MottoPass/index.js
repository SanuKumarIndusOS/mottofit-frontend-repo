import React from "react";
import "./mottopass.scss";
import { MottoPassCard } from "component/common/MottoPassCard";
import { PreviousPassItem } from "./previousPassItem";
import BlueHoverButton from "component/common/BlueArrowButton";

export const MottoPassSection = ({ handlePagination }) => {
  return (
    <div className="mottopass-session-section">
      <div className="mottopass-heading">
        <h1 className="fs-25 font-weight-normal">Valid Motto Passes</h1>
      </div>

      <div className="mottopass-cards-section row">
        <div className="col-xl-6 col-12">
          <MottoPassCard />
        </div>
        <div className="col-xl-6 col-12">
          <MottoPassCard />
        </div>
      </div>

      <hr />

      <div className="previous-mottopass-section">
        <div className="mottopass-heading">
          <h1 className="fs-25 font-weight-normal mb-2 mt-4">
            Previous Motto Passes
          </h1>
        </div>

        <div className="previous-passes-list">
          <PreviousPassItem />
          <PreviousPassItem />
        </div>
        <div className="previous-pass-actionbtn">
          <button className="viewMoreButton" onClick={handlePagination}>
            View More <BlueHoverButton />
          </button>
        </div>
      </div>
    </div>
  );
};
