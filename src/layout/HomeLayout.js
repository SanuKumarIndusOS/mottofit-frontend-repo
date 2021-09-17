import React, { Component } from "react";
import SideBar from "component/common/SideBar";
import Footer from "component/common/Footer";
import { NavBar } from "component/common/Navbar/NavBar";
import NavBarHome from "component/Home/NavbarHomePage/NavBarHome";
import NavBarHomeMob from "component/Home/NavbarHomePage/NavBarHomeMob";
import "assets/css/homeLayout.scss";

export class HomeLayout extends Component {
  state = {
    isOpen: false,
    modalIsOpen: false,
    stickyNav: false,
  };

  toggle = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  changeBackground = () => {
    if (window.scrollY >= 180) {
      this.setState({ stickyNav: true });
    } else {
      this.setState({ stickyNav: false });
    }
  };

  scrollListener = () => {
    window.addEventListener("scroll", this.changeBackground);
    return () => window.removeEventListener("scroll", this.changeBackground);
  };

  render() {
    let { children } = this.props;

    console.log(this.props);

    const { isOpen, stickyNav } = this.state;
    this.scrollListener();
    return (
      <>
        {stickyNav ? (
          <NavBar />
        ) : (
          <div className="desk_nav">
            <NavBarHome toggle={() => this.toggle("isOpen")} />
          </div>
        )}

        <div className="mobile_nav">
          <NavBar />
        </div>

        <SideBar isOpen={isOpen} toggle={this.toggle} />
        <div className="main-layout">{children}</div>
        <Footer />
      </>
    );
  }
}
