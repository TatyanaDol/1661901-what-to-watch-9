import {NameSpace} from '../../const';
import { FilmsData } from '../../types/film';
import {State} from '../../types/state';

export const getFilteredFilms = (state: State): FilmsData => state[NameSpace.Site].filteredFilms;
export const getGenre = (state: State): string => state[NameSpace.Site].genre;
