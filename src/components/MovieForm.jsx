import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAsync, updateMovieAsync } from "../features/moviesSlics";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";

const MovieForm = () => {
  const [movieData, setMovie] = useState({
    name: "",
    director: "",
    genre: "",
  });
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieData.name && movieData.director && movieData.genre) {
      const newMovie = {
        movieTitle: movieData.name
          .split(" ")
          .map((movie) => movie.charAt(0).toUpperCase() + movie.slice(1))
          .join(" "),
        director: movieData.director
          .split(" ")
          .map((movie) => movie.charAt(0).toUpperCase() + movie.slice(1))
          .join(" "),
        genre: movieData.genre
          .split(" ")
          .map((movie) => movie.charAt(0).toUpperCase() + movie.slice(1))
          .join(" "),
      };

      state
        ? dispatch(updateMovieAsync({ ...newMovie, _id: state._id }))
        : dispatch(addMovieAsync(newMovie));

      setShowError(false);

      setMovie({
        name: "",
        director: "",
        genre: "",
      });
    }
    if (
      movieData.name === "" ||
      movieData.director === "" ||
      movieData.genre === ""
    ) {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (state) {
      setMovie({
        name: state.movieTitle,
        director: state.director,
        genre: state.genre,
      });
    }
  }, []);

  return (
    <>
      <Nav />
      <section className="container py-4 mt-2">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 className="pt-2 pb-5 display-2 fw-normal text-center">
              Add Movie
            </h1>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control w-100"
                placeholder="Movie Title"
                name="name"
                value={movieData.name}
                onChange={handleChange}
              />{" "}
              <br />
              <input
                type="text"
                className="form-control w-100"
                placeholder="Director"
                name="director"
                value={movieData.director}
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                className="form-control w-100"
                placeholder="Genre"
                name="genre"
                value={movieData.genre}
                onChange={handleChange}
              />
              <br />
              {showError && (
                <p className="text-danger fw-medium fs-5 text-center">
                  Fill complete form first
                </p>
              )}
              <button className="btn btn-success btn-sm w-100 py-2">Add</button>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </section>
    </>
  );
};

export default MovieForm;
