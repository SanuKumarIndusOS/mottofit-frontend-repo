import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.div`
    margin-bottom: -100px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    height: 100px;
    top: 0;

    @media screen and (max-width: 1024px) {
        margin-bottom: 0;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 999;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #bcbcbc;
    @media screen and (max-width: 1024px) {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
