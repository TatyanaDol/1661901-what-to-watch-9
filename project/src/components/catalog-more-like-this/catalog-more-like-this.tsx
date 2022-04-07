import { useEffect } from 'react';
import { MAXIMUM_SIMILAR_FILMS_COUNT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSimilarFilmsAction } from '../../store/api-actions';
import { getSimilarFilms, getSimilarFilmsDataLoadedStatus } from '../../store/films-data-loading-process/selectors';
import FilmsList from '../films-list/films-list';
import LoadingScreen from '../loading-screen/loading-screen';

type CatalogMoreLikeThisProps = {
    filmId: number;
  }

export function CatalogMoreLikeThis({filmId}: CatalogMoreLikeThisProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(fetchSimilarFilmsAction({filmId: filmId} ));

  },[filmId]);

  const similarFilms = useAppSelector(getSimilarFilms);
  const isSimilarFilmsDataLoaded = useAppSelector(getSimilarFilmsDataLoadedStatus);


  const fourSimilarFilms = similarFilms.slice(0, MAXIMUM_SIMILAR_FILMS_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {!isSimilarFilmsDataLoaded ? <LoadingScreen /> :
        <FilmsList films={fourSimilarFilms}/>}

    </section>
  );
}
