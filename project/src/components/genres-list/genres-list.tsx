import {FilmData} from '../../moks/films';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeGenre, filterFilmsByGenre} from '../../store/action';
import {FILTER_ALL_GENRES} from '../../const';

type GenresListProps = {
  films: FilmData[];
}

function GenresList({films}: GenresListProps): JSX.Element {

  const dispatch = useAppDispatch();

  const genresSet = new Set<string>(films.map(({genre}) => genre));

  const genresList = [FILTER_ALL_GENRES, ...genresSet].slice(0, 9);

  const {genre} = useAppSelector((state) => state);

  return (
    <ul className="catalog__genres-list">

      {genresList.map((element) => {

        const isActive = Boolean(genre === element);

        return (
          <li key={element} className={`catalog__genres-item ${isActive && 'catalog__genres-item--active'}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              dispatch(changeGenre(element));
              dispatch(filterFilmsByGenre());
            }}
            >
              {element}
            </a>
          </li>
        );})}
    </ul>
  );

}

export default GenresList;
