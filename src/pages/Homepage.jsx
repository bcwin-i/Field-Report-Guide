import React, { useEffect, useState } from "react";
import { MdSpaceDashboard, MdGroupWork } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  AppDesc,
  AppName,
  IntroIcon,
} from "../components/AccountAccess/styles";
import { SidebarButtons } from "../components/Home/SidebarButtons";
import {
  BottomNavigation,
  BottomNavigationButton,
  HomeBody,
  HomeContainer,
  HomeSidebar,
  TitleBar,
} from "../components/Home/styles";
import { colors } from "../utils/colors";
import Dashboard from "./SubPages/Dashboard";
import {
  IconDashboard,
  IconGroups,
  IconPar,
  IconUser,
} from "../components/Home/styles";
import Groups from "./SubPages/Groups";

const Homepage = () => {
  const [sideNav, setSideNav] = useState(true);
  const [page, setPage] = useState("Dashboard");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  let r = useParams();

  useEffect(() => setPage(r?.dashboard.replace(":", "")), [r]);

  useEffect(() => {
    const data = JSON?.parse(localStorage.getItem("userData"));
    if (data?.auth) setUser(data.user);
  }, []);

  return (
    <HomeBody>
      <HomeSidebar sideNav={sideNav}>
        <BsArrowLeftSquareFill
          size={20}
          color={colors.primary}
          style={{ position: "absolute", right: 5, top: 5 }}
          cursor="pointer"
          onClick={() => setSideNav(false)}
        />
        <IntroIcon src={require("../assets/icon.png")} alt="icon" />
        <AppName
          style={{
            fontFamily: "Poppins-Light",
            fontSize: 15,
            marginBottom: 40,
          }}
        >
          Field Record Guide
        </AppName>
        <SidebarButtons title="Dashboard" active={page === "dashboard"}>
          <MdSpaceDashboard size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
        <SidebarButtons title="Groups" active={page === "groups"}>
          <MdGroupWork size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
        <SidebarButtons title="Profile at Risk" active={page === "par"}>
          <TbChartInfographic size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
        <div style={{ flex: 1 }} />
        <SidebarButtons title="Logout">
          <IoMdLogOut size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
      </HomeSidebar>
      <HomeContainer sideNav={sideNav}>
        {sideNav ? null : (
          <BsArrowRightSquareFill
            size={20}
            color={colors.primary}
            style={{ position: "absolute", left: 5, top: 5 }}
            cursor="pointer"
            onClick={() => setSideNav(true)}
          />
        )}
        <TitleBar>
          <AppName style={{ margin: 0, textTransform: "capitalize" }}>
            {page === "par" ? "Profile at Risk" : page}
          </AppName>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AppDesc
              style={{
                color: colors.primary,
                marginRight: 7,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
            >
              {user.name}
            </AppDesc>
            <FaUserCircle size={30} color={colors.secondary} />
          </div>
        </TitleBar>
        <div style={{ flex: 1, overflowY: "scroll" }}>
          {page === "dashboard" ? <Dashboard /> : <Groups />}
        </div>
        <BottomNavigation>
          <BottomNavigationButton
            onClick={() =>
              navigate(
                `/homepage/:dashboard
               `
              )
            }
          >
            <IconDashboard active={page === "dashboard"} />
            <AppDesc style={{ color: colors.primary, userSelect: "none" }}>
              Home
            </AppDesc>
          </BottomNavigationButton>
          <BottomNavigationButton
            onClick={() =>
              navigate(
                `/homepage/:groups
               `
              )
            }
          >
            <IconGroups active={page === "groups"} />
            <AppDesc style={{ color: colors.primary, userSelect: "none" }}>
              Groups
            </AppDesc>
          </BottomNavigationButton>
          <BottomNavigationButton
            onClick={() =>
              navigate(
                `/homepage/:par
               `
              )
            }
          >
            <IconPar active={page === "par"} />
            <AppDesc style={{ color: colors.primary, userSelect: "none" }}>
              PAR
            </AppDesc>
          </BottomNavigationButton>
          <BottomNavigationButton
            onClick={() =>
              navigate(
                `/homepage/:profile
               `
              )
            }
          >
            <IconUser active={page === "profile"} />
            <AppDesc style={{ color: colors.primary, userSelect: "none" }}>
              Profile
            </AppDesc>
          </BottomNavigationButton>
        </BottomNavigation>
      </HomeContainer>
    </HomeBody>
  );
};

export default Homepage;
