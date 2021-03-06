import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {FilmsData, FilmData, ReviewsData} from '../types/film';

export type FilmsDataLoadingProcess = {
  allFilms: FilmsData,
  isDataLoaded: boolean,
  promoFilm: FilmData | null,
  isPromoDataLoaded: boolean,
  similarFilms: FilmsData,
  isSimilarFilmsDataLoaded: boolean,
  openedFilm: FilmData | null,
  isOpenedFilmDataLoaded: boolean,
  filmReviews: ReviewsData,
  isFilmReviewsDataLoaded: boolean,
  myListFilms: FilmsData,
  isMyListFilmsDataLoaded: boolean,
};

export type SiteProcess = {
  filteredFilms: FilmsData,
  genre: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  avatarUrl: string,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
