import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlaygrounds } from "../../features/playgroundSlice";
import card from "./card.module.sass";
import MCard from "./MCard";
import Header from "../Header";

export default function MCardSlider() {
  const dispatch = useDispatch("");
  const plays = useSelector((state) => state.playground.playgrounds);
  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className={card.main}>
        <div className={card.elements}>
          <div className={card.searching}>
            <div className={card.search}></div>
            <div className={card.cards_sorting}>
              <div className={card.sorting}></div>
              <div className={card.cards}>
                {plays.map((item) => {
                  return (
                    <MCard
                      id={item._id}
                      key={item._id}
                      name={item.name}
                      price={item.price}
                      photo={item.photos}
                      address={item.address}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={card.map}></div>
      </div>
    </>
  );
}
