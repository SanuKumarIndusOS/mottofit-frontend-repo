import React, { useState, useEffect } from "react";
import "./styles.scss";
import { SideBarRouteData } from "./UserAdminSidebar/SideBarRouteData";
import SubMenu from "./UserAdminSidebar/SubMenu";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import axios from "axios";

const UserDashboard = ({ children }) => {
    const [userData, setUserData] = useState();
    console.log(userData, "userData");

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
        };

        axios
            .get("http://doodlebluelive.com:2307/v1/user", { headers })
            .then((data) => {
                // console.log(data["data"]["data"]["profilePicture"]);
                // setImgUrl(data["data"]["data"]["profilePicture"]);
                setUserData(data["data"]["data"]);
            });
    }, []);

    return (
        <>
            <div className="admin_container">
                <div className="admin_sidenav">
                    <div className="admin_profile">
                        <div className="profilepic">
                            <img
                                className="profile_pic"
                                src={
                                    userData === ""
                                        ? userData.profilePicture
                                        : ""
                                }
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                                }}
                            />
                        </div>
                        <h2 style={{ textTransform: "capitalize" }}>
                            {userData ? userData.firstName : "Not Added"}
                        </h2>
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
