import React, { useContext, useState } from "react";
import UserContext from "../../context/Authentication/UserContext";
import { useNavigate } from "react-router-dom";
// import UserContext from "../../context/Auth/UserContext";
import { colors } from "../../utils/colors";

export const SidebarButtons = ({ children, ...props }) => {
  const [hover, setHover] = useState(false);
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <button
      style={{
        border: "none",
        background: "none",
        color: props.active ? colors.accent : colors.primary,
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        width: "100%",
        fontWeight: "400",
        backgroundColor: props.active
          ? colors.primary
          : hover
          ? colors.secondary
          : "transparent",
        borderRadius: 5,
        transition: "all 0.5s ease-in-out",
        padding: 15,
        paddingLeft: 20,
        cursor: "pointer",
        marginBottom: 10,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        props.title === "Logout"
          ? logout()
          : navigate(
              `/homepage/:${
                props.title.toLowerCase() === "profile at risk"
                  ? "par"
                  : props.title.toLowerCase()
              }`,
              { replace: true }
            )
      }
    >
      {children}
      {props.title}
    </button>
  );
};
