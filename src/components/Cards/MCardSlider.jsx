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
import MapBaloonn from "./MapBaloonn";

export default function MCardSlider() {
  const dispatch = useDispatch("");
  const [value, setValue] = React.useState("");
  const [checkBoxes, setCheckboxes] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    synGrass: false,
    natGrass: false,
    parquet: false,
  });
  const filteredPlaygrounds = useSelector((state) =>
    state.playground.playgrounds
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .filter((item) => (checkBoxes.first ? item.price <= 1000 : true))
      .filter((item) =>
        checkBoxes.second ? item.price <= 2000 && item.price >= 1000 : true
      )
      .filter((item) =>
        checkBoxes.third ? item.price <= 3000 && item.price >= 2000 : true
      )
      .filter((item) => (checkBoxes.fourth ? item.price >= 3000 : true))
      .filter((item) =>
        checkBoxes.synGrass
          ? (item.surface === "Grass (s)") === checkBoxes.synGrass
          : true
      )
      .filter((item) =>
        checkBoxes.natGrass
          ? (item.surface === "Grass (n)") === checkBoxes.natGrass
          : true
      )
      .filter((item) =>
        checkBoxes.parquet
          ? (item.surface === "Parquet") === checkBoxes.parquet
          : true
      )
  );

  const point = filteredPlaygrounds.map((item) => {
    return item.coordinates;
  });

  console.log(filteredPlaygrounds);

  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, [dispatch]);

  const handlerCheckbox = (e) => {
    setCheckboxes({
      ...checkBoxes,
      [e.target.name]: e.target.checked,
    });
    // console.log(e.target.name, e.target.checked);
  };

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
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="first">До 1000₽</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.first}
                        type="checkbox"
                        name="first"
                        id="first"
                      />
                    </div>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="second">1000-2000₽</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.second}
                        type="checkbox"
                        name="second"
                        id="second"
                      />
                    </div>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="third">2000-3000₽</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.third}
                        type="checkbox"
                        name="third"
                        id="third"
                      />
                    </div>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="fourth">от 3000₽</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.fourth}
                        type="checkbox"
                        name="fourth"
                        id="fourth"
                      />
                    </div>
                  </div>
                </div>
                <div className={card.surfase}>
                  <p>Покрытие </p>
                  <div className={card.time_checkbox}>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="synGrass">Синтетический газон</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.synGrass}
                        type="checkbox"
                        name="synGrass"
                        id="synGrass"
                      />
                    </div>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="natGrass">Натуральный газон</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.natGrass}
                        type="checkbox"
                        name="natGrass"
                        id="natGrass"
                      />
                    </div>
                    <div className={card.checkbox__wrapper}>
                      <label htmlFor="parquet">Паркет</label>
                      <input
                        onChange={handlerCheckbox}
                        value={checkBoxes.parquet}
                        type="checkbox"
                        name="parquet"
                        id="parquet"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={card.cards__wrapper}>
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
        </div>
        <div className={card.map}>
          <YMaps>
            <Map
              defaultState={{
                center: [43.32309, 45.695081],
                zoom: 12,
              }}
              width={"100%"}
              height={"90vh"}
            >
              {filteredPlaygrounds.map((item) => {
                return (
                  <MapBaloonn
                    key={item._id}
                    id={item._id}
                    point={item.coordinates}
                    name={item.name}
                    address={item.address}
                    photos={item.photos}
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
