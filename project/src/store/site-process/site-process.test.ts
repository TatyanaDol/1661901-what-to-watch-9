import {siteProcess} from './site-process';
import {filterFilmsByGenre, changeGenre} from './site-process';
import {FILTER_ALL_GENRES} from '../../const';
import { makeFakeFilm} from '../../utils/mocks';

const films = [makeFakeFilm(), makeFakeFilm()];

describe('Reducer: Site', () => {
  it('without additional parameters should return initial state', () => {
    expect(siteProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({filteredFilms: [],
        genre: FILTER_ALL_GENRES});
  });

  it('should update filteredFilms by filter "FILTER_ALL_GENRES"', () => {
    const state = {filteredFilms: [], genre: FILTER_ALL_GENRES};

    expect(siteProcess.reducer(state, filterFilmsByGenre(films)))
      .toEqual({filteredFilms: films, genre: FILTER_ALL_GENRES});
  });
  it('should update filteredFilms by filter "Comedy"', () => {
    const state = {filteredFilms: films, genre: 'Comedy'};
    const comedyFilms = films.filter((film) => film.genre === state.genre);

    expect(siteProcess.reducer(state, filterFilmsByGenre(films)))
      .toEqual({filteredFilms: comedyFilms, genre: 'Comedy'});
  });
  it('should update filteredFilms by filter "Fantasy"', () => {
    const state = {filteredFilms: films, genre: 'Fantasy'};
    const fantasyFilms = films.filter((film) => film.genre === state.genre);

    expect(siteProcess.reducer(state, filterFilmsByGenre(films)))
      .toEqual({filteredFilms: fantasyFilms, genre: 'Fantasy'});
  });
  it('should update genre to "Adventure"', () => {
    const state = {filteredFilms: films, genre: FILTER_ALL_GENRES};

    expect(siteProcess.reducer(state, changeGenre('Adventure')))
      .toEqual({filteredFilms: films, genre: 'Adventure'});
  });
  it('should update genre to "Action"', () => {
    const state = {filteredFilms: films, genre: 'Adventure'};

    expect(siteProcess.reducer(state, changeGenre('Action')))
      .toEqual({filteredFilms: films, genre: 'Action'});
  });
});
