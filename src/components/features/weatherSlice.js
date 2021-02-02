import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    selectedWeather: null,
  },
  reducers: {
    selectWeather: (state, action) => {
      state.selectedWeather = action.payload;
    },
  },
});

export const { selectWeather } = weatherSlice.actions;

export const dataWeather = (state) => state.weather.selectedWeather;

export default weatherSlice.reducer;
