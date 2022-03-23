import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from './index';
import {FilmsData, FilmData} from '../types/film';
import {APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {loadFilms, loadPromoFilm} from './films-data-loading-process/films-data-loading-process';
import {setError} from './site-process/site-process';
import {requireAuthorization} from './user-process/user-process';
import {handleError} from '../services/handle-error';
import {saveToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';


export const fetchFilmsAction = createAsyncThunk(
  'fetchFilms',
  async () => {
    try {
      const {data} = await api.get<FilmsData>(APIRoute.AllFilms);
      store.dispatch(loadFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk(
  'fetchPromoFilm',
  async () => {
    try {
      const {data} = await api.get<FilmData>(APIRoute.Promo);
      store.dispatch(loadPromoFilm(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

