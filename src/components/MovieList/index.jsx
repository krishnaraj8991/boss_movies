import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ratingIcon,
  reloadIcon,
  yearIcon,
  LeftArrow,
  RightArrow,
} from "../../assets";
import {
  fetchMovies,
  SortByRating,
  SortByYear,
} from "../../store/movies/moviesActions";
import MovieTile from "../MovieTile";
import "./styles.scss";
import ReactModal from "react-modal";
import MovieViewModal from "../MovieViewModal";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = useSelector((state) => state.moviesList);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const [rangeIdx, setRange] = useState(1);
  const range = 20;
  const [isModalView, setIsModalView] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [showRank, setShowRank] = useState(true);
  useEffect(() => {
    // console.log(movies, error);
  }, [movies]);
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies());
    }
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
        setRange(0);
        dispatch(SortByYear());
        break;
      }
      case "rating": {
        setShowRank(true);
        setRange(0);
        dispatch(SortByRating());
        break;
      }
      case "Prev": {
        setRange((prev) => (prev - range > 0 ? prev - range : 0));
        break;
      }
      case "Next": {
        setRange((prev) =>
          prev + range < movies.length ? prev + range : prev
        );

        break;
      }
      default:
        return;
    }
  };
  const MovieClick = (id) => {
    // console.log(id);
    setIsSelected(id);
    // setIsModalView((prev) => !prev);
  };
  return (
    <div>
      <MovieViewModal
        isOpen={isModalView}
        RequestClose={() => {
          setIsModalView(false);
        }}
        // movie={movies[movies.find((movie) => movie.id == isSelected)]}
        movie={movies.find((movie) => movie.id === isSelected)}
      />
      <div className='App'>
        <header className='App-header'>
          {error != "" ? <h3>{error}</h3> : ""}
          <h1>List</h1>
          {/* <div className='buttons'>
            <button id='reload' onClick={HandleClickEvent}>
              {"Reload "}
              <img src={reloadIcon} height='20px' width='20px' alt=''></img>
            </button>
          </div> */}
          <div className='buttons'>
            <button id='Prev' onClick={HandleClickEvent}>
              <img src={LeftArrow} height='20px' width='20px' alt=''></img>
              {"Prev "}
            </button>
            <button id='Next' onClick={HandleClickEvent}>
              {"Next "}
              <img src={RightArrow} height='20px' width='20px' alt=''></img>
            </button>
          </div>

          <div className='dropdown'>
            <button className='dropbtn'>Sort movies by</button>
            <div className='dropdown-content'>
              <div id='year' onClick={HandleClickEvent}>
                {/* <a id='year' href='#'> */}
                Year of release
                {/* </a> */}
                <img src={yearIcon} height='20px' width='20px' alt=''></img>
              </div>
              <div id='rating' onClick={HandleClickEvent}>
                {/* <a id='rating' href='#'> */}
                Rating
                {/* </a> */}
                <img src={ratingIcon} height='25px' width='25px' alt=''></img>
              </div>
            </div>
          </div>

          <div className='movie-container'>
            {movies
              .slice(
                rangeIdx,
                rangeIdx + range < movies.length
                  ? rangeIdx + range
                  : movies.length
              )
              .map((movie) => (
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
