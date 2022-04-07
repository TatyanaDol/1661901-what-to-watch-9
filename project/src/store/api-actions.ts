import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from './index';
import {FilmsData, FilmData, FilmId, NewReviewData, MyListStatusData, ReviewsData} from '../types/film';
import {APIRoute, AuthorizationStatus, AppRoute, FilmCardNavigationItems} from '../const';
import {redirectToRoute} from './action';
import {loadFilms, loadPromoFilm, loadSimilarFilms, loadOpenedFilm, loadFilmReviews, changeMyListFilms, loadMyListFilms} from './films-data-loading-process/films-data-loading-process';
import {filterFilmsByGenre} from './site-process/site-process';
import { loadUserAvatarUrl, requireAuthorization} from './user-process/user-process';
import {handleError} from '../services/handle-error';
import {dropToken, saveToken} from '../services/token';
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
      store.dispatch(loadFilms([]));
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
      store.dispatch(loadPromoFilm(null));
      handleError(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'checkAuth',
  async () => {
    try {
      const {data: {avatarUrl}} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUserAvatarUrl(avatarUrl));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const checkLoginOrLogoutAction = createAsyncThunk(
  'checkLoginOrLogout',
  async () => {
    try {
      const {data: {avatarUrl}} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUserAvatarUrl(avatarUrl));
    } catch(error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'login',
  async ({email, password}: AuthData) => {
    try {
      const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUserAvatarUrl(avatarUrl));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch(error) {
      handleError(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
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
      store.dispatch(loadSimilarFilms([]));
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
      store.dispatch(loadOpenedFilm(null));
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
  async ({comment, rating, filmId, setIsSavingCb}: NewReviewData) => {
    try {
      const {data} = await api.post<ReviewsData>(`/comments/${filmId}`, {comment, rating});
      store.dispatch(loadFilmReviews(data));
      store.dispatch(redirectToRoute(`/films/${filmId}/${FilmCardNavigationItems.Reviews}`));
      setIsSavingCb(false);
    } catch(error) {
      setIsSavingCb(false);
      handleError(error);
    }
  },
);

export const changeMyListStatusAction = createAsyncThunk(
  'changeMyListStatus',
  async ({filmId, status, isPromo}: MyListStatusData) => {
    try {
      const {data} = await api.post<FilmData>(`/favorite/${filmId}/${status}`);
      store.dispatch(changeMyListFilms({data, status}));
      if(isPromo){
        store.dispatch(loadPromoFilm(data));
        store.dispatch(loadOpenedFilm(data));
      } else {
        store.dispatch(loadOpenedFilm(data));
      }
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
      store.dispatch(loadMyListFilms([]));
    }
  },
);
