import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlaygrounds } from "../../features/playgroundSlice";
import card from "./card.module.sass";
import MCard from "./MCard";
import Header from "../Header";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { YMaps, Map, ListBox, SearchControl } from "@pbe/react-yandex-maps";
import { BsSearch } from "react-icons/bs";

export default function MCardSlider() {
  const dispatch = useDispatch("");
  const plays = useSelector((state) => state.playground.playgrounds);
  console.log(plays);
  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, [dispatch]);

  const [checked, setChecked] = React.useState('');
  const [value, setValue] = React.useState('');

  const filteredPlaygrounds = plays.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())   
  })

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
                  placeholder="Введите текст..."
                />
                <BsSearch className={card.search_icon}/>
              </div>
              <button className={card.button_search}>Найти</button>
            </div>
            <div className={card.cards_sorting}>
              <div className={card.sorting}>
                <div className={card.time}>
                  <p>Цена за часа</p>
                  <div className={card.time_checkbox}>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      до 1000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      1000 - 2000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      2000 - 3000 ₽
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />{" "}
                      Газон
                    </div>
                    <div className={card.time_price}>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
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
                center: [43.16689676691209, 44.80166469187365],
                zoom: 10,
              }}
              width={"100%"}
              height={"100vh"}
            >
              <SearchControl
                options={{
                  float: "right",
                }}
              />
              <ListBox
                data={{
                  content: "Список отметок",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </>
  );
}
