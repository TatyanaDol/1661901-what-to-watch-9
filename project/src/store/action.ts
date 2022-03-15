import {createAction} from '@reduxjs/toolkit';
import {FilmsData} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('changeGenre');
export const filterFilmsByGenre = createAction('filterFilmsByGenre');

export const loadFilms = createAction<FilmsData>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setError = createAction<string>('setError');
