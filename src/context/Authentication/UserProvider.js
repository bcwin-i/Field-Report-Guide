import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ user: "", auth: false });
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data?.auth) {
      setUser(data);
      console.log("Url: ",window.location.href)
      navigate(window.location.href);
    } else navigate("/");
  }, []);

  useEffect(() => {
    console.log("New user: ", user);
    user.auth
      ? navigate("/homepage/:dashboard", {
          replace: true,
        })
      : navigate("/");
  }, [user]);

  const login = (userData) => {
    setUser((user) => ({
      user: userData,
      auth: true,
    }));

    localStorage.setItem(
      "userData",
      JSON.stringify({ user: userData, auth: true })
    );
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      user: {},
      auth: false,
    }));

    localStorage.removeItem("userData");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
