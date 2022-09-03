import React from "react";
import style from "./profile.module.sass";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutTeam } from "../../features/teamSlice";

const MyGame = ({ namePlayer, emailPlayer, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTeam = (id) => {
    console.log(id);
    dispatch(logoutTeam(id));
  };
  return (
    <div className={style.cardGame}>
      <div>
        <div>Имя капитана: {namePlayer}</div>
        <div>Почта: {emailPlayer}</div>
      </div>
      <button
        onClick={() => navigate(`/playground/${id}`)}
        className={style.account}
      >
        Подробнее
      </button>
      <button onClick={() => handleDeleteTeam(id)} className={style.account}>
        Покинуть
      </button>
    </div>
  );
};

export default MyGame;
