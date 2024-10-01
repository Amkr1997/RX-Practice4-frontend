import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMoviesAsync = createAsyncThunk("fetch/Movie", async () => {
  try {
    const response = await axios.get(
      `https://rx-practice2-backend.vercel.app/movies`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addMovieAsync = createAsyncThunk(
  "add/Movie",
  async (movieToAdd) => {
    try {
      const response = await axios.post(
        `https://rx-practice2-backend.vercel.app/movies`,
        movieToAdd
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateMovieAsync = createAsyncThunk(
  "update/Movie",
  async (movieData) => {
    try {
      const response = await axios.post(
        `https://rx-practice2-backend.vercel.app/movies/${movieData._id}`,
        movieData
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteMovieAsync = createAsyncThunk(
  "delete/Movie",
  async (movieId) => {
    try {
      const response = await axios.delete(
        `https://rx-practice2-backend.vercel.app/movies/${movieId}`
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(
      fetchMoviesAsync.pending,
      (state) => void (state.status = "loading")
    );

    builder.addCase(fetchMoviesAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.movies = action.payload;
    });

    builder.addCase(fetchMoviesAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(
      addMovieAsync.pending,
      (state) => void (state.status = "loading")
    );

    builder.addCase(addMovieAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.movies.push(action.payload);
    });

    builder.addCase(addMovieAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(
      updateMovieAsync.pending,
      (state) => void (state.status = "loading")
    );

    builder.addCase(updateMovieAsync.fulfilled, (state, action) => {
      state.status = "success";

      const existingMovieIndex = state.movies.findIndex(
        (movie) => movie._id === action.payload._id
      );
      state.movies[existingMovieIndex] = action.payload;
    });

    builder.addCase(updateMovieAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    builder.addCase(
      deleteMovieAsync.pending,
      (state) => void (state.status = "loading")
    );

    builder.addCase(deleteMovieAsync.fulfilled, (state, action) => {
      state.status = "success";
      state.movies = state.movies.filter(
        (movie) => movie._id !== action.payload._id
      );
    });

    builder.addCase(deleteMovieAsync.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export default moviesSlice;
