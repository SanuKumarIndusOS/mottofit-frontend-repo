import React, { useState, useEffect } from "react";
import "./styles.scss";

import TabControl from "./subcomponents/TabControl";
import SessionCard from "./subcomponents/SessionCard";

import { userSession, cancelSession, updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CircularProgress from "@material-ui/core/CircularProgress";

function UserSessions({ userSession }) {
  const [activeTab, setactiveTab] = useState("upcoming");
  const [tabData, settabData] = useState([]);
  const [dataLoader, setdataLoader] = useState(true);

  const getSessionData = () => {
    userSession(activeTab === "previous" ? "past" : activeTab, 0).then(
      (data) => {
        console.log(data);
        settabData(data["data"]);
        setTimeout(() => { setdataLoader(false)}, 500);
        
      }
    );
  };

  useEffect(() => {
    getSessionData();
  }, []);

  useEffect(() => {
    setdataLoader(true);
    getSessionData();
    
  }, [activeTab]);

  const handleChangeTab = (tabHeader) => setactiveTab(tabHeader);

  return (
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
              <CircularProgress />
            </div>
          ) : (
            tabData?.map((item) => {
              return <SessionCard data={item} activeTab={activeTab} />;
            })
          )}
        </div>
      </div>
    </div>
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
