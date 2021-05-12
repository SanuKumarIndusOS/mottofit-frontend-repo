import React, { Component } from "react";
// import NavBarHome from "component/Home/NavbarHomePage/NavBarHome";
import { NavBar } from "component/common/Navbar/NavBar";
// import SideBar from "component/common/SideBar";
// import Footer from "component/common/Footer";
import AdminSetup from "component/AdminDashboard/AdminRoutes";
import SideBar from "component/UserDashBoard/UserAdmin/UserAdminSidebar/Sidebar";

export class AdminDashboardLayout extends Component {
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

        console.log(this.props);

        const { isOpen } = this.state;
        return (
            <>
                <NavBar
                    toggle={() => this.toggle("isOpen")}
                    modalToggle={() => this.toggle("modalIsOpen")}
                />
                <SideBar isOpen={isOpen} toggle={this.toggle} />
                <AdminSetup>{children}</AdminSetup>

                {/* <div className="main-layout"></div> */}
                {/* <Footer /> */}
            </>
        );
    }
}
