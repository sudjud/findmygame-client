import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import select from "../filtration/select.module.sass";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

const Filtration = () => {
  const [data, setData] = React.useState(null);
  const [sport, setSport] = React.useState("");
  const [time, setTime] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const filtration = {
    sport: sport,
    date: data,
    time: time,
    duration: duration
  }

  const handleChange = (event) => {
    setSport(event.target.value);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleFiltration = () => {
    console.log(filtration);
  }

  return (
    <div className={select.header}>
      <div className={select.sport}>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Вид спорта</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sport}
              label="Вид спорта"
              onChange={handleChange}
            >
              <MenuItem value={"football"}>Футбол</MenuItem>
              <MenuItem value={"basketball"}>Баскетбол</MenuItem>
              <MenuItem value={"tennis"}>Теннис</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={select.data} style={{ width: "150px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Выбор даты"
            value={data}
            onChange={(newValue) => {
              setData(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className={select.time}>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Время</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
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
      <div className={select.duration}>
        <Box sx={{ maxWidth: 110, minWidth: 110}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Период</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={duration}
              label="Вид спорта"
              onChange={handleDuration}
            >
              <MenuItem value={1}> 1 час</MenuItem>
              <MenuItem value={2}>2 часа </MenuItem>
              <MenuItem value={3}>3 часа</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <Button
        className={select.button}
        variant="contained"
        href="#contained-buttons"
        onClick={handleFiltration}
      >
        Найти
      </Button>
    </div>
  );
};

export default Filtration;
