import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMovieAsync } from "../features/moviesSlics";

const MoviesList = ({ movies }) => {
  const dispatch = useDispatch();

  const handleDelete = (movieId) => {
    dispatch(deleteMovieAsync(movieId));
  };

  return (
    <>
      <section className="row py-2 px-sm-0 px-2">
        {movies?.map((movie) => {
          return (
            <div
              key={movie._id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 my-2"
            >
              <div className="card">
                <img
                  src={`https://placehold.co/500x250/lightgreen/white?text=Movie`}
                  className="img-thumbnail"
                  alt="movie poster"
                />

                <div className="card-body py-2 px-4">
                  <h5 className="card-heading fs-5 my-0">{movie.movieTitle}</h5>
                  <p className="card-text my-1">Director: {movie.director}</p>
                  <p className="card-text my-1">Genre: {movie.genre}</p>

                  <div className="d-flex flex-wrap gap-2">
                    <Link
                      className="btn btn-outline-success py-0 px-3"
                      to={"/movieForm"}
                      state={movie}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-warning text-light fw-medium py-0 px-4"
                      onClick={() => handleDelete(movie._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MoviesList;
