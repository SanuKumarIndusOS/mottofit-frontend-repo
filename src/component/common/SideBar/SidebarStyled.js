import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background:#fff;
    display:grid;
    align-items:center;
    left:0;
    top:0;
    transition: 0.3s ease-in-out;
    opacity: ${ ({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${ ({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #53BFD2;
    
`
export const Icon = styled.div`
    position:absolute;
        top:0;
        left:5%;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
    color: #53BFD2;
`
export const SidebarWraper = styled.div`
display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
`
export const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(5, 90px);
    text-align:center;
    align-items:center;


    @media screen and (max-width: 480px){
        grid-template-rows:repeat(6, 60px);
    }
`
export const SidebarLink = styled(Link)`
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:1.5em;
    text-decoration:none;
    list-style:none;
    transition: .2s ease-in-out;
    cursor: pointer;
    color:#53BFD2;
    font-weight:bold;

    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background:  linear-gradient(to right,#1212a5,#c04545,#ce5d0c);
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #555554;
        color: #010606;
    }
`;