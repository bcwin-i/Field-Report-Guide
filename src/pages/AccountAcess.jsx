import React, { useContext, useState } from "react";
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
import lawyer from "../assets/lawyer.svg";
import { colors } from "../utils/colors";
import { GButton } from "../components/Global/styles";
import ClipLoader from "react-spinners/ClipLoader";
import UserContext from "../context/Authentication/UserContext";

const users = [
  {
    id: 1,
    email: "kojo@gmail.com",
    name: "Kojo Ntow",
    password: "12345",
  },
  {
    id: 2,
    email: "glydetek@gmail.com",
    name: "Yaw Nick",
    password: "12345",
  },
];

const AccountAcess = () => {
  const { login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const request = async () => {
    setError("");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Fill inputs!");
      setLoading(false);
    } else {
      let user = false;
      await users.forEach((data) => {
        if (data.email === email) if (data.password === password) login(data);
      });

      // if (user) login(user)
      // else {
      //   setLoading(false);
      //   setError("Unknown account!");
      // }
    }
  };

  return (
    <AccountAccessBody>
      <AccountAccessContainer>
        <AccountAccessDiv
          backgroundColor={colors.secondary}
          width={60}
          hide={true}
          style={{justifyContent: "center"}}
        >
        <>
          <IntroImg
            src={require("../assets/2440499.png")}
            style={{ width: 350, height: "auto", borderRadius: 10, marginBottom: 10 }}
            alt="Introduction"
          />
          <AppName>Field Record Guide</AppName>
          <AppDesc>
            A simple system for recording data in the field. Gather, save, and
            update any necessary data.
          </AppDesc>
          </>
        </AccountAccessDiv>
        <AccountAccessDiv backgroundColor="white" width={40}>
          <IntroIcon src={require("../assets/icon.png")} alt="icon" />
          <AppDesc style={{ color: "grey", marginTop: 20, marginBottom: 30 }}>
            Welcome to FRG
          </AppDesc>
          <AALabel>User name or Email</AALabel>
          <AAInput
            type={"email"}
            onChange={(event) => setEmail(event.target.value)}
          />

          <AALabel>Password</AALabel>
          <AAInput
            type={"password"}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: -10,
              marginBottom: 20,
            }}
          >
            <text
              style={{
                fontSize: 12,
                color: "red",
                flex: 1,
                textAlign: "center",
              }}
            >
              {error}
            </text>
            <text
              style={{
                fontSize: 12,
              }}
            >
              Forgot password?
            </text>
          </div>
          <GButton
            background={colors.accent}
            color={colors.primary}
            onClick={() => request()}
          >
            {loading ? (
              <ClipLoader loading={true} size={20} color={colors.secondary} />
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
