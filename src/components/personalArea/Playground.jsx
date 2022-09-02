import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./profile.module.sass";
const Playground = ({ name, address, sportName, price, id }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={style.cardPlayground}>
        <div>Имя: {name}</div>
        <div>Адресс: {address}</div>
        <div>Вид: {sportName}</div>
        <div>Цена: {price}</div>
        <button onClick={() => navigate(`/playground/${id}`)} className={style.account}>Подробнее</button>
        <button className={style.account}>Отменить</button>
      </div>
    </div>
  );
};

export default Playground;
