import React, { useState } from "react";
import {
  AAInput,
  AALabel,
  AccountAccessBody,
  AccountAccessContainer,
  AccountAccessDiv,
  AppDesc,
  AppName,
  IntroIcon,
  IntroImg,
} from "../components/AccountAccess/styles";
import Intro from "../assets/intro.svg";
import { colors } from "../utils/colors";
import { GButton } from "../components/Global/styles";
import ClipLoader from "react-spinners/ClipLoader";

const AccountAcess = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AccountAccessBody>
      <AccountAccessContainer>
        <AccountAccessDiv
          backgroundColor={colors.secondary}
          width={60}
          hide={true}
        >
          <IntroImg src={Intro} alt="Introduction" />
          <AppName>Field Record Guide</AppName>
          <AppDesc>
            A simple system for recording data in the field. Gather, save, and
            update any necessary data.
          </AppDesc>
          <AppDesc></AppDesc>
        </AccountAccessDiv>
        <AccountAccessDiv backgroundColor="white" width={40}>
          <IntroIcon src={require("../assets/icon.png")} alt="icon" />
          <AppDesc style={{ color: "grey", marginTop: 20, marginBottom: 30 }}>
            Welcome to FRG
          </AppDesc>
          <AALabel>User name or Email</AALabel>
          <AAInput type={"email"} />

          <AALabel>Password</AALabel>
          <AAInput type={"password"} />
          <p
            style={{
              fontSize: 12,
              textAlign: "end",
              width: "100%",
              marginTop: -10,
              marginBottom: 20,
            }}
          >
            Forgot password?
          </p>
          <GButton
            background={colors.accent}
            color={colors.primary}
            onClick={() => setLoading(!loading)}
          >
            {loading ? (
              <ClipLoader loading={true} size={20} color={colors.primary} />
            ) : (
              "Sign in"
            )}
          </GButton>
        </AccountAccessDiv>
      </AccountAccessContainer>
    </AccountAccessBody>
  );
};

export default AccountAcess;
