import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaygrounds } from "../../features/playgroundSlice";
import play from "./play.module.sass";
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiHighGrass } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Header from "../../components/Header";

const Playground = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const plays = useSelector((state) => state.playground.playgrounds);
  const playground = plays.find((item) => item._id === id);
  const [data, setData] = React.useState(null);
  const [time, setTime] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const filtration = {
    date: data,
    time: time,
    duration: duration,
  };
  const today = new Date();

  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, []);

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleFiltration = () => {
    console.log(filtration);
  };

  if (playground) {
    const scheduleNumFrom = +playground.schedule.split(' - ')[0].split(':')[0]
    const scheduleNumTo = +playground.schedule.split(' - ')[1].split(':')[0]
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
        <Header />
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

          <div className={play.booking}>
            <div
              className={play.data}
              style={{
                width: "150px",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  className={play.d}
                  label="Выбор даты"
                  value={data}
                  onChange={(newValue) => {
                    setData(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  minDate={today}
                />
              </LocalizationProvider>
            </div>
            <div className={play.time}>
              <Box sx={{ minWidth: 150 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-play-label">Время</InputLabel>
                  <Select
                    className={play.d}
                    labelId="demo-simple-play-label"
                    id="demo-simple-play"
                    value={time}
                    label="Вид спорта"
                    onChange={handleTime}
                  >
                    <MenuItem value={25}>
                      <div className="time-num">
                        <span>Любое время</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={1}>
                      <div className="time-num">
                        <span>01:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={2}>
                      <div className="time-num">
                        <span>02:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={3}>
                      <div className="time-num">
                        <span>03:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={4}>
                      <div className="time-num">
                        <span>04:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={5}>
                      <div className="time-num">
                        <span>05:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={6}>
                      <div className="time-num">
                        <span>06:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={7}>
                      <div className="time-num">
                        <span>07:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={8}>
                      <div className="time-num">
                        <span>08:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={9}>
                      <div className="time-num">
                        <span>09:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={10}>
                      <div className="time-num">
                        <span>10:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={11}>
                      <div className="time-num">
                        <span>11:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={12}>
                      <div className="time-num">
                        <span>12:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={13}>
                      <div className="time-num">
                        <span>13:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={14}>
                      <div className="time-num">
                        <span>14:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={15}>
                      <div className="time-num">
                        <span>15:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={16}>
                      <div className="time-num">
                        <span>16:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={17}>
                      <div className="time-num">
                        <span>17:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={18}>
                      <div className="time-num">
                        <span>18:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={19}>
                      <div className="time-num">
                        <span>19:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={20}>
                      <div className="time-num">
                        <span>20:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={21}>
                      <div className="time-num">
                        <span>21:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={22}>
                      <div className="time-num">
                        <span>22:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={23}>
                      <div className="time-num">
                        <span>23:00</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={24}>
                      <div className="time-num">
                        <span>00:00</span>
                      </div>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={play.duration}>
              <Box sx={{ maxWidth: 110, minWidth: 110 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-play-label">Период</InputLabel>
                  <Select
                    className={play.d}
                    labelId="demo-simple-play-label"
                    id="demo-simple-play"
                    value={duration}
                    label="Вид спорта"
                    onChange={handleDuration}
                  >
                    <MenuItem value={1}>1 час</MenuItem>
                    <MenuItem value={2}>2 часа </MenuItem>
                    <MenuItem value={3}>3 часа</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <Button
              className={play.button}
              variant="contained"
              href="#contained-buttons"
              onClick={handleFiltration}
            >
              Забронировать
            </Button>
          </div>
        </div>
      </>
    );
  }
};

export default Playground;
