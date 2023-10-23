import MovieSceneItem from './MovieSceneItem';
import '../styles/layouts/movieItem.scss';

function MovieSceneList({ info, title }) {
  console.log(info);
  
  // Ordenamos los datos alfabeticamente
  const sortedInfo = [...info].sort((a, b) => a.movie.localeCompare(b.movie));
  
  if (sortedInfo.length === 0) {
    return <p>No encontramos ningún resultado con '{title}'</p>;
  }

  const renderMovies = sortedInfo.map((movie, index) => {
    return (
      <li key={index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });

  return <ul className="movie-item">{renderMovies}</ul>;
}

export default MovieSceneList;
