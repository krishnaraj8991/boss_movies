import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movies/moviesActions";
export default function MoviePage({ match }) {
  const movies = useSelector((state) => state.moviesList);

  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(match);
    console.log(movies, movies.length);
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
  }, []);
  useEffect(() => {
    const id = parseInt(match.params.id);
    const movieTemp = movies.filter((movie) => movie.id === id);
    console.log(movieTemp);
    if (movieTemp.length == 1) {
      setMovie(movieTemp[0]);
    }
  }, [movies]);
  // const movie = null;
  // console.log(movie);
  return (
    <div id='container'>
      <div id='image'>
        <img src={movie?.image.original} alt='' />
      </div>
      <div id='info'>
        <h1>Title:- {movie?.name}</h1>
        <h1>Rating:- {movie?.rating.average}</h1>
        <h1>ReleaseDate:- {movie?.premiered}</h1>
        <h1>synopsis:-</h1>
        <p
          id='synopsis'
          dangerouslySetInnerHTML={{ __html: movie?.summary }}></p>
      </div>
    </div>
  );
}
