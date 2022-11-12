import { configureStore } from '@reduxjs/toolkit';
import {celsiusTypeSlice, weatherSlice} from '../features/weather/weatherSlice'

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    celsiusType: celsiusTypeSlice.reducer
  }
})
