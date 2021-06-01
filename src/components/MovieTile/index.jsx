import React from "react";
import "./styles.scss";
export default function MovieTile({ movie, onClick, showRank = true }) {
  return (
    <div
      onClick={() => {
        onClick(movie.id);
      }}>
      <div className='movie'>
        <img src={movie.imageUrl} />
        <div className='movie-info'>
          <h3>{movie.title}</h3>
          {showRank ? <p>{movie.rank}</p> : <p>{movie.releaseDate}</p>}
        </div>
        <div className='movie-over'>
          <h2>Description:</h2>
          <h2>{movie.synopsis}</h2>
        </div>
      </div>
    </div>
  );
}
