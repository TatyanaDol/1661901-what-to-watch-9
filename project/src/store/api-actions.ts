import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from './index';
import {FilmsData, FilmData, FilmId, NewReviewData, MyListStatusData, ReviewsData} from '../types/film';
import {APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus, AppRoute, FilmCardNavigationItems} from '../const';
import {redirectToRoute} from './action';
import {loadFilms, loadPromoFilm, loadSimilarFilms, loadOpenedFilm, loadFilmReviews, changeMyListFilms, loadMyListFilms} from './films-data-loading-process/films-data-loading-process';
import {filterFilmsByGenre, setError} from './site-process/site-process';
import { requireAuthorization} from './user-process/user-process';
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
      store.dispatch(filterFilmsByGenre(data));
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

export const fetchSimilarFilmsAction = createAsyncThunk(
  'fetchSimilarFilms',
  async ({filmId}: FilmId) => {
    try {
      const {data} = await api.get<FilmsData>(`/films/${filmId}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchOpenedFilmAction = createAsyncThunk(
  'fetchOpenedFilm',
  async ({filmId}: FilmId) => {
    try {
      const {data} = await api.get<FilmData>(`/films/${filmId}`);
      store.dispatch(loadOpenedFilm(data));
    } catch (error) {
      handleError(error);
      store.dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchOpenedFilmReviewsAction = createAsyncThunk(
  'fetchOpenedFilmReviews',
  async ({filmId}: FilmId) => {
    try {
      const {data} = await api.get<ReviewsData>(`/comments/${filmId}`);
      store.dispatch(loadFilmReviews(data));
    } catch (error) {
      handleError(error);
    }
  },
);


export const addNewReviewAction = createAsyncThunk(
  'addNewReview',
  async ({comment, rating, filmId}: NewReviewData) => {
    try {
      const {data} = await api.post<ReviewsData>(`/comments/${filmId}`, {comment, rating});
      store.dispatch(loadFilmReviews(data));
      store.dispatch(redirectToRoute(`/films/${filmId}/${FilmCardNavigationItems.Reviews}`));
    } catch(error) {
      handleError(error);
    }
  },
);

export const changeMyListStatusAction = createAsyncThunk(
  'changeMyListStatus',
  async ({filmId, status}: MyListStatusData) => {
    try {
      const {data} = await api.post<FilmData>(`/favorite/${filmId}/${status}`);
      store.dispatch(changeMyListFilms({data, status}));
      store.dispatch(loadOpenedFilm(data));
    } catch(error) {
      handleError(error);
    }
  },
);

export const fetchMyListFilmsAction = createAsyncThunk(
  'fetchMyListFilms',
  async () => {
    try {
      const {data} = await api.get<FilmsData>(APIRoute.Favorite);
      store.dispatch(loadMyListFilms(data));
    } catch(error) {
      handleError(error);
    }
  },
);
