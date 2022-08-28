import { configureStore } from "@reduxjs/toolkit";
import sport from '../features/sportSlice'
import image from '../features/imageSlice'

export const store = configureStore({
  reducer: {
    sport,
    image
  }
})