import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {FilmsData, FilmData} from '../types/film';

export type FilmsDataLoadingProcess = {
  allFilms: FilmsData,
  isDataLoaded: boolean,
  promoFilm: FilmData | null,
  isPromoDataLoaded: boolean,
  similarFilms: FilmsData,
  isSimilarFilmsDataLoaded: boolean,
};

export type SiteProcess = {
  filteredFilms: FilmsData,
  genre: string,
  error: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
