import { configureStore } from "@reduxjs/toolkit";
import fetchGeoSlice from "./features/fetchGeoSlice";
import counterSlice from "./features/counterSlice";

const store = configureStore({
  reducer: {
    geoApi: fetchGeoSlice,
    counter: counterSlice
  }
});

export default store;