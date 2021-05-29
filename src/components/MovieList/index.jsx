import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import refresh from "../../assets/refresh.png";
import { fetchMovies } from "../../store/movies/moviesActions";
const MovieList = () => {
  const movies = useSelector((state) => state.moviesList);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(movies, error);
  }, [movies, error]);
  const HandleClickEvent = () => {
    dispatch(fetchMovies());
  };
  return (
    <div>
      {error != "" ? <h3>{error}</h3> : ""}
      <h1>List</h1>
      <button onClick={HandleClickEvent}>
        {"Reload "}
        <img src={refresh} height='20px' width='20px'></img>
      </button>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.imageUrl} />
        </div>
      ))}
    </div>
  );
};
export default MovieList;
