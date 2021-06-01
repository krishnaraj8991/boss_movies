import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratingIcon, reloadIcon, yearIcon } from "../../assets";
import {
  fetchMovies,
  SortByRating,
  SortByYear,
} from "../../store/movies/moviesActions";
import MovieTile from "../MovieTile";
import "./styles.scss";
import ReactModal from "react-modal";
import MovieViewModal from "../MovieViewModal";

const MovieList = () => {
  const movies = useSelector((state) => state.moviesList);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [isModalView, setIsModalView] = useState(false);
  const [isSelected, setIsSelected] = useState(1);
  const [showRank, setShowRank] = useState(true);
  useEffect(() => {
    // console.log(movies, error);
  }, [movies]);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const HandleClickEvent = (event) => {
    // console.log(event.target.id);
    const id = event.target.id;
    switch (id) {
      case "reload": {
        dispatch(fetchMovies());
        break;
      }
      case "year": {
        setShowRank(false);
        dispatch(SortByYear());
        break;
      }
      case "rating": {
        setShowRank(true);
        dispatch(SortByRating());
        break;
      }
      default:
        return;
    }
  };
  const MovieClick = (id) => {
    // console.log(id);
    setIsSelected(id);
    setIsModalView((prev) => !prev);
  };
  return (
    <div>
      <MovieViewModal
        isOpen={isModalView}
        RequestClose={() => {
          setIsModalView(false);
        }}
        // movie={movies[movies.find((movie) => movie.id == isSelected)]}
        movie={movies.find((movie) => movie.id == isSelected)}
      />
      <div className='App'>
        <header className='App-header'>
          {error != "" ? <h3>{error}</h3> : ""}
          <h1>List</h1>
          <div className='buttons'>
            <button id='reload' onClick={HandleClickEvent}>
              {"Reload "}
              <img src={reloadIcon} height='20px' width='20px'></img>
            </button>
          </div>

          <div className='dropdown'>
            <button className='dropbtn'>Sort movies by</button>
            <div className='dropdown-content'>
              <div id='year' onClick={HandleClickEvent}>
                <a id='year' href='#'>
                  Year of release
                </a>
                <img src={yearIcon} height='20px' width='20px'></img>
              </div>
              <div id='rating' onClick={HandleClickEvent}>
                <a id='rating' href='#'>
                  Rating
                </a>
                <img src={ratingIcon} height='25px' width='25px'></img>
              </div>
            </div>
          </div>

          <div className='movie-container'>
            {movies.map((movie) => (
              <MovieTile
                key={movie.id}
                movie={movie}
                onClick={MovieClick}
                showRank={showRank}
              />
            ))}
          </div>
        </header>
      </div>
    </div>
  );
};
export default MovieList;
