import React from "react";
import { useNavigate } from "react-router-dom";
import card from "./card.module.sass";
import { useSelector } from 'react-redux';
import { RiMapPinLine } from 'react-icons/ri'

export default function MCard(props) {
  const navigate = useNavigate();
  const { id, name, address, photo, price } = props;
  const plays = useSelector((state) => state.playground.playgrounds.find((item) => item._id === id));
  
  return (
    <div className={card.page}>
      <div className={card.images}>
        <img src={`http://localhost:3030/${plays.photos[0].name}`} alt="" />
      </div>
      <div className={card.information}>
        <div className={card.name}>{name}</div>
        <div className={card.address}><RiMapPinLine />  {address}</div>
        <div className={card.price}>{price} ₽</div>
      </div>
    </div>
  );
}
