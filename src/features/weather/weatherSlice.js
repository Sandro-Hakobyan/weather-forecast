import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import initialData from "./apiEx.json";

const initialState = {
  info: false,
  weatherData: initialData,
  loading: false,
  error: false,
};

export const getWeatherData = createAsyncThunk(
  "weatherData/getWeatherData",
  async (inputValue, action) => {
    if (inputValue) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ce71ac03bd268ca09590d9785ba974ea`
      );
      const imgResponse = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${inputValue}&client_id=SjCVbOnilaF_6KoTzLIFs430CnSIUKu-MpQXz-ADUa0`
      );
      const all = {
        ...response.data,
        ...imgResponse.data,
      };
      return all;
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateData(state, action) {
      console.log(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state) => {
      state.weatherData = {};
      state.loading = true;
      state.error = false;
      state.info = false;
    });
    builder.addCase(getWeatherData.fulfilled, (state, { payload }) => {
      state.weatherData = payload;
      state.loading = false;
      state.error = false;
      state.info = true;
    });
    builder.addCase(getWeatherData.rejected, (state) => {
      state.weatherData = {};
      state.loading = false;
      state.error = true;
      state.info = false;
    });
  },
});

export const { updateData } = weatherSlice.actions;

export const celsiusTypeSlice = createSlice({
  name: "celsiusType",
  initialState: true,
  reducers: {
    celsiusOn(state, action) {
      return true;
    },
    celsiusOff(state, action) {
      return false;
    },
  },
});

export const { celsiusOff, celsiusOn } = celsiusTypeSlice.actions;
