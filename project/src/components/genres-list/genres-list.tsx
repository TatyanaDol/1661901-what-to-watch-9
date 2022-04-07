import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeGenre, filterFilmsByGenre} from '../../store/site-process/site-process';
import {FILTER_ALL_GENRES, INDEX_FOR_MAXIMUM_GENRES_COUNT} from '../../const';
import { FilmData } from '../../types/film';
import { Link } from 'react-router-dom';
import { getGenre } from '../../store/site-process/selectors';
import { getAllFilms } from '../../store/films-data-loading-process/selectors';

type GenresListProps = {
  films: FilmData[];
}

function GenresList({films}: GenresListProps): JSX.Element {

  const dispatch = useAppDispatch();

  const genresSet = new Set<string>(films.map(({genre}) => genre));

  const genresList = [FILTER_ALL_GENRES, ...genresSet].slice(0, INDEX_FOR_MAXIMUM_GENRES_COUNT);

  const genre = useAppSelector(getGenre);
  const allFilms = useAppSelector(getAllFilms);

  return (
    <ul className="catalog__genres-list">

      {genresList.map((element) => {

        const isActive = Boolean(genre === element);

        return (
          <li key={element} className={`catalog__genres-item ${isActive && 'catalog__genres-item--active'}`}>
            <Link to="#" className="catalog__genres-link" onClick={(evt) => {
              dispatch(changeGenre(element));
              dispatch(filterFilmsByGenre(allFilms));
            }}
            >
              {element}
            </Link>
          </li>
        );})}
    </ul>
  );

}

export default GenresList;
