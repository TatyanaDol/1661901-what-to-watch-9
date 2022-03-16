import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filterFilmsByGenre, loadFilms, requireAuthorization, setError, loadPromoFilm} from './action';
import {AuthorizationStatus, FILTER_ALL_GENRES} from '../const';
import {FilmsData, FilmData} from '../types/film';

type InitialState = {
    genre: string,
    allFilms: FilmsData,
    filteredFilms: FilmsData,
    authorizationStatus: AuthorizationStatus,
    error: string,
    isDataLoaded: boolean,
    promoFilm: FilmData | null,
  };

const initialState: InitialState = {
  genre: FILTER_ALL_GENRES,
  allFilms: [],
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  promoFilm: null,
};

const reducer = createReducer(initialState, (builder) => {

  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;

  })
    .addCase(filterFilmsByGenre, (state) => {
      if(state.genre === FILTER_ALL_GENRES) {
        state.filteredFilms = state.allFilms;
      }
      else {
        state.filteredFilms = [];
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
      }

    })
    .addCase(loadFilms, (state, action) => {
      state.allFilms = action.payload;
      state.filteredFilms = state.allFilms;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export {reducer};
