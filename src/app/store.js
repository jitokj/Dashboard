import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../components/features/weatherSlice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
