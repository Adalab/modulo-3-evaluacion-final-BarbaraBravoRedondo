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
     
          <img className="img" src={movieChoosed.poster} />
  
        <div className="miniData">
          <h2>{movieChoosed.movie}</h2>
          <p>{movieChoosed.phrase}</p>
          <span>Director: {movieChoosed.director}</span>
          <a className='a' href={movieChoosed.audio}>Escuchar audio</a>
        <Link to="/"  className="link">Volver a principal</Link></div>
        
      </article>
     
    </>
  );
}

export default MovieSceneDetail;
