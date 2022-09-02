import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlaygrounds,
  rentPlayground,
} from "../../features/playgroundSlice";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import booking from './booking.module.sass';

function BookingForm(params) {
  const { id } = params;
  const dispatch = useDispatch();
  const plays = useSelector((state) => state.playground.playgrounds);
  const playground = plays.find((item) => item._id === id);
  const [date, setData] = React.useState(null);
  const [time, setTime] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const filtration = {
    date,
    time,
    duration,
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
    const bookings = playground.booking;
    // if (bookings.length) {
    //   for (let i of bookings) {
    //     console.log(new Date(i.from));
    //   }
    // }
    const from = new Date(filtration.date);
    from.setHours(filtration.time, 0, 0, 0);
    const to = new Date(filtration.date);
    to.setHours(filtration.time + filtration.duration, 0, 0, 0);
    dispatch(
      rentPlayground({
        from: new Date(from).getTime(),
        to: new Date(to).getTime(),
        id: id,
      })
    );
    setData(null);
    setTime("");
    setDuration("");
  };

  if (playground) {
    const scheduleNumFrom = +playground.schedule.split(" - ")[0].split(":")[0];
    const scheduleNumTo = +playground.schedule.split(" - ")[1].split(":")[0];
    const bookings = playground.booking;
    const pickedDate = new Date(date).getTime();

    const todaysBookings = bookings.filter((item) => {
      return item.from - pickedDate < 86400000 && item.from - pickedDate > 0;
    });

    const todaysBookingHours = todaysBookings.map((item) => {
      return {
        ...item,
        from: new Date(item.from).getHours(),
        to: new Date(item.to).getHours(),
      };
    });

    let scheduleOptions = [];
    for (let i = scheduleNumFrom; i <= scheduleNumTo; i++) {
      const isInBooking = todaysBookingHours.find((item) => {
        return i >= item.from && i < item.to;
      });

      if (isInBooking) {
        scheduleOptions.push(
          <MenuItem disabled value={i}>
            <div className="time-num">
              <span>-</span>
            </div>
          </MenuItem>
        );
      } else {
        scheduleOptions.push(
          <MenuItem value={i}>
            <div className="time-num">
              <span>{i <= 9 ? `0${i}:00` : `${i}:00`}</span>
            </div>
          </MenuItem>
        );
      }
    }
    return (
      <div className={booking.booking}>
        <div
          className={booking.data}
          style={{
            width: "150px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              className={booking.d}
              label="Выбор даты"
              value={date}
              onChange={(newValue) => {
                setData(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              minDate={today}
            />
          </LocalizationProvider>
        </div>
        <div className={booking.time}>
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-play-label">Время</InputLabel>
              <Select
                className={booking.d}
                labelId="demo-simple-play-label"
                id="demo-simple-play"
                value={time}
                label="Вид спорта"
                onChange={handleTime}
              >
                {scheduleOptions}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className={booking.duration}>
          <Box sx={{ maxWidth: 110, minWidth: 110 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-play-label">Период</InputLabel>
              <Select
                className={booking.d}
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
          className={booking.button}
          variant="contained"
          href="#contained-buttons"
          onClick={handleFiltration}
          disabled={!date || !time || !duration}
        >
          Забронировать
        </Button>
        <ToastContainer />
      </div>
    );
  }
}
export default BookingForm;
