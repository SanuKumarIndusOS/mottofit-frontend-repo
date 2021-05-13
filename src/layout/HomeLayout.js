import React, { Component } from "react";
import SideBar from "component/common/SideBar";
import Footer from "component/common/Footer";
// import { NavBar } from "component/common/Navbar/NavBar";
import NavBarHome from "component/Home/NavbarHomePage/NavBarHome";

export class HomeLayout extends Component {
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
                <NavBarHome toggle={() => this.toggle("isOpen")} />
                <SideBar isOpen={isOpen} toggle={this.toggle} />
                <div className="main-layout">{children}</div>
                <Footer />
            </>
        );
    }
}
