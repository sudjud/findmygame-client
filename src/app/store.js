import { configureStore } from "@reduxjs/toolkit";
import sport from '../features/sportSlice'
import image from '../features/imageSlice'
import playground from '../features/playgroundSlice'

export const store = configureStore({
  reducer: {
    sport,
    image,
    playground
  }
})
