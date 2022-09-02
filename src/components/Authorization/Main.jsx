import React from "react";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../features/authSlice";

const Main = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(deleteToken());
    localStorage.removeItem("token");
  };
  return (
    <div>
      <h1>Главная страница!</h1>
      <button onClick={() => handleLogout()}>Выйти</button>
    </div>
  );
};

export default Main;
