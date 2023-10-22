import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import callToApi from '../services/api';
import ls from '../services/localstorage';
import '../styles/App.scss';

import Header from './Header';
import FiltersMoviesTitle from './FiltersMoviesTitle';
import FilterMovieYear from './FilterMovieYear';
import MovieSceneList from './MovieSceneList';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneDetail from './MovieSceneDetail';

function App() {
  const [moviesInfo, setMoviesInfo] = useState(ls.get('movies', []));
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (ls.get('movies', null) === null) {
      callToApi().then((result) => {
        setMoviesInfo(result);
        ls.set('movies', result);
      });
    }
  }, []);

  const getYears = () => {
    const years = moviesInfo.map((year) => year.year);
    //just the years on the array
    const justYears = new Set(years);
    const justArray = [...justYears];
    return justArray;
  };

  const updateInput = (value) => {
    setTitle(value);
  };

  const updateSelect = (value) => {
    setYear(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const filteredList = moviesInfo
    .filter((name) => name.movie.toLowerCase().includes(title.toLowerCase()))
    .filter((eachYear) => {
      if (year === '') {
        return true;
      } else {
        return eachYear.year=== parseInt(year);
      }
    });

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <form onSubmit={handleSubmit}>
                  <FiltersMoviesTitle
                    info={moviesInfo}
                    title={title}
                    updateInput={updateInput}
                  />
                  <FilterMovieYear
                    updateSelect={updateSelect}
                    year={year}
                    SelectedYears={getYears()}
                  />
                </form>
                <MovieSceneList info={filteredList} title={title} />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
