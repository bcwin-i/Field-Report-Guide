import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HomeBody = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: row;
`

export const HomeSidebar = styled.div`
    flex: ${({sideNav})=> sideNav ? 0.15 : 0};
    background-color: ${colors.accent};
    padding: ${({sideNav})=> sideNav ? "2%" : "0%"};
    transition: all 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
`

export const HomeContainer = styled.div`
    flex: ${({sideNav})=> sideNav ? 0.85 : 0};
    transition: all 1s ease-in-out;
    position: relative;
`