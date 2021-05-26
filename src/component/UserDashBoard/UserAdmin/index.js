import React from "react";
import "./styles.scss";
import { SideBarRouteData } from "./UserAdminSidebar/SideBarRouteData";
import SubMenu from "./UserAdminSidebar/SubMenu";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";

const UserDashboard = ({ children }) => {
    return (
        <>
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
                    <img src={WaterMark} className="ud_watermark" alt="icon" />
                </div>
                <div className="admin_content">
                    <div className="top_bar"></div>
                    <div className="admin_content">{children}</div>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
