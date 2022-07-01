import React, { useState } from "react";
import { MdSpaceDashboard, MdGroupWork } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import { AppName, IntroIcon } from "../components/AccountAccess/styles";
import { SidebarButtons } from "../components/Home/SidebarButtons";
import {
  HomeBody,
  HomeContainer,
  HomeSidebar,
} from "../components/Home/styles";
import { colors } from "../utils/colors";

const Homepage = () => {
  const [sideNav, setSideNav] = useState(true);

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
        <SidebarButtons title="Dashboard" active={true}>
          <MdSpaceDashboard size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
        <SidebarButtons title="Groups" active={false}>
          <MdGroupWork size={16} style={{ marginRight: 10 }} />
        </SidebarButtons>
        <SidebarButtons title="Profile at Risk" active={false}>
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
      </HomeContainer>
    </HomeBody>
  );
};

export default Homepage;
