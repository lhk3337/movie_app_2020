import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
function Movie({ year, rating, title, summary, genres, poster }) {
  return (
    <div className="movie">
      <h1 className="movie__title">{title}</h1>
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <h2 className="movie__year">Year : {year}</h2>
      <h2 className="movie__rating">Rating : {rating} / 10</h2>
      <h2 className="movie__genres">Genres : {genres} </h2>
      <p className="movie__summary"> {summary}</p>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
