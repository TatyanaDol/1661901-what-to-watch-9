import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {FilmsData, FilmData, ReviewsData} from '../../types/film';

export const getAllFilms = (state: State): FilmsData => state[NameSpace.Data].allFilms;
export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getPromoFilm = (state: State): FilmData | null => state[NameSpace.Data].promoFilm;
export const getPromoDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isPromoDataLoaded;

export const getOpenedFilm = (state: State): FilmData | null => state[NameSpace.Data].openedFilm;
export const getOpenedFilmDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isOpenedFilmDataLoaded;

export const getSimilarFilms = (state: State): FilmsData => state[NameSpace.Data].similarFilms;
export const getSimilarFilmsDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isSimilarFilmsDataLoaded;

export const getFilmReviews = (state: State): ReviewsData => state[NameSpace.Data].filmReviews;
export const getFilmReviewsDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isFilmReviewsDataLoaded;

export const getMyListFilms = (state: State): FilmsData => state[NameSpace.Data].myListFilms;
export const getMyListFilmsDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isMyListFilmsDataLoaded;
