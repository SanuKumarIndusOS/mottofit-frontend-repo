import React from "react";
import './SidebarStyled.js'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWraper,
    SidebarLink,
    SidebarMenu,
} from "./SidebarStyled";
const SideBar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWraper>
                <SidebarMenu>
                    <SidebarLink to="/"  onClick={toggle}>
                        How It Works
                    </SidebarLink>
                    <SidebarLink to="/"  onClick={toggle}>
                        Who We Are
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWraper>
        </SidebarContainer>
        </>
    );
};

export default SideBar;
