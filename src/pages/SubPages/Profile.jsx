import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AppName } from "../../components/AccountAccess/styles";
import { GButton } from "../../components/Global/styles";
import { DashboardBody } from "../../components/Home/Dashboard/styles";
import { GroupName } from "../../components/Home/Groups/styles";
import UserContext from "../../context/Authentication/UserContext";
import { colors } from "../../utils/colors";

const Profile = () => {
    const { logout } = useContext(UserContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    const data = JSON?.parse(localStorage.getItem("userData"));
    if (data?.auth) setUser(data.user);
  }, []);
  return (
    <DashboardBody
      style={{
        display: "flex",
        alignContents: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FaUserCircle size={70} color={colors.secondary} />
      <GroupName style={{marginBottom: 20}}>{user.name}</GroupName>
      <GButton background={colors.primary} color={colors.accent} onClick={()=> logout()}>
        Sign out
      </GButton>
    </DashboardBody>
  );
};

export default Profile;
