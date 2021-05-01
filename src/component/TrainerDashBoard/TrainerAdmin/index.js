import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";

// import { NavBar } from "../../common/Navbar/NavBar";
// import Footer from "../../common/Footer";
import Sidebar from "./TrainerAdminSidebar/Sidebar";
import { SideBarRouteData } from "./TrainerAdminSidebar/SideBarRouteData";
import SubMenu from "./TrainerAdminSidebar/SubMenu";
// import MyProfile from "../TrainerDashboardCompontents/TrainerMyProfile/MyProfile";
// import UserMessage from "../UserDashboardCompontents/UserMessages";
// import TrainerSchedule from "../TrainerDashboardCompontents/TrainerSchedule";
// import { TrainerMyEarnings } from "../TrainerDashboardCompontents/TrainerMyEarnings/TrainerMyEarnings";
import TrainerSession from "../DashboardCompontents/TrainerSession";
// import TrainerNotification from "../TrainerDashboardCompontents/TrainerNotification";
// import TrainerMessage from "../TrainerDashboardCompontents/TrainerMessages";
const TrainerDashboardTemp = ({ children }) => {
  return (
    <>
      {/* <Router> */}
      {/* <NavBar /> */}
      <div className="admin_container">
        <div className="admin_sidenav">
          <div className="admin_profile">
            <div className="profile_pic"></div>
            <h2>User Name</h2>
          </div>

          <div className="admin_sidenav_links">
            {SideBarRouteData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>
        <div className="admin_content">
          <div className="top_bar"></div>
          <div className="admin_content">
            {children}
            {/* <Sidebar /> */}
            {/* <Switch>
                <Route
                  path="/trainer-dashboard/schedule"
                  exact
                  component={TrainerSchedule}
                />
                <Route
                  path="/trainer-dashboard/session"
                  exact
                  component={TrainerSession}
                />
                <Route
                  path="/trainer-dashboard/message"
                  exact
                  component={TrainerMessage}
                />

                <Route
                  path="/trainer-dashboard/earnings"
                  exact
                  component={TrainerMyEarnings}
                />

                <Route
                  path="/trainer-dashboard/notifications"
                  exact
                  component={TrainerNotification}
                />
                <Route
                  path="/trainer-dashboard/setting/profile"
                  exact
                  component={MyProfile}
                />
              </Switch> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      {/* </Router> */}
    </>
  );
};

export default TrainerDashboardTemp;
