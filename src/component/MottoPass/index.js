import React from "react";
import "./mottopass.scss";
import { MottoPassCard } from "component/common/MottoPassCard";
import { PreviousPassItem } from "./previousPassItem";
import BlueHoverButton from "component/common/BlueArrowButton";

import moment from "moment";
import { Toast } from "service/toast";
import { history } from "helpers";

export const MottoPassSection = ({
  handlePagination,
  mottoPassData,
  inValidMottoPassData,
  requestTrainerMessageApi,
}) => {
  // console.log(mottoPassData,"mm");
  const validMottoPassData = [...mottoPassData].filter(({ expiresIn }) => {
    let isExpired = moment(
      moment.tz("America/New_York").format("YYYY MM DD")
    ).isAfter(moment.tz(expiresIn, "America/New_York").format("YYYY MM DD"));
    return isExpired === false;
  });

  const handleMottoPagination = () => {};

  const requestTrainerAct = (id, cb = () => {}) => {
    const userId = localStorage.getItem("user-id");
    return new Promise((resolve, reject) => {
      let payload = {
        channelType: "directMessageTrainer",
        trainerId: id,
        userId: [userId],
      };

      cb(true);

      // setLoading(true);
      requestTrainerMessageApi(payload)
        .then((data) => {
          const { channelSid } = data || {};

          let redirectURL = `/users/dashboard/message/requested`;

          if (channelSid)
            redirectURL = `${redirectURL}?channelId=${channelSid}`;

          console.log(redirectURL);

          cb(false);
          Toast({ type: "success", message: "Success" });
          history.push(redirectURL);
          // resolve();
        })
        .catch((err) => {
          cb(false);
          Toast({ type: "error", message: err.message || "Error" });
          reject(err);
        });
    });
  };

  return (
    <div className="mottopass-session-section">
      <div className="mottopass-heading">
        <h1 className="fs-25 font-weight-normal">Current Packages</h1>
      </div>

      <div className="mottopass-cards-section row w-100 justify-content-between mb-4">
        {validMottoPassData.map((data) => (
          //   <div className="col-xl-6 col-12" key={data.id}>
          <MottoPassCard
            data={data}
            key={data.id}
            isUserView
            requestTrainerAct={requestTrainerAct}
          />
          //   </div>
        ))}
      </div>
      <div className="mottopass-heading">
        <h1 className="fs-25 font-weight-normal">Expired Packages</h1>
      </div>

      <div className="mottopass-cards-section row w-100 justify-content-between">
        {inValidMottoPassData.map((data) => (
          //   <div className="col-xl-6 col-12" key={data.id}>
          <MottoPassCard data={data} key={data.id} />
          //   </div>
        ))}
      </div>

      {/* <button onClick={handleMottoPagination} className="viewMoreButton">
            View all Session <BlueHoverButton />
         </button> */}

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
