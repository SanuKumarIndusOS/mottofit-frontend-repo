import React,{ useState } from "react";
import "./styles.scss";

import TabControl from "./subcomponents/TabControl";

function UserSessions() {
  const [activeTab, setactiveTab] = useState("upcoming");
  const handleChangeTab = (tabHeader) => setactiveTab(tabHeader);
  return (
    <div className="user-sessions-container">
      <div className="session-tabs">
        <TabControl activeTab={activeTab} handleChangeTab={handleChangeTab} />
      </div>
      <div className="session-tab-data"></div>
    </div>
  );
}

export default UserSessions;
