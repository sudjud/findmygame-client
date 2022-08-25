import { configureStore } from "@reduxjs/toolkit";
import playground from '../features/playgroundSlice'
export const store = configureStore({
  reducer: {
    playground
  }
});