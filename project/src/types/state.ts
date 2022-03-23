import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import {FilmsData, FilmData} from '../types/film';

export type FilmsDataLoadingProcess = {
  allFilms: FilmsData,
  filteredFilms: FilmsData,
  isDataLoaded: boolean,
  promoFilm: FilmData | null,
  isPromoDataLoaded: boolean,
};

export type SiteProcess = {
  allFilms: FilmsData,
  filteredFilms: FilmsData,
  genre: string,
  error: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
