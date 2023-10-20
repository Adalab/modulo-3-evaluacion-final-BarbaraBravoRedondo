import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import ls from '../services/localstorage';
import '../styles/App.scss';
import Header from './Header';
import FiltersMovies from './FiltersMovies';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './MovieSceneDetail';

function App() {
  const [moviesInfo, setMoviesInfo] = useState(ls.get('movies', []));

  useEffect(() => {
    callToApi().then((result) => {
      console.log(result);
      setMoviesInfo(result);
      ls.set('movies', result);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FiltersMovies info={moviesInfo} />
                <MovieSceneList info={moviesInfo} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;