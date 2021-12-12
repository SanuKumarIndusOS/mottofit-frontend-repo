import React, { useState, useEffect } from "react";
import "./styles.scss";

import TabControl from "./subcomponents/TabControl";
import SessionCard from "./subcomponents/SessionCard";
import { MottoPassSection } from "component/MottoPass";

import useLoadMore from "component/common/Hooks/useLoadMore";

import { history } from "helpers";

import {
  userSession,
  cancelSession,
  updateUserDetails,
  getAllMottoPassesAct,
} from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import BlueHoverButton from "component/common/BlueArrowButton";


// TODO
// 1. No Session Available
// 2. Pagination
// 3. Safari Testing

function UserSessions({
  userSession,
  cancelSession,
  updateUserDetails,
  getAllMottoPassesAct,
}) {
  const [activeTab, setactiveTab] = useState("upcoming");
  const [tabData, settabData] = useState([]);
  const [dataLoader, setdataLoader] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [mottoPassData, setMottoPassData] = useState([]);
  const [inValidMottoPassData, setInvalidMottoPassData] = useState([]);
  // const [apiParams, setapiParams] = useState([activeTab,"0"])
  
  // let apiParams = [activeTab === "previous" ? "past" : activeTab, "0"];

  const [renderData, setrenderData, activePage, setActivePage, setapiParams] = useLoadMore(
    userSession,
    10
  );

  const getSessionData = () => {
    if (activeTab === "motto package") {
      getAllPasses();
    } else {
      // userSession(activeTab === "previous" ? "past" : activeTab, 2).then(
      //   ({ data: data, documentCount: totalItem }) => {
      //     console.log(data, totalItem);

      //     if (data?.length === 0) return setEmpty(true);
      //     settabData(data);

      //     setTimeout(() => {
      //       setdataLoader(false);
      //     }, 500);
      //   }
      // );
    }
  };



  const getAllPasses = async () => {
    console.log("poi");
    const mottopackageData = await getAllMottoPassesAct();
    const inactivePassData = await getAllMottoPassesAct("inactive");
    setMottoPassData(mottopackageData.list);
    setInvalidMottoPassData(inactivePassData.list);
    setdataLoader(false);
  };

  // Action functions
  const cancelAction = (sessionId) => {
    let payload = {
      sessionId,
      sessionStatus: "cancelled",
    };
    cancelSession(payload)
      .then((data) => {
        getSessionData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rescheduleAction = (trainerData) => {
    var storedata = {
      sessionData: {
        trainerId: trainerData?.trainerDetail?.id,
        city: null,
        sessionType: trainerData?.sessionType,
        venue: trainerData?.venue,
        trainingType: trainerData?.trainingType,
        price: trainerData?.price,
        areaOfExpertise: trainerData?.activity,
      },
    };

    updateUserDetails(storedata);

    history.push(`/user/scheduler/${trainerData?.trainerDetail?.id}`);
  };

  // Change functions
  const handleChangeTab = (tabHeader) => setactiveTab(tabHeader);

  // Effects
  useEffect(() => {
    getSessionData();
  }, []);

  useEffect(() => {
    setdataLoader(true);
    getSessionData();
    setEmpty(false);

    setapiParams([activeTab === "previous" ? "past" : activeTab]);
    setActivePage(0);
    
    
  }, [activeTab]);

  return (
    <>
      <div className="user-sessions-container">
        <div className="user-sessions__title">My Sessions</div>
        <div className="session-tabs">
          <TabControl activeTab={activeTab} handleChangeTab={handleChangeTab} />
        </div>
        <div className="session-tab-data">
          <div className="session-tab__header">{activeTab} sessions</div>

          <div className="session-tab__content">
            {activeTab === "motto package" ? (
              <MottoPassSection
                handlePagination={0}
                mottoPassData={mottoPassData}
                inValidMottoPassData={inValidMottoPassData}
              />
            ) : false ? (
              <div className="loader-container">
                {empty ? `No ${activeTab} Session` : <CircularProgress />}
              </div>
            ) : (
              renderData?.map((item) => {
                return (
                  <SessionCard
                    data={item}
                    activeTab={activeTab}
                    cancelAction={cancelAction}
                    rescheduleAction={rescheduleAction}
                  />
                );
              })
            )}
          </div>
          {activeTab === "motto package" ? null : (
            <div className="view-more-container" onClick={()=>{ setActivePage(activePage+1) }}>
              View more Sessions <BlueHoverButton />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  sessionData: state.userReducer.sessionData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      userSession,
      cancelSession,
      updateUserDetails,
      getAllMottoPassesAct,
    },
    dispatch
  );
};

const UserSessionTwo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSessions);

export default UserSessionTwo;
