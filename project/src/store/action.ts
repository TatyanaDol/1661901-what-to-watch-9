import {createAction} from '@reduxjs/toolkit';
import {FilmsData, FilmData} from '../types/film';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeGenre = createAction<string>('changeGenre');
export const filterFilmsByGenre = createAction('filterFilmsByGenre');

export const loadFilms = createAction<FilmsData>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadPromoFilm = createAction<FilmData>('loadPromoFilm');
