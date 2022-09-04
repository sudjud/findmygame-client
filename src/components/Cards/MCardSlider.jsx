import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlaygrounds } from "../../features/playgroundSlice";
import card from "./card.module.sass";
import MCard from "./MCard";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { YMaps, Map, SearchControl, Placemark } from "@pbe/react-yandex-maps";
import { BsSearch } from "react-icons/bs";
import { IoFootballOutline } from "react-icons/io5";

export default function MCardSlider() {
  const dispatch = useDispatch("");
  const plays = useSelector((state) => state.playground.playgrounds);

  const point = plays.map((item) => {
    return item.coordinates;
  });

  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, [dispatch]);

  const [checked, setChecked] = React.useState("");
  const [value, setValue] = React.useState("");

  const filteredPlaygrounds = plays.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  const [checkBoxes, setCheckboxes] = React.useState({
    one : false,
    two: false,
    three: false,
    four: false

  })  
  const handlerPrice = (e) => {
    setCheckboxes({
      ...checkBoxes,
      [e.name]: e.target.checked
    })
  }

  return (
    <>
      <div className={card.main}>
        <div className={card.elements}>
          <div className={card.searching}>
            <div className={card.search}>
              <div className={card.search_container}>
                <input
                  className={card.input_search}
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                  autoFocus
                  autoComplete="off"
                  placeholder="Название площадки..."
                />
                <BsSearch className={card.search_icon} />
              </div>
              <button className={card.button_search}>Найти</button>
            </div>
            <div className={card.cards_sorting}>
              <div className={card.sorting}>
                <div className={card.time}>
                  <p>Цена за час</p>
                  <div className={card.time_checkbox}>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checkBoxes.one}
                        name='one'
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      до 1000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checkBoxes.two}
                        name='two'
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      1000 - 2000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checkBoxes.three}
                        name='three'
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      2000 - 3000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        name='four'
                        checked={checkBoxes.four}
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      3000 - 4000 ₽
                    </div>
                  </div>
                </div>
                <div className={card.surfase}>
                  <p>Покрытие </p>
                  <div className={card.time_checkbox}>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      Газон
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handlerPrice}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      Паркет
                    </div>
                  </div>
                </div>
              </div>
              <div className={card.cards}>
                {filteredPlaygrounds.map((item) => {
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
        <div className={card.map}>
          <YMaps>
            <Map
              defaultState={{
                center: [43.32309, 45.695081],
                zoom: 12,}}
              width={"100%"}
              height={"100vh"}
            >
              {point.map((item) => {
                const [point_, point_2] = item.split(" ");
                const point_1 = point_.slice(0, point_.length - 1);
                return (
                  <Placemark
                    modules={[
                      "geoObject.addon.balloon",
                      "geoObject.addon.hint",
                    ]}
                    options={{ iconColor: "red" }}
                    geometry={[+point_1, +point_2]}
                    preset="islands#redSportIcon"
                  />
                );
              })}
              <SearchControl
                options={{
                  float: "right",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </>
  );
}
