import React, { useState, useEffect } from "react";
import "./styles.scss";

import TabControl from "./subcomponents/TabControl";
import SessionCard from "./subcomponents/SessionCard";

import { history } from "helpers";

import { userSession, cancelSession, updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import BlueHoverButton from "component/common/BlueArrowButton";

// TODO
// 1. No Session Available
// 2. Pagination
// 3. Safari Testing

function UserSessions({ userSession, cancelSession, updateUserDetails }) {
  const [activeTab, setactiveTab] = useState("upcoming");
  const [tabData, settabData] = useState([]);
  const [dataLoader, setdataLoader] = useState(true);
  const [empty, setEmpty] = useState(false);

  const getSessionData = () => {
    userSession(activeTab === "previous" ? "past" : activeTab, 0).then(
      (data) => {
        console.log(data);

        if (data["data"]?.length === 0) return setEmpty(true);
        settabData(data["data"]);

      
          setTimeout(() => {
            setdataLoader(false);
          }, 500);
        
      }
    );
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
            {dataLoader ? (
              <div className="loader-container">
                {empty ? `No ${activeTab} Session` : <CircularProgress />}
              </div>
            ) : (
              tabData?.map((item) => {
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
          <div className="view-more-container">View more trainers <BlueHoverButton/></div>
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
    },
    dispatch
  );
};

const UserSessionTwo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSessions);

export default UserSessionTwo;
