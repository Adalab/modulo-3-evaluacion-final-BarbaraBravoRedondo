import MovieSceneItem from './MovieSceneItem';
import '../styles/layouts/movieItem.scss'

function MovieSceneList({ info }) {
  console.log(info);
  
const renderMovies = info.map((movie,index) => {
  return (
    <li  key={index}>
      <MovieSceneItem movie={movie} className="movieBox" />
    </li>
  );})



  return <ul className="movie-item">{renderMovies}</ul>;
}



export default MovieSceneList;