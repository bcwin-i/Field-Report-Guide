import React, { useContext, useState } from "react";
import UserContext from "../../context/Authentication/UserContext";
import { useNavigate } from "react-router-dom";
import { SidebarButtonContainer } from "./styles";

export const SidebarButtons = ({ children, ...props }) => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <SidebarButtonContainer
      onClick={() =>
        props.title === "Logout"
          ? logout()
          : navigate(
              `/homepage/:${
                props.title.toLowerCase() === "profile at risk"
                  ? "par"
                  : props.title.toLowerCase()
              }`,
              
            )
      }
      active={props.active}
    >
      {children}
      {props.title}
    </SidebarButtonContainer>
  );
};
