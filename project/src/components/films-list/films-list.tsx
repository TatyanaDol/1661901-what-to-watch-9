import React, {useEffect, useState} from 'react';
import {FilmData} from '../../moks/films';
import MovieCard from '../movie-card/movie-card';

type FilmsListProps = {
    films: FilmData[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeMovie, setActiveMovie] = useState(-1);

  const [isHovering, setIsHovering] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => {

    timer = setTimeout(() => {
      setIsHovering(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsHovering(false);
    };

  }, [activeMovie]);

  return (
    <div className="catalog__films-list">

      {films.map((movie) => <MovieCard key={movie.id} onMouseOverCb={setActiveMovie} movie={movie} isHovering={isHovering} activeMovie={activeMovie}/>,
      )}
    </div>
  );

}

export default FilmsList;
