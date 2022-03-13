import {createReducer} from '@reduxjs/toolkit';
import mockFilms from '../moks/films';
import {changeGenre, filterFilmsByGenre} from './action';

const initialState = {
  genre: 'All genres',
  allFilms: mockFilms,
  filteredFilms: mockFilms,
};

const reducer = createReducer(initialState, (builder) => {

  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;

  })
    .addCase(filterFilmsByGenre, (state) => {
      if(state.genre === 'All genres') {
        state.filteredFilms = state.allFilms;
      }
      else {
        state.filteredFilms = [];
        state.filteredFilms = state.allFilms.filter((film) => film.genre === state.genre);
      }

    });
});

export {reducer};
