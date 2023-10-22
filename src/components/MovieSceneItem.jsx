import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layouts/MovieItem.scss';

function MovieSceneItem({ movie }) {
  return (
    <>
      {' '}
      <li className="CardDesc">
        <Link to={'/movie/:id'}>
          <article className="article">
            <img
              className="imgMovie"
              src={movie.poster}
              alt="Foto de la pelicula"
              title={movie.movie}
            />
            <div className="movie-details">
              <span>{movie.movie}</span>
              <span>{movie.phrase}</span>
              <span>{movie.year}</span>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}

export default MovieSceneItem;
