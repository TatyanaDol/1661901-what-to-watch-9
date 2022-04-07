import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import {useAppSelector} from '../../hooks/index';
import LoadingScreen from '../loading-screen/loading-screen';
import { getFilteredFilms } from '../../store/site-process/selectors';
import { getAllFilms, getDataLoadedStatus } from '../../store/films-data-loading-process/selectors';

export function FilmsCatalog(): JSX.Element {

  const filteredFilms = useAppSelector(getFilteredFilms);
  const allFilms = useAppSelector(getAllFilms);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {!isDataLoaded ? <LoadingScreen /> :
        <>
          <GenresList films={allFilms}/>
          <FilmsList films={filteredFilms} />
        </>}

    </section>
  );
}
