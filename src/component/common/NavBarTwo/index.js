import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

import Logo from "assets/files/SVG/Motto Logo Home.svg";
import LogoImage from "assets/files/SVG/Motto Logo.svg";

import NavSearchBar from "./subcomponents/SearchBar";
import AccountIcon from "./subcomponents/AccountIcon";
import { NavBarMobile } from "./subcomponents/ResponsiveNav";

function NavBar({ home }) {
  return (
    <>
      <div  className={home ? "navbar-container home-nav" : "navbar-container"}>
        <div className="navbar-section">
          <div className="navbar-page">
            <Link to="/how-it-works">
              <div
                className={home ? "home-navbar-page__txt" : "navbar-page__txt"}
              >
                How it works
              </div>
            </Link>
            <span>|</span>
            <Link to="/who-we-are">
              <div
                className={home ? "home-navbar-page__txt" : "navbar-page__txt"}
              >
                Who we are
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-section">
          <div className="navbar-logo">
            <Link to="">
              {home ? (
                <img src={Logo} height="80" alt="logo" />
              ) : (
                <img src={LogoImage} height="45" alt="logo" />
              )}
            </Link>
          </div>
        </div>
        <div className="navbar-section">
          <div className="navbar-account">
            <NavSearchBar />

            <AccountIcon home={home} />
          </div>
        </div>
      </div>
      <NavBarMobile />
    </>
  );
}

export default NavBar;
