import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {SiteProcess} from '../../types/state';
import {FILTER_ALL_GENRES} from '../../const';
import { FilmData } from '../../types/film';


const initialState: SiteProcess = {
  filteredFilms: [],
  genre: FILTER_ALL_GENRES,
  error: '',
};

export const siteProcess = createSlice({
  name: NameSpace.site,
  initialState,
  reducers: {
    filterFilmsByGenre: (state, action) => {
      if(state.genre === FILTER_ALL_GENRES) {
        state.filteredFilms = action.payload;
      }
      else {
        state.filteredFilms = [];
        state.filteredFilms = action.payload.filter((film: FilmData) => film.genre === state.genre);
      }

    },
    changeGenre: (state, action) => {
      state.genre = action.payload;

    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {filterFilmsByGenre, changeGenre, setError} = siteProcess.actions;
