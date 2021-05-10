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
import axios from "axios";

const TrainerDashboardTemp = ({ children }) => {
  const [imgUrl, setImgUrl] = React.useState("");
  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };

    axios
      .get("http://doodlebluelive.com:2307/v1/trainer", { headers })
      .then((data) => {
        console.log(data["data"]["data"]["profilePicture"]);
        setImgUrl(data["data"]["data"]["profilePicture"]);
        setUserName(data["data"]["data"]["firstName"]+ " " + data["data"]["data"]["lastName"])
      });
  }, []);

  let proPic;
  if (imgUrl === "") {
    proPic = <div className="profile_pic"></div>;
  } else {
    proPic = (
      <div className="profile_pic">
        <img className="pro_pic" src={imgUrl} />
      </div>
    );
  }

  return (
    <>
      <div className="admin_container_trainer">
        <div className="admin_sidenav">
          <div className="admin_profile">
            {/* <div className="profile_pic">
                        <img className="pro_pic" src={imgUrl} />
                        </div> */}
            {proPic}
            <h2>{userName}</h2>
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
