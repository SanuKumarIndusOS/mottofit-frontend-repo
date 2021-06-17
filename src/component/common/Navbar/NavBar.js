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
import { bindActionCreators } from "redux";
import { updateUserDetails } from "action/userAct";
import { connect } from "react-redux";

const NavBarFC = ({ toggle, isModelOpen, updateUserDetails }) => {
  const [showModel, setShowModel] = useState(false);

  const [dropdownOpen, setOpen] = useState(false);

  const toggleDrop = () => setOpen(!dropdownOpen);

  const openModal = () => {
    setShowModel((prev) => !prev);
  };

  const isUserLoggedIn =
    localStorage.getItem("token") || localStorage.getItem("admin-token");

  const handleDashboard = () => {
    let userType = parseInt(localStorage.getItem("type"));

    switch (userType) {
      case 1:
        history.push(`/admins/dashboard`);
        break;
      case 2:
        history.push(`/trainers/dashboard/session`);
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
              ></input>
              <BiSearch className="search-icon1" />
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
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </>
            )}
          </div>
        </div>
      </nav>
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
    },
    dispatch
  );
};

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarFC);
