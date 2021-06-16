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
        item.subNav.map(({ onClick, ...item }, index) => {
          return (
            <div className="sub_links">
              <Link
                to={item.path}
                key={index}
                className="sub_link"
                onClick={() => onClick && onClick()}
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
