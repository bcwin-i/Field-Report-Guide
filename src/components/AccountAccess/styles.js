import styled from "styled-components";
import { colors } from "../../utils/colors";

export const AccountAccessBody = styled.div`
  flex: 1;
  display: flex;
  min-height: 100vh;
  padding: 7.5% 20%;
  background-color: ${colors.accent};

  @media (max-width: 768px) {
    padding: 5%;
  }
`;

export const AccountAccessContainer = styled.div`
  flex: 1;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: row;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const AccountAccessDiv = styled.div`
  padding: 5%;
  flex: ${(props) => props.width + "%"};
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
    display: ${(props) => (props.hide ? "none" : "flex")};
  }
`;

export const AppName = styled.h3`
  font-size: 20px;
  margin-top: 10%;
  font-family: "Poppins-SemiBold";
  font-weight: bold;
  color: ${colors.primary};
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const AppDesc = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
  font-family: "Poppins-Light";
`;

export const IntroImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const IntroIcon = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 851px) {
    width: 50px;
    height: 50px;
  }
`;

export const AALabel = styled.text`
  width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  color: ${colors.grey};
`;

export const AAInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${colors.accent};
  color: ${colors.primary};
  font-size: 16px;
  margin-bottom: 20px;

  :focus {
    outline: none;
  }
`;
