import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/index';
import {FilmCardNavigation} from '../film-card-navigation/film-card-navigation';
import { FilmCardNavigationItems } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewsList from '../reviews-list/reviews-list';
import { getFilmReviews, getFilmReviewsDataLoadedStatus, getOpenedFilm } from '../../store/films-data-loading-process/selectors';

function MoviePageReviews (): JSX.Element {

  const filmReviews = useAppSelector(getFilmReviews);
  const openedFilm = useAppSelector(getOpenedFilm);
  const isFilmReviewsDataLoaded = useAppSelector(getFilmReviewsDataLoadedStatus);

  const params = useParams();

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={openedFilm?.posterImage} alt={openedFilm?.name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <FilmCardNavigation filmId={Number(params.id)} activeLink={FilmCardNavigationItems.Reviews}/>

          <div className="film-card__reviews film-card__row">

            {!isFilmReviewsDataLoaded ? <LoadingScreen /> :
              <ReviewsList reviews={filmReviews}/>}

          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePageReviews;
