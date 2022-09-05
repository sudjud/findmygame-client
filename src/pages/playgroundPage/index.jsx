import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaygrounds } from "../../features/playgroundSlice";
import play from "./play.module.sass";
import { RiMapPin2Line } from "react-icons/ri";
import { GiHighGrass } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import BookingForm from "../../components/Booking/Form";
import Reviews from "./Reviews";

const Playground = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const plays = useSelector((state) => state.playground.playgrounds);
  const playground = plays.find((item) => item._id === id);

  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, []);

  if (playground) {
    const {
      name,
      address,
      schedule,
      surface,
      covered,
      facilities,
      price,
      sport,
      photos,
    } = playground;
    return (
      <>
        <div className={play.main}>
          <div className={play.head}>
            <div className={play.title}>
              <div className={play.name}>{name}</div>
              <div className={play.price}>{price}₽ в час </div>
              <div className={play.address}>
                <RiMapPin2Line className={play.map} />
                {address}
              </div>
            </div>
            <div className={play.information}>
              <div className={play.plays_playground}> Игры на плошадке</div>
              <div className={play.service_f}>{sport.name}</div>
              <div className={play.facilities}>
                <div>
                  <span>Сервис на площадке</span>
                  <div className={play.service}>
                    {facilities.dressroom && (
                      <div className={play.service_b}>Раздевалки</div>
                    )}
                    {facilities.shower && (
                      <div className={play.service_b}>Душевые</div>
                    )}
                    {facilities.lighting && (
                      <div className={play.service_b}>Освещение</div>
                    )}
                    {facilities.parking && (
                      <div className={play.service_b}>Парковка</div>
                    )}
                    {facilities.inventory && (
                      <div className={play.service_b}>Инвентарь</div>
                    )}
                  </div>
                </div>
                <div className={play.icon}>
                  <ul>
                    <li>
                      <GiHighGrass className={play.icon_li} />
                      {surface === "Grass (n)"
                        ? "Натуральный газон"
                        : surface === "Grass (s)"
                        ? "Искуственная трава"
                        : surface === "Parquet"
                        ? "Паркет"
                        : ""}
                    </li>
                    <li>
                      <GiSoccerField className={play.icon_li} />
                      {covered ? "Крытый" : "Открытый"}
                    </li>
                    <li>
                      <BsClock className={play.icon_li} />
                      {schedule}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <BookingForm id={id} />
        </div>
          <Reviews/>
      </>
    );
  }
};

export default Playground;
