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
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";

const TrainerDashboardTemp = ({ children }) => {
    return (
        <>
            <div className="admin_container_trainer">
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
                    <img src={WaterMark} className="td_watermark" alt="icon" />
                </div>
                <div className="admin_content">
                    <div className="top_bar"></div>
                    <div className="admin_content">{children}</div>
                </div>
            </div>
        </>
    );
};

export default TrainerDashboardTemp;
