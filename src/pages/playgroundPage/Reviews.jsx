import { addReview } from "../../features/playgroundSlice";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import play from "./play.module.sass";
import { useState } from "react";
import React from "react";

const Reviews = () => {
  // Для input
  const [review, setReview] = useState("");

  // Для input-а звезд
  const [star, setStars] = useState(5);

  const dispatch = useDispatch();
  const { id } = useParams();

  // Забираем именно нужное нам место с помощью find
  const playground = useSelector((state) =>
    state.playground.playgrounds.find((item) => item._id === id)
  );
  const loading = useSelector((state) => state.playground.loading);

  //Суммируем все оценки
  let rating_1 = 0;
  for (let item of playground.reviews) {
    rating_1 += item.stars;
  }
  //Находим среднюю оценку
  const rating = rating_1 / playground.reviews.length;

  const handleReview = (e) => {
    setReview(e.target.value);
  };

  const handleAddReview = () => {
    dispatch(addReview({ review, star, id }));
    setReview("");
  };
  if (!loading && playground.reviews) {
    return (
      <div className={play.container}>
        <div>
          <h2>Отзывы</h2>
        </div>
        <div className={play.content}>
          {playground.reviews.length ? (
            <div>
              {playground.reviews.map((item) => {
                return (
                  <div key={item._id} className={play.reviewUser}>
                    <div className={play.starAndReview}>
                      <div className={play.textReview}>{item.user.name}</div>
                      <Rating name="read-only" value={item.stars} readOnly />
                    </div>
                    <div className={play.text}>
                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>Ваш отзыв будет первым</div>
          )}
        </div>
        <div className={play.starsAndInputReview}>
          <span>Ваша оценка</span>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              onChange={(event) => setStars(event.target.value)}
            />
          </Stack>
          <span>Ваш отзыв</span>
          <div className={play.inputAndButton}>
            <TextField
              className={play.inputReview}
              id="outlined-basic"
              label="Отзыв"
              variant="outlined"
              value={review}
              onChange={handleReview}
            />
            <Button
              className={play.button}
              variant="contained"
              href="#contained-buttons"
              onClick={handleAddReview}
              disabled={!review}
            >
              Добавить
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Reviews;
