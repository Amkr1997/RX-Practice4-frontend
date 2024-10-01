import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAsync } from "../features/moviesSlics";
import MoviesList from "./MoviesList";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const MovieView = () => {
  const { movies, status, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, []);

  return (
    <>
      <Nav />
      {error === "error" && <p>{error}</p>}
      {status === "loading" ? (
        <p className="display-3 fw-normal text-center mt-5">Loading</p>
      ) : (
        <section className="container py-3">
          <h1 className="py-2">Movies</h1>

          <Link className="btn btn-success btn-sm px-4 mb-2" to={"/movieForm"}>
            Add Movie
          </Link>
          <h2 className="pt-4">Movies Display</h2>
          <MoviesList movies={movies} />
        </section>
      )}
    </>
  );
};

export default MovieView;
