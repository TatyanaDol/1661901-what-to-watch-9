import React, {useState} from 'react';
import {FilmData} from '../../moks/films';
import MovieCard from '../movie-card/movie-card';

type FilmsListProps = {
    films: FilmData[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {

  const [activeMovie, setActiveMovie] = useState(0);

  return (
    <div className="catalog__films-list">
      {activeMovie}
      {films.map((movie) => <MovieCard key={movie.id} image={movie.previewImage} title={movie.name} onMouseOverCb={setActiveMovie} id={movie.id} movie={movie} />,
      )}
    </div>
  );

}

export default FilmsList;
