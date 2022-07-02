import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HomeBody = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const HomeSidebar = styled.div`
  flex: ${({ sideNav }) => (sideNav ? 0.15 : 0)};
  background-color: ${colors.accent};
  padding: ${({ sideNav }) => (sideNav ? "2%" : "0%")};
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ sideNav }) => (sideNav ? 0.85 : 1)};
  transition: all 1s ease-in-out;
  position: relative;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.accent};
  padding: 3%;
`;

export const BottomNavigation = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: 1px solid ${colors.accent};

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BottomNavigationButton = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
