import React from "react";
import style from "./profile.module.sass";
const Playground = ({ name, address, sportName, price }) => {
  return (
    <div>
      <div className={style.cardPlayground}>
        <div>Имя: {name}</div>
        <div>Адресс: {address}</div>
        <div>Вид: {sportName}</div>
        <div>Цена: {price}</div>
        <button className={style.account}>Подробнее</button>
        <button className={style.account}>Отменить</button>
      </div>
    </div>
  );
};

export default Playground;
