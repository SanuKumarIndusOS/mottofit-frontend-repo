import React, { useState } from "react";
import "./styles.scss";

import TabControl from "./subcomponents/TabControl";
import SessionCard from "./subcomponents/SessionCard";

function UserSessions() {
  const [activeTab, setactiveTab] = useState("upcoming");

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
           <SessionCard />
        </div>
      </div>
    </div>
  );
}

export default UserSessions;
