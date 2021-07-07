import React from "react";

const MovieCard = ({ film }) => {
  return (
    <div className="film-list">
      {/* Use dot notation to get key/value from film since it's an object*/}

      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <div className="bottom">
        <p>Director: {film.director}</p>
        <p>Release Date: {film.release_date} </p>
      </div>
    </div>
  );
};

export default MovieCard;
