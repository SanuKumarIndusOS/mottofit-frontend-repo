import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import { history } from "../../../helpers";

import LogoImage from "assets/files/SVG/Motto Logo.svg";
import { BiSearch } from "react-icons/bi";
import Person from "assets/files/SignUp/Person Icon.svg";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function NavBar() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggleDrop = () => setOpen(!dropdownOpen);
  let userType = parseInt(localStorage.getItem("type"));
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
  return (
    <div className="navbar-container">
      <div className="navbar-section">
        <div className="navbar-page">
          <Link to="/how-it-works">
            <div className="navbar-page__txt">How it works</div>
          </Link>
          <span>|</span>
          <Link to="/who-we-are">
            <div className="navbar-page__txt">Who we are</div>{" "}
          </Link>
        </div>
      </div>
      <div className="navbar-section">
        <div className="navbar-logo">
          <Link to="">
            <img src={LogoImage} height="45" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-section">
        <div className="navbar-account">
          <div className="search-ip-container">
            <input placeholder="Search by Trainer Name"></input>
            <BiSearch className="icon-search" />
          </div>

          <div className="navbar-icon__button">
            {!isUserLoggedIn ? (
              <img src={Person} onClick={() => history.push('/mobile/login')}></img> 
            ) : (
              <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                <DropdownToggle className="custom-dropdown">
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
                      // change_login_status({ loginStatus: false }).then(logout);
                      // logout()
                    }}
                  >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            )}
            {/* <img src={Person}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
