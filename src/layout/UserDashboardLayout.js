import React, { Component } from "react";
import NavBar  from "component/common/NavBarTwo/index";
import Footer from "component/common/Footer";
import Sidebar from "component/UserDashBoard/UserAdmin/UserAdminSidebar/Sidebar";
import UserDashboard from "component/UserDashBoard/UserAdmin";
export class UserDashboardLayout extends Component {
  state = {
    isOpen: false,
    modalIsOpen: false,
  };

  toggle = (name) => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  render() {
    let { children } = this.props;

    const { isOpen } = this.state;
    return (
      <>
        {/* <NavBar
          toggle={() => this.toggle("isOpen")}
          modalToggle={() => this.toggle("modalIsOpen")}
        /> */}
        <NavBar/>
        <Sidebar isOpen={isOpen} toggle={this.toggle} />
        <UserDashboard>{children}</UserDashboard>
        {/* <div className="main-layout"></div> */}
        <Footer />
      </>
    );
  }
}
