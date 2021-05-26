import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles.scss";
import ArrowNext from "../../../../assets/files/SVG/Arrow Next.svg";

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 35px;
    list-style: none;
    height: 70px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        font-weight: 700;
        background: #53bfd2;
        text-decoration: none;
    }
    &:focus {
        font-weight: 700;
        background: #53bfd2;
        text-decoration: none;
    }
    &:active {
        font-weight: 700;
        background: #53bfd2;
        text-decoration: none;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1px;
    font-size: 18px;
    padding: 0 0 0 20px;
    text-align: left;
    letter-spacing: 1.17px;
    color: #161616;
    width: 120px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 42px;
    font-weight: 500;

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
                        <div className="sub_links">
                            <Link
                                to={item.path}
                                key={index}
                                className="sub_link"
                            >
                                {item.icon}
                                <p className="sub_title">{item.title}</p>
                                <img src={ArrowNext} alt="icon" />
                            </Link>
                        </div>
                    );
                })}
        </>
    );
};

export default SubMenu;
