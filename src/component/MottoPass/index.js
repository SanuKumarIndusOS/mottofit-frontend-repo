import React from "react";
import "./mottopass.scss";
import { MottoPassCard } from "component/common/MottoPassCard";
import { PreviousPassItem } from "./previousPassItem";
import BlueHoverButton from "component/common/BlueArrowButton";

import moment from "moment";

export const MottoPassSection = ({ handlePagination, mottoPassData }) => {

 // console.log(mottoPassData,"mm");
  const validMottoPassData = [...mottoPassData].filter(({ expiresIn }) => {
    let isExpired = moment(
      moment.tz("America/New_York").format("YYYY MM DD")
    ).isAfter(moment.tz(expiresIn, "America/New_York").format("YYYY MM DD"));
    return isExpired === false;
  });

  return (
    <div className="mottopass-session-section">
      <div className="mottopass-heading">
        <h1 className="fs-25 font-weight-normal">Valid Motto Packages</h1>
      </div>

      <div className="mottopass-cards-section row w-100 justify-content-between">
        {validMottoPassData.map((data) => (
          
          //   <div className="col-xl-6 col-12" key={data.id}>
          <MottoPassCard data={data} key={data.id} />
          //   </div>
        ))}
      </div>

      {/* <hr /> */}

      {/* <div className="previous-mottopass-section">
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
      </div> */}
    </div>
  );
};
