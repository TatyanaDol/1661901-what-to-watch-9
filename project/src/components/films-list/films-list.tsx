import {FilmData} from '../../moks/films';
import MovieCard from '../movie-card/movie-card';
import React, {useState} from 'react';

type FilmsListProps = {
    films: FilmData[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeMovie, setActiveMovie] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((movie) => <MovieCard key={movie.title} image={movie.image} title={movie.title} onMouseOverCb={setActiveMovie} id={movie.id} />)}
    </div>
  );

}

export default FilmsList;
