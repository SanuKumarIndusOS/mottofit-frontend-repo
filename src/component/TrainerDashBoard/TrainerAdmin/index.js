import React, { useEffect } from "react";
import "./styles.scss";
import { SideBarRouteData } from "./TrainerAdminSidebar/SideBarRouteData";
import SubMenu from "./TrainerAdminSidebar/SubMenu";
import WaterMark from "../../../assets/files/SVG/M Watermark.svg";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { trainerDetail } from "action/trainerAct";

const TrainerDashboardTempClass = ({ children, trainerDetail }) => {
  const [imgUrl, setImgUrl] = React.useState("");
  const [userName, setUserName] = React.useState("");

  useEffect(() => {
    trainerDetail().then((data) => {
      setImgUrl(data.profilePicture);
      setUserName(data.firstName + " " + data.lastName);
    });
  }, []);

  let proPic;
  if (imgUrl === "" || imgUrl === null) {
    proPic = <div className="profile_pic"> </div>;
  } else {
    proPic = (
      <div className="profile_pic">
        <img className="pro_pic" src={imgUrl} />
      </div>
    );
  }

  return (
    <div className="admin_container_trainer">
      <div className="admin_sidenav">
        <div className="admin_profile">
          {proPic}
          <h2 style={{ textTransform: "capitalize" }}>{userName}</h2>
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
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      trainerDetail,
    },
    dispatch
  );
};

const TrainerDashboardTemp = connect(
  null,
  mapDispatchToProps
)(TrainerDashboardTempClass);

export default TrainerDashboardTemp;
