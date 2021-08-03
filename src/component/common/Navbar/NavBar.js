import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import { Bars } from "./NavbarStyled";
import "./styles.css";
import LogoImage from "../../../assets/files/SVG/Motto Logo.svg";
import Line from "../../../assets/files/SVG/Blue Line.svg";
import Line2 from "../../../assets/files/SVG/Blue Line 2.svg";
import SignIn from "../../SignIn/Banner";
import { logout } from "service/utilities";
import { history } from "../../../helpers";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getUserDetail } from "action/userAct";
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { UserAvatar } from "component/common/UserAvatar";
import { change_login_status } from "action/NotificationAct";

const NavBarFC = ({
  toggle,
  isModelOpen,
  updateUserDetails,
  getUserDetail,
  change_login_status,
}) => {
  const [userData, setUserData] = useState();

  const [keys, setKey] = useState("");
  useEffect(() => {
    setKey("")
    if (userType === 3) {
      getUserDetail().then((data) => {
        setUserData(data);
      });
    }

    console.log(userType);
  }, []);

  let nameProps = {
    userName: `${userData?.firstName || ""} ${userData?.lastName || ""}`,
  };

  const [activeMobMenu, setActiveMobMenu] = useState(false);

  const [showModel, setShowModel] = useState(false);

  const [dropdownOpen, setOpen] = useState(false);

 

  const toggleDrop = () => setOpen(!dropdownOpen);

  let userType = parseInt(localStorage.getItem("type"));

  const openModal = () => {
    setShowModel((prev) => !prev);
  };

  const isUserLoggedIn =
    localStorage.getItem("token") || localStorage.getItem("admin-token");

  const handleDashboard = () => {
    // let userType = parseInt(localStorage.getItem("type"));

    switch (userType) {
      case 1:
        history.push(`/admins/dashboard`);
        break;
      case 2:
        history.push(`/trainers/dashboard/schedule`);
        break;
      case 3:
        history.push(`/users/dashboard/session`);
        break;
    }
  };

  const toggleModel = () => {
    let reduxData = {
      isModelOpen: !isModelOpen,
    };

    updateUserDetails(reduxData);
  };

  // useEffect(() => {
  //   const { search } = history.location;

  //   const nextPath = search.split("?") ? search.split("?")[1] : "";

  //   if (nextPath) {
  //     const decodedNextPath = decodeURIComponent(nextPath).split("=")[1];

  //     console.log(decodedNextPath);
  //   }
  // }, [isModelOpen]);

  return (
    <>
      <nav className="navbar1 ">
        <div className="nav_wrapper container">
          <div className="header-links1">
            <Link to="/how-it-works">How it works</Link>
            <img src={Line} alt="icon" />
            <Link to="/who-we-are">Who we are</Link>
          </div>
          <Bars onClick={toggle} />
          <div className="logo-content1">
            <Link to="">
              <img src={LogoImage} alt="logo" className="changeLogo1" />
            </Link>
          </div>
          <div className="search-items1">
            <div className="input-item1">
              <input
                className="input"
                type="text"
                placeholder="Rotating prompts go here"
                onChange={(e) => {
                  setKey(e.target.value);
                }}
              ></input>
              <BiSearch
                className="search-icon1"
                onClick={() => {
                  history.push({
                    pathname: "/trainer/results",
                    state:{

                      key: keys
                    }
                  });

                 
                }}
              />
            </div>

            {!isUserLoggedIn ? (
              <div className="login-item1">
                <img src={Line2} alt="icon" />

                <img src={Person} alt="icon" onClick={toggleModel} />

                <SignIn showModel={isModelOpen} setShowModel={toggleModel} />
              </div>
            ) : (
              <>
                <img src={Line2} alt="icon" className="ml-2" />
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                  <DropdownToggle className="custom-dropdown ml-3">
                    <div>
                      <img src={Person} alt="icon" />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={handleDashboard}>
                      Dashboard
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        change_login_status({ loginStatus: false }).then(
                          logout
                        );
                        // logout()
                      }}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </>
            )}
          </div>
        </div>
      </nav>

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
      </div>

      {/* user Menu items */}

      {activeMobMenu ? (
        <div>
          {userType === 3 ? (
            <div className="mobile_profile_menu_items">
              <div
                className="pro_menu_container_left"
                onClick={() => {
                  setActiveMobMenu(false);
                }}
              ></div>

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
                    <img
                      src="/static/media/Session Icon.4a000f79.svg"
                      alt="icon"
                    ></img>
                    <div className="menu_li_text">MY SESSIONS</div>
                  </div>
                  <div
                    className="menu_li"
                    onClick={() => {
                      history.push("/users/dashboard/message");
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
                      history.push("/users/dashboard/notification");
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
                    <img
                      src="/static/media/Logout Icon.97acadbd.svg"
                      alt="icon"
                    />
                    <div className="menu_li_text"> LOGOUT </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Trainer Menu</div>
          )}
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  isModelOpen: state.userReducer.isModelOpen,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateUserDetails,
      getUserDetail,
      change_login_status,
    },
    dispatch
  );
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarFC);
