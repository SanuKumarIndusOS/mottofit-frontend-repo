import React, { useState, useEffect } from "react";
import "./styles.scss";
import { SideBarRouteData } from "./UserAdminSidebar/SideBarRouteData";
import SubMenu from "./UserAdminSidebar/SubMenu";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { getUserDetail } from "action/userAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { UserAvatar } from "component/common/UserAvatar";
const UserDashboardClass = ({ children, getUserDetail }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    getUserDetail().then((data) => {
      setUserData(data);
    });
  }, []);

  let nameProps = {
    userName: `${userData?.firstName || ""} ${userData?.lastName || ""}`,
  };

  return (
    <>
      <div className="admin_container">
        <div className="admin_sidenav">
          <div className="admin_profile">
            <div className="profilepic">
              <UserAvatar {...userData} {...nameProps} />
              {/* <img
                className="profile_pic"
                src={userData === "" ? userData.profilePicture : ""}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://qphs.fs.quoracdn.net/main-qimg-2b21b9dd05c757fe30231fac65b504dd";
                }}
              /> */}
            </div>
            <h2 className="text-capitalize mb-0">
              {userData ? userData.firstName : ""}&nbsp;
              {userData ? userData.lastName : ""}
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
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserDetail,
    },
    dispatch
  );
};

const UserDashboard = connect(null, mapDispatchToProps)(UserDashboardClass);

export default UserDashboard;
