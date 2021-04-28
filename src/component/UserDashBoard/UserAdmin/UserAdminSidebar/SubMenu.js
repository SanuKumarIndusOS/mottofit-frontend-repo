import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 20px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        background: #53bfd2;
    }
    &:focus {
        font-weight: 700;
        background: #53bfd2;
    }
    &:active {
        font-weight: 700;
        background: #53bfd2;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1px;
    font-size: 18px;
    padding: 0 0 0 20px;
    font: var(--unnamed-font-style-normal) normal
        var(--unnamed-font-weight-medium) var(--unnamed-font-size-18) /
        var(--unnamed-line-spacing-42) var(--unnamed-font-family-montserrat);
    color: var(--unnamed-color-161616);
    text-align: left;
    font: normal normal medium 18px/42px Montserrat;
    letter-spacing: 1.17px;
    color: #161616;
    width: 120px;
    text-transform: uppercase;
    opacity: 1;

    &:hover {
        font-weight: 700;
        background: #53bfd2;
    }
    &:focus {
        font-weight: 700;
        background: #53bfd2;
    }
    &:active {
        font-weight: 700;
        background: #53bfd2;
    }
`;

const DropdownLink = styled(Link)`
    background: #fff;
    height: 60px;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    padding: 1em;

    &:hover {
        font-weight: 700;
        background: #53bfd2;
    }
    &:focus {
        font-weight: 700;
        background: #53bfd2;
    }
    &:active {
        font-weight: 700;
        background: #53bfd2;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
