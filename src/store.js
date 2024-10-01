import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/moviesSlics";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});

export default store;
