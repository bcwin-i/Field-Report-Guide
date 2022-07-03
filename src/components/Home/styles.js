import styled from "styled-components";
import { colors } from "../../utils/colors";
import { FaUserCircle } from "react-icons/fa";
import { TbChartInfographic } from "react-icons/tb";
import { MdSpaceDashboard, MdGroupWork } from "react-icons/md";

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

export const SidebarButtonContainer = styled.button`
  display: none;
  background: none;
  color: ${({ active }) => (active ? colors.accent : colors.primary)};
  font-size: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 400;
  background-color: ${({ active }) =>
    active ? colors.primary : colors.accent};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  padding: 15px;
  padding-left: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  border: none;

  :hover {
    background-color: ${colors.secondary};
  }

  @media (max-width: 851px) {
    text-align: left;
    font-size: 12px;
    padding: 10px;
    padding-left: 10px;
    margin-bottom: 7.5px;
  }
`;

export const IconPar = styled(TbChartInfographic)`
  width: ${({active})=> active ? "24px" : "24px"};
  height: ${({active})=> active ? "24px" : "24px"};
  color: ${({active})=> active ? colors.primary : colors.secondary};
  transition: 0.5s all ease-in-out;
`

export const IconGroups = styled(MdGroupWork)`
  width: ${({active})=> active ? "24px" : "24px"};
  height: ${({active})=> active ? "24px" : "24px"};
  color: ${({active})=> active ? colors.primary : colors.secondary};
  transition: 0.5s all ease-in-out;
`

export const IconDashboard = styled(MdSpaceDashboard)`
  width: ${({active})=> active ? "24px" : "24px"};
  height: ${({active})=> active ? "24px" : "24px"};
  color: ${({active})=> active ? colors.primary : colors.secondary};
  transition: 0.5s all ease-in-out;
`

export const IconUser = styled(FaUserCircle)`
  width: ${({active})=> active ? "24px" : "24px"};
  height: ${({active})=> active ? "24px" : "24px"};
  color: ${({active})=> active ? colors.primary : colors.secondary};
  transition: 0.5s all ease-in-out;
`