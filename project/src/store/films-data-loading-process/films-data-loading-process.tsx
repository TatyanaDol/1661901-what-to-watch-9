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
  myListFilms: [],
  isMyListFilmsDataLoaded: false,
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
    loadMyListFilms: (state, action) => {
      state.myListFilms = action.payload;
      state.isMyListFilmsDataLoaded = true;
    },
    changeMyListFilms: (state, action) => {
      const {data, status} = action.payload;
      if(status) {
        state.myListFilms = [...state.myListFilms, action.payload];
      }
      else {
        const index = state.myListFilms.findIndex((element) => element.id === data.id);
        state.myListFilms.splice(index, 1);
      }
    },
  },
});

export const {loadFilms, loadPromoFilm, loadSimilarFilms, loadOpenedFilm, loadFilmReviews, loadMyListFilms, changeMyListFilms} = filmsDataLoadingProcess.actions;
