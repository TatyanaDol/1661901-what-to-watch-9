import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSimilarFilmsAction } from '../../store/api-actions';
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

  const {similarFilms, isSimilarFilmsDataLoaded} = useAppSelector(({DATA}) => DATA);

  const fourSimilarFilms = similarFilms.slice(0, 4);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {!isSimilarFilmsDataLoaded ? <LoadingScreen /> :
        <FilmsList films={fourSimilarFilms}/>}

    </section>
  );
}
