import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratingIcon, reloadIcon, yearIcon } from "../../assets";
import Header from "../../Header";
import {
  fetchMovies,
  SortByRating,
  SortByYear,
} from "../../store/movies/moviesActions";
const MovieList = () => {
  const movies = useSelector((state) => state.moviesList);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(movies, error);
  }, [movies]);
  const HandleClickEvent = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    switch (id) {
      case "reload":
        dispatch(fetchMovies());
      case "year":
        dispatch(SortByYear());
      case "rating":
        dispatch(SortByRating());
      default:
        return;
    }
  };
  return (
    
    <div>
      <Header/>
      <div className='App'>
        <header className='App-header'>
      {error != "" ? <h3>{error}</h3> : ""}
      <h1>List</h1>
      <div className="buttons">
      <button id='reload' onClick={HandleClickEvent}>
        {"Reload "}
        <img src={reloadIcon} height='20px' width='20px'></img>
      </button>
      <button id='year' onClick={HandleClickEvent}>
        {"Years "}
        <img src={yearIcon} height='20px' width='20px'></img>
      </button>
      <button id='rating' onClick={HandleClickEvent}>
        {"Rating "}
        <img src={ratingIcon} height='20px' width='20px'></img>
      </button>
      </div>

      <div class="dropdown">
         <button class="dropbtn">Sort movies by</button>
         <div class="dropdown-content">
           <div id="year">
         <a id="year" href="#" onClick={HandleClickEvent}>Year of release</a>
         <img src={yearIcon} height='20px' width='20px'></img>
         </div>
         <div id="rating">
         <a id="rating" href="#" onClick={HandleClickEvent}>Rating</a>
         <img src={ratingIcon} height='25px' width='25px'></img>
         </div>
         </div>
      </div>

      <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className="movie">
          <img src={movie.imageUrl}/>
          <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.rank}</p>
          </div>
          <div className="movie-over">
        <h2>Description:</h2>
        <h2>{movie.synopsis}</h2>
        </div> 
        </div>
        </div>
      ))}</div>
      </header>
      </div>
    </div>
  );
};
export default MovieList;
