import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";

import UserSession from "../UserDashboardCompontents/UserSession/index";
import { NavBar } from "../../common/Navbar/NavBar";
import Footer from "../../common/Footer";
import UserMessage from "../UserDashboardCompontents/UserMessages";
import Sidebar from "./UserAdminSidebar/Sidebar";
import { SideBarRouteData } from "./UserAdminSidebar/SideBarRouteData";
import SubMenu from "./UserAdminSidebar/SubMenu";
// import UserMessage from "../UserDashboardCompontents/UserMessages";

const UserDashboard = () => {
    return (
        <>
            <Router>
                <NavBar />
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
                            <Sidebar />
                            <Switch>
                                <Route
                                    path="/user-dashboard/my-session"
                                    exact
                                    component={UserSession}
                                />
                                <Route
                                    path="/user-dashboard/message"
                                    exact
                                    component={UserMessage}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer />
            </Router>
        </>
    );
};

export default UserDashboard;
