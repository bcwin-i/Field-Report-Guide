import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const GroupNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const GroupNavDiv = styled.div`
  flex: 50%;
  text-align: center;
  padding: 0px 3%;
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${colors.secondary}` : `3px solid rgba(1,1,1,0)`};
  transition: all 0.5s ease-in-out;

  /* :hover{
    background-color: ${colors.accent};
  } */
`;

export const DepthContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GroupFilContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ searchFocus, borderOff }) =>
      borderOff
        ? "rgba(1,1,1,0)"
        : searchFocus
        ? colors.secondary
        : colors.accent};
  border-radius: 5px;
  width: 50%;
  padding: ${({ borderOff }) => (borderOff ? "0px" : "0px 7px")};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ borderOff }) => (borderOff ? "0px" : "5px")};
    margin-top: ${({ borderOff }) => (borderOff ? "5px" : "0px")};
  }
`;

export const DepthSearch = styled.input`
  outline: none;
  border: none;
  padding-left: 3%;
  font-size: 18px;
  width: 70%;
  padding-right: 3%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const DataListInput = styled.select`
  display: flex;
  border: 1px solid ${colors.accent};
  border-radius: 5px;
  padding: 12px 10px;
  background-color: transparent;
  margin: 0;
  outline: none;

  @media (max-width: 768px) {
    flex: 45%;
  }
`;
export const DepthSep = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    flex: 0;
  }
`;
export const GroupContainer = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: row;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 1px 1px 1px;
  padding: 1.25%;
  margin-top: 2.5%;

  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

export const GroupImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

export const GroupName = styled.h5`
  font-size: 16px;
  font-family: "Poppins-SemiBold";
  color: ${colors.primary};
  margin: 0px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GroupIns = styled.p`
  font-size: 14px;
  color: black;
  margin: 0px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const GroupOthers = styled.p`
  display: block;
  font-size: 12px;
  font-family: "Poppins-Light";
  color: black;
  margin: 0px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const GroupButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 5px 20px;
  min-width: 100px;
  transition: 0.5s ease-in-out all;
  display: flex;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.background};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12.5px;
  }
`;

export const GroupShowType = styled.div`
  flex: ${({ on }) => (on ? 1 : 0)};
  opacity: ${({ on }) => (on ? 1 : 0)};
  display: ${({ on }) => (on ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  padding: ${({ on }) => (on ? "0 0.1%" : "0%")};
  transition: 0.5s all ease-in-out;
  position: relative;
`;

export const ApproveContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: ${({ on }) => (on ? 0 : "100%")};
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
`;
