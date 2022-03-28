import React, {useEffect, useState} from 'react';
import { FILM_COUNT_PER_STEP } from '../../const';
import { useAppSelector } from '../../hooks';
import { FilmData } from '../../types/film';
import MovieCard from '../movie-card/movie-card';
import { ShowMoreButton } from '../show-more-button/show-more-button';

type FilmsListProps = {
    films: FilmData[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const {genre} = useAppSelector(({SITE}) => SITE);

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

  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILM_COUNT_PER_STEP);

  const [filmsForRender, setfilmsForRender] = useState(films.slice(0, FILM_COUNT_PER_STEP));

  useEffect(() => {
    setfilmsForRender(films.slice(0, renderedFilmsCount));

  }, [renderedFilmsCount, films]);

  useEffect(() => {
    setRenderedFilmsCount(FILM_COUNT_PER_STEP);
  }, [genre]);

  function handleShowMoreButtonClick() {
    setRenderedFilmsCount(renderedFilmsCount + FILM_COUNT_PER_STEP);
  }

  return (
    <>
      <div className="catalog__films-list">
        {filmsForRender.map((movie) => <MovieCard key={movie.id} onMouseOverCb={setTimer} movie={movie} activeMovie={activeMovie} onMouseOutCb={clearTimer}/>,
        )}
      </div>
      {renderedFilmsCount < films.length  && <ShowMoreButton onClickCb={handleShowMoreButtonClick}/>}
    </>
  );

}

export default FilmsList;
