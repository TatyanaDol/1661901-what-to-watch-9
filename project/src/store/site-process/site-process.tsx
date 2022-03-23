import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {SiteProcess} from '../../types/state';
import {FILTER_ALL_GENRES} from '../../const';


const initialState: SiteProcess = {
  allFilms: [],
  filteredFilms: [],
  genre: FILTER_ALL_GENRES,
  error: '',
};

export const siteProcess = createSlice({
  name: NameSpace.site,
  initialState,
  reducers: {
    filterFilmsByGenre: (state) => {
      if(state.genre === FILTER_ALL_GENRES) {
        state.filteredFilms = state.allFilms;
      }
      else {
        state.filteredFilms = [];
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
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
