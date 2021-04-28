import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.scss";
import ScheduleIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Shedule Icon.svg";
import SessionIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import MyEarningIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/My Earnings Icon.svg";
import NotificationIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "../../../assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";

import TrainerSchedule from "../DashboardCompontents/TrainerSchedule/index";
import TrainerSession from "../DashboardCompontents/TrainerSession/index";
import { NavBar } from "../../common/Navbar/NavBar";
import TrainerMessage from "../DashboardCompontents/TrainerMessages";
const TrainerDashboard = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="admin_container">
          <div className="admin_sidenav">
            <div className="admin_profile">
              <div className="profile_pic"></div>
              <h2>Trainer Name</h2>
            </div>

            <div className="admin_sidenav_links">
              <Link to="/trainer-dashboard/schedule" className="nav_item">
                <img src={ScheduleIcon} alt="icon" /> MY SCHEDULE
              </Link>
              <Link to="/trainer-dashboard/session" className="nav_item">
                <img src={SessionIcon} alt="icon" /> MY SESSION
              </Link>
              <Link to="/trainer-dashboard/message" className="nav_item">
                <img src={MessageIcon} alt="icon" /> MESSAGES
              </Link>
              <Link to="/marketing" className="nav_item">
                <img src={MyEarningIcon} alt="icon" /> MY EARNINGS
              </Link>
              <Link to="/marketing" className="nav_item">
                <img src={NotificationIcon} alt="icon" /> NOTIFICATIONS
              </Link>
              <Link to="/marketing" className="nav_item">
                <img src={SettingIcon} alt="icon" />
                SETTINGS
              </Link>
              <Link to="/" className="nav_item">
                <img src={LogoutIcon} alt="icon" />
                LOGOUT
              </Link>
            </div>
          </div>
          <div className="admin_content">
            <div className="top_bar"></div>
            <div className="admin_content">
              <Switch>
                <Route
                  exact
                  path="/trainer-dashboard/schedule"
                  component={TrainerSchedule}
                />
                <Route
                  exact
                  path="/trainer-dashboard/session"
                  component={TrainerSession}
                />
                <Route
                  exact
                  path="/trainer-dashboard/message"
                  component={TrainerMessage}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default TrainerDashboard;
