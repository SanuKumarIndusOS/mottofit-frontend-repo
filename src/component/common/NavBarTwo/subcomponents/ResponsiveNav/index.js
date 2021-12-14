import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logout } from "service/utilities";
import { history } from "helpers";

import Drawer from "@material-ui/core/Drawer";

import { getUserDetail } from "action/userAct";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { change_login_status } from "action/NotificationAct";
import { getTrainerDetail } from "action/adminAct";

// ICONS
import LogoImage from "assets/files/SVG/Motto Logo.svg";
import SheduleIcon from "assets/files/Home/Banner/SearchBar/Shedule Icon.svg";
import SessionIcon from "assets/files/TrainerDashboard/SideBarAssets/Session Icon.svg";
import MessageIcon from "assets/files/TrainerDashboard/SideBarAssets/Message Icon.svg";
import NotificationIcon from "assets/files/TrainerDashboard/SideBarAssets/Notifications Icon.svg";
import SettingsIcon from "assets/files/TrainerDashboard/SideBarAssets/Settings Icon.svg";
import LogoutIcon from "assets/files/TrainerDashboard/SideBarAssets/Logout Icon.svg";
import Line2 from "assets/files/SVG/Blue Line 2.svg";
import Person from "assets/files/SignUp/Person Icon.svg";
import { UserAvatar } from "component/common/UserAvatar";

