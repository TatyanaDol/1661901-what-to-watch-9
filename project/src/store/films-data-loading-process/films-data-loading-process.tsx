import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {FilmsDataLoadingProcess} from '../../types/state';


const initialState: FilmsDataLoadingProcess = {
  allFilms: [],
  isDataLoaded: false,
  promoFilm: null,
  isPromoDataLoaded: false,
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
  },
});

export const {loadFilms, loadPromoFilm} = filmsDataLoadingProcess.actions;
