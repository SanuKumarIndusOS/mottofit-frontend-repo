import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import LogoImage from "assets/files/SVG/Motto Logo.svg";

import NavSearchBar from "./subcomponents/SearchBar";
import AccountIcon from "./subcomponents/AccountIcon";
import { NavBarMobile } from "./subcomponents/ResponsiveNav";

function NavBar() {
  return (
    <>
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
            <NavSearchBar />

            <AccountIcon />
          </div>
        </div>
      </div>
      <NavBarMobile />
    </>
  );
}

export default NavBar;
