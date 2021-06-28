import React from "react";
import "./styles.scss";
export default function MovieTile({ movie, onClick, showRank = true }) {
  return (
    <div
      onClick={() => {
        onClick(movie.id);
      }}>
      <div className='movie'>
        <img src={movie.image.original} />
        <div className='movie-info'>
          <h3>{movie.title}</h3>
          {showRank ? <p>{movie.rank}</p> : <p>{movie.releaseDate}</p>}
        </div>
        <div className='movie-over'>
          <h2>Description:</h2>
          <p dangerouslySetInnerHTML={{__html:movie.summary}}></p>
          {/* {movie.summary} */}
        </div>
      </div>
    </div>
  );
}
