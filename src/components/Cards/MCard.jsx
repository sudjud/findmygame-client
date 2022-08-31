import React from "react";
import { useNavigate } from "react-router-dom";
import card from "./card.module.sass";


export default function MCard(props) {
  const navigate = useNavigate();
  const { id, name, address, photo, price } = props;
  let photos;
  if (photo.length) {
    photos = photo.map(item => {
      return <img src={`http://localhost:3030/${item.name}`} alt="" />
    })
  }
  
  return (
    <div className={card.page}>
      {photos}
    </div>
  );
}
