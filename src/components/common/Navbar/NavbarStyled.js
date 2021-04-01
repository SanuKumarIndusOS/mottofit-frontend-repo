import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 70px;
    /* margin-bottom: -100px; */
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    top:0;
    position:sticky;
    top:0;
    z-index:999;

    @media screen and (max-width: 1024px) {
    margin-bottom: 0;
    justify-content:space-between;
    align-items: center;
    position:sticky;
    top:0;
    z-index:999;

    }
`;

export const LogoImage = styled.img`
    width: 50%;
    padding: 1em;
    @media screen and (max-width: 920px) {
        padding: 1em 1em 1em 0;
    }
`;
export const NavLink = styled(Link)`
    color: #ef5730;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin:0 0.5em;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 1200px) {
        padding: 0;
        display:none
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #bcbcbc;
    @media screen and (max-width: 1024px) {
        display: flex;
        align-items:center;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    margin-right: 24px;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 35px;
    padding: 10px 30px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    background-image: linear-gradient(to right, #1212a5, #c04545, #ce5d0c);
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
