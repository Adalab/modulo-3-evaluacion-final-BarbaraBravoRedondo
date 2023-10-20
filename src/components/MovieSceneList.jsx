import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ info }) {
  console.log(info);
const renderMovies = info.map((movie,index) => {
  return (
    <li  key={index}>
      <MovieSceneItem movie={movie} />
    </li>
  );})

  return <ul>{renderMovies}</ul>;
}



export default MovieSceneList;