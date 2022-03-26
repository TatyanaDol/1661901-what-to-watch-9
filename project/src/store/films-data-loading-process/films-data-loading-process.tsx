import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsDataLoadingProcess} from '../../types/state';


const initialState: FilmsDataLoadingProcess = {
  allFilms: [],
  isDataLoaded: false,
  promoFilm: null,
  isPromoDataLoaded: false,
  similarFilms: [],
  isSimilarFilmsDataLoaded: false,
  openedFilm: null,
  isOpenedFilmDataLoaded: false,
  filmReviews: [],
  isFilmReviewsDataLoaded: false,
};

export const filmsDataLoadingProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadFilms: (state, action) => {
      state.allFilms = action.payload;
      state.isDataLoaded = true;
    },
    loadPromoFilm: (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoDataLoaded = true;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsDataLoaded = true;
    },
    loadOpenedFilm: (state, action) => {
      state.openedFilm = action.payload;
      state.isOpenedFilmDataLoaded = true;
    },
    loadFilmReviews: (state, action) => {
      state.filmReviews = action.payload;
      state.isFilmReviewsDataLoaded = true;
    },
  },
});

export const {loadFilms, loadPromoFilm, loadSimilarFilms, loadOpenedFilm, loadFilmReviews} = filmsDataLoadingProcess.actions;
