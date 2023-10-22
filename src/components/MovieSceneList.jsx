import MovieSceneItem from './MovieSceneItem';
import '../styles/layouts/movieItem.scss';

function MovieSceneList({ info, title }) {
  console.log(info);
  if (info.length === 0) {
    return <p>No encontramos ningun resultado con `' {title} '` </p>;
  }
  const renderMovies = info.map((movie, index) => {
    return (
      <li key={index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return <ul className="movie-item">{renderMovies}</ul>;
}

export default MovieSceneList;
