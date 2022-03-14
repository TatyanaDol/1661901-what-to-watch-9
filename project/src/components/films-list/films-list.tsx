import React, {useState} from 'react';
import {FilmData} from '../../moks/films';
import MovieCard from '../movie-card/movie-card';

type FilmsListProps = {
    films: FilmData[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeMovie, setActiveMovie] = useState(-1);

  let timer: NodeJS.Timeout;

  function setTimer(id: number) {

    timer = setTimeout(() => {
      setActiveMovie(id);
    }, 1000);

  }

  function clearTimer() {
    clearTimeout(timer);
    setActiveMovie(-1);
  }

  return (
    <div className="catalog__films-list">

      {films.map((movie) => <MovieCard key={movie.id} onMouseOverCb={setTimer} movie={movie} activeMovie={activeMovie} onMouseOutCb={clearTimer}/>,
      )}
    </div>
  );

}

export default FilmsList;