function MobileNav({ getUserDetail, getTrainerDetail, change_login_status }) {
  const [activeMobMenu, setActiveMobMenu] = useState(false);
  const [userData, setUserData] = useState();

  const isUserLoggedIn =
    localStorage.getItem("token") || localStorage.getItem("admin-token");
  let userType = parseInt(localStorage.getItem("type"));
  let nameProps = {
    userName: `${userData?.firstName || ""} ${userData?.lastName || ""}`,
  };

  useEffect(() => {
    if (userType === 3) {
      getUserDetail().then((data) => {
        setUserData(data);
      });
    } else {
      getTrainerDetail(localStorage.getItem("user-id")).then((data) => {
        setUserData(data);
      });
    }
  }, []);

  return (
    <div>
      {/* Mobile header Markup  */}
      <div className="mobile_navbar">
        <div className="mobile_hamburger_menu">
          {" "}
          <Link to="/mobiles/menu" style={{ color: "lightgrey" }}>
            &#x2630;
          </Link>
        </div>
        <div className="mobile_nav_logo">
          <Link to="">
            <img src={LogoImage} alt="logo" style={{ height: "30px" }} />
          </Link>
        </div>
        <div
          className="mobile_profile_menu"
          // onClick={() => {
          //   setActiveMobMenu(true);
          // }}
        >
          {!isUserLoggedIn ? (
            <div className="login-item1">
              <img src={Line2} alt="icon" />

              <img
                src={Person}
                alt="icon"
                onClick={() => {
                  history.push("/mobile/login");
                }}
              />

              {/* <SignIn showModel={isModelOpen} setShowModel={toggleModel} /> */}
            </div>
          ) : (
            <img
              src={Person}
              alt="icon"
              onClick={() => {
                setActiveMobMenu(true);
              }}
            />
          )}
        </div>
        {/* <Drawer
          anchor='right'
          open={true}
          //onClose={toggleDrawer(anchor, false)}
        >
         
          
        </Drawer> */}
      </div>

      {/* user Menu items */}

      {activeMobMenu ? (
        <Drawer
          anchor="right"
          open={activeMobMenu}
          onClose={() => {
            setActiveMobMenu(!activeMobMenu);
          }}
        >
          {userType === 3 ? (
            <div className="mobile_profile_menu_items">
              {/* <div
                className="pro_menu_container_left"
                onClick={() => {
                  setActiveMobMenu(false);
                }}
              ></div> */}

              <div className="pro_menu_container_right">
                <div className="pro_menu_header">
                  <div className="mob_menu_user">
                    <div className="mob_menu_user_pic">
                      <UserAvatar {...userData} {...nameProps} />
                    </div>
                    <div className="mob_menu_user_name">
                      {userData ? userData.firstName : ""}&nbsp;
                      {userData ? userData.lastName : ""}
                    </div>
                  </div>
                  <div
                    className="mob_menu_close"
                    onClick={() => {
                      setActiveMobMenu(false);
                    }}
                  >
                    x
                  </div>
                </div>
                <div className="pro_menu_content">
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/users/dashboard/session");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img src={SessionIcon} alt="icon"></img>
                    <div className="menu_li_text">MY SESSIONS</div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/users/dashboard/message/upcoming");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img src={MessageIcon} alt="icon"></img>
                    <div className="menu_li_text"> MESSAGES </div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/trainers/dashboard/notification");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img src={NotificationIcon} alt="icon"></img>

                    <div className="menu_li_text"> NOTIFICATIONS </div>
                  </div>
                  <div className="menu_li">
                    <img src={SettingsIcon} alt="icon" />
                    <div className="menu_li_text"> SETTINGS</div>
                  </div>
                  <div className="seetings_li">
                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/users/dashboard/settings/profile");
                        setActiveMobMenu(false);
                      }}
                    >
                      {" "}
                      PROFILE{" "}
                    </div>

                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/users/dashboard/settings/password");
                        setActiveMobMenu(false);
                      }}
                    >
                      {" "}
                      CHANGE PASSWORD{" "}
                    </div>
                  </div>

                  <div
                    className="menu_li"
                    onClick={() => {
                      change_login_status({ loginStatus: false }).then(logout);
                      //logout()
                    }}
                  >
                    <img src={LogoutIcon} alt="icon" />
                    <div className="menu_li_text"> LOGOUT </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mobile_profile_menu_items">
              {/* <div
                className="pro_menu_container_left"
                onClick={() => {
                  setActiveMobMenu(false);
                }}
              ></div> */}

              <div className="pro_menu_container_right">
                <div className="pro_menu_header">
                  <div className="mob_menu_user">
                    <div className="mob_menu_user_pic">
                      <UserAvatar {...userData} {...nameProps} />
                    </div>
                    <div className="mob_menu_user_name">
                      {userData ? userData.firstName : ""}&nbsp;
                      {userData ? userData.lastName : ""}
                    </div>
                  </div>
                  <div
                    className="mob_menu_close"
                    onClick={() => {
                      setActiveMobMenu(false);
                    }}
                  >
                    x
                  </div>
                </div>
                <div className="pro_menu_content">
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/trainers/dashboard/schedule");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img src={SheduleIcon} alt="icon"></img>
                    <div className="menu_li_text">MY SCHEDULE</div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/trainers/dashboard/session");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img src="" alt="icon"></img>
                    <div className="menu_li_text">MY SESSIONS</div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/trainers/dashboard/message/upcoming");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img
                      src="/static/media/Message Icon.9b7bba91.svg"
                      alt="icon"
                    ></img>
                    <div className="menu_li_text"> MESSAGES </div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/trainers/dashboard/notification");
                      setActiveMobMenu(false);
                    }}
                  >
                    <img
                      src="/static/media/Notifications Icon.132c5113.svg"
                      alt="icon"
                    ></img>

                    <div className="menu_li_text"> NOTIFICATIONS </div>
                  </div>
                  <div className="menu_li">
                    <img
                      src="/static/media/Settings Icon.5ae0ca78.svg"
                      alt="icon"
                    />
                    <div className="menu_li_text"> SETTINGS</div>
                  </div>
                  <div className="seetings_li">
                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/trainers/dashboard/settings/profile");
                        setActiveMobMenu(false);
                      }}
                    >
                      PROFILE
                    </div>
                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/trainers/dashboard/settings/card");
                        setActiveMobMenu(false);
                      }}
                    >
                      MY TRAINER CARD
                    </div>
                    <div
                      className="set_item"
                      onClick={() => {
                        history.push(
                          "/trainers/dashboard/settings/payment-history"
                        );
                        setActiveMobMenu(false);
                      }}
                    >
                      SECURITY AND PAYMENT INFO
                    </div>
                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/trainers/dashboard/earnings");
                        setActiveMobMenu(false);
                      }}
                    >
                      EARNING HISTORY
                    </div>

                    <div
                      className="set_item"
                      onClick={() => {
                        history.push("/trainers/dashboard/settings/password");
                        setActiveMobMenu(false);
                      }}
                    >
                      {" "}
                      CHANGE PASSWORD{" "}
                    </div>
                  </div>

                  <div
                    className="menu_li"
                    onClick={() => {
                      change_login_status({ loginStatus: false }).then(logout);
                      //logout()
                    }}
                  >
                    <img
                      src="/static/media/Logout Icon.97acadbd.svg"
                      alt="icon"
                    />
                    <div className="menu_li_text"> LOGOUT </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Drawer>
      ) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserDetail,
      change_login_status,
      getTrainerDetail,
    },
    dispatch
  );
};

export const NavBarMobile = connect(null, mapDispatchToProps)(MobileNav);
