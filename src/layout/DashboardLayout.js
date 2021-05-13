import React, { Component } from "react";
// import NavBarHome from "component/Home/NavbarHomePage/NavBarHome";
import SideBar from "component/common/SideBar";
import Footer from "component/common/Footer";
import AdminSetup from "component/AdminDashboard/AdminRoutes/index";
import { NavBar } from "component/common/Navbar/NavBar";

export class DashboardLayout extends Component {
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
                {/* <div className="main-layout">{children}</div> */}
                <AdminSetup>{children}</AdminSetup>
                <Footer />
            </>
        );
    }
}
