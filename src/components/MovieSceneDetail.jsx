import '../styles/layouts/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';

function MovieSceneDetail({ movieChoosed }) {
  if (!movieChoosed) {
    return (
      <div className="detailsBox">
        <p>No se ha encontrado el WOW de la película</p>
        <Link to="/">Volver a principal</Link>
      </div>
    );
  }

  return (
    <>
      <article className="detailsBox">
        <div>
          <img src={movieChoosed.poster} />
        </div>
        <div className="miniData">
          <h2>{movieChoosed.movie}</h2>
          <p>{movieChoosed.phrase}</p>
          <span>Director: {movieChoosed.director}</span>
          <a href={movieChoosed.audio}>Escuchar audio</a>
        </div>
      </article>
      <Link to="/">Volver a principal</Link>
    </>
  );
}

export default MovieSceneDetail;
