import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import {useAppSelector} from '../../hooks/index';
import LoadingScreen from '../loading-screen/loading-screen';

export function FilmsCatalog(): JSX.Element {

  const {allFilms, isDataLoaded} = useAppSelector(({DATA}) => DATA);

  const {filteredFilms} = useAppSelector(({SITE}) => SITE);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {!isDataLoaded ? <LoadingScreen /> :
        <>
          <GenresList films={allFilms}/>
          <FilmsList films={filteredFilms} />
        </>}

      <div className="catalog__more">
        <button className="catalog__button" type="button">
              Show more
        </button>
      </div>
    </section>
  );
}
