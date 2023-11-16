import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    try {
      sessionStorage.setItem("token", JSON.stringify(token));
      sessionStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const http = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    http,
    token,
    user,
    setToken: saveToken,
    getToken,
    logout,
  };
}

export default useAuth;
