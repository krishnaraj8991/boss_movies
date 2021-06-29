import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
export default function MovieTile({ movie, onClick, showRank = true }) {
  // console.log(movie);
  return (
    <Link key={`link${movie.id}`} to={`/${movie.id}`}>
      <div
        onClick={() => {
          onClick(movie.id);
        }}>
        <div className='movie'>
          <img src={movie.image.original} />
          <div className='movie-info'>
            {/* <p>{movie.name}</p> */}
            {showRank ? (
              <p>{movie.rating.average}</p>
            ) : (
              <p>{movie.premiered}</p>
            )}
          </div>
          <div className='movie-over'>
            <h2>Description:</h2>
            <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
            {/* {movie.summary} */}
          </div>
        </div>
      </div>
    </Link>
  );
}
