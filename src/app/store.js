import { configureStore } from "@reduxjs/toolkit";
import playground from "../features/playgroundSlice";
import auth from "../features/authSlice";
export const store = configureStore({
  reducer: {
    playground,
    auth,
  },
});
