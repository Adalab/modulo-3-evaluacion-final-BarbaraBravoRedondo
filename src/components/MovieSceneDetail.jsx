import { Link } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';

function MovieSceneDetail({ info }) {
  const { pathname } = useLocation();
  const routeData = matchPath('/movie/:id', pathname);
  const movieId = routeData !== null ? routeData.params.id : '';
  const movieData = info.find((movie) => movie.id === movieId);

  console.log('URL:', pathname);
  console.log('Movie ID from URL:', movieId);
  console.log('Movie Data:', movieData);

  if (movieData === undefined) {
    return <p>No se ha encontrado el wow de la película</p>;
  }

  return (
    <>
      <img src={movieData.poster} />

      <h2>{movieData.movie}</h2>
      <p>{movieData.phrase}</p>
      <span>Director: {movieData.director}</span>
      <a href={movieData.audio}>Escuchar audio</a>
    </>
  );
}

export default MovieSceneDetail;
