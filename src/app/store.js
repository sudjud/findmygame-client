import { configureStore } from "@reduxjs/toolkit";
import sport from '../features/sportSlice'
import image from '../features/imageSlice'
import playground from '../features/playgroundSlice'
import auth from "../features/authSlice";

export const store = configureStore({
  reducer: {
    sport,
    image,
    playground,
    auth
  }
})
