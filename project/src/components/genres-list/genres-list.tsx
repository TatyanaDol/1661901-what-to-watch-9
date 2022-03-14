import {FilmData} from '../../moks/films';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeGenre, filterFilmsByGenre} from '../../store/action';

type GenresListProps = {
  films: FilmData[];
}

function createGenresList(films: FilmData[]) {
  const genres: string[] = [];

  films.forEach((movie) => {
    if(!genres.includes(movie.genre)) {
      genres.push(movie.genre);
    }
  });

  return ['All genres', ...genres];
}

function GenresList({films}: GenresListProps): JSX.Element {

  const dispatch = useAppDispatch();

  const genresList = createGenresList(films);

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
