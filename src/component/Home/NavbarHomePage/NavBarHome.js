import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Person from "../../../assets/files/SignUp/Person Icon.svg";
import { Nav, Bars } from "./NavbarHomeStyled";
import Logo from "../../../assets/files/SVG/Motto Logo Home.svg";
import LogoImage from "../../../assets/files/SVG/Motto Logo.svg";
import Line from "../../../assets/files/SVG/Blue Line.svg";
import Line2 from "../../../assets/files/SVG/Blue Line 2.svg";
import "./styles.scss";
import SignIn from "../../SignIn/Banner";
import { logout } from "service/utilities";
import { history } from "../../../helpers";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { updateUserDetails } from "action/userAct";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const NavBarHomeFC = ({ toggle, isModelOpen, updateUserDetails }) => {
  const [navbar, setNavbar] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [logo, setLogo] = useState(false);

  const [dropdownOpen, setOpen] = useState(false);

  const toggleDrop = () => setOpen(!dropdownOpen);

  const openModal = () => {
    setShowModel((prev) => !prev);
  };

  useEffect(() => {
    console.log(history);
    const { search } = history.location;

    const canOpen = search.split("=") ? search.split("=")[1] : false;

    if (Boolean(canOpen) && !isModelOpen) {
      let reduxData = {
        isModelOpen: true,
      };

      updateUserDetails(reduxData);
    }
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const handleDashboard = () => {
    let userType = parseInt(localStorage.getItem("type"));

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

  const isUserLoggedIn =
    localStorage.getItem("token") || localStorage.getItem("admin-token");
  return (
    <Nav className={navbar ? "navbaractive active" : "navbar-sass"}>
      <div className="main_navbar ">
        <div className="main_container_home container ">
          <div className="header-links">
            <Link to="/how-it-works">How it works</Link>
            <img src={Line} alt="icon" />
            <Link to="/who-we-are">Who we are</Link>
          </div>
          <Bars onClick={toggle} />
          <div className="logo-content_home">
            {logo ? (
              <Link to="/welcome">
                {" "}
                <img src={LogoImage} alt="logo" className="changeLogo" />
              </Link>
            ) : (
              <Link to="/welcome">
                {" "}
                <img src={Logo} alt="logo" className="defaultLogo" />{" "}
              </Link>
            )}
          </div>
          <div className="search-items">
            <div className="input-item">
              <input
                className="input"
                type="text"
                placeholder="Rotating prompts go here"
              />
              <BiSearch className="search-icon" />
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
      </div>
    </Nav>
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

const NavBarHome = connect(mapStateToProps, mapDispatchToProps)(NavBarHomeFC);

export default NavBarHome;
