import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/MovieItem.scss';

function MovieSceneItem({ movie }) {
  return (
    <>
      <div className="CardDesc">
        <Link  className="movie-details"to={`/movie/${movie.id}`}>
          <article className="article">
            <img
              className="imgMovie"
              src={movie.poster}
              alt="Foto de la pelicula"
              title={movie.movie}
            />
            <div className="movie-details">
              <span className="span">{movie.movie}</span>
              <span className="span">{movie.phrase}</span>
              <span className="span">{movie.year}</span>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
}

export default MovieSceneItem;
