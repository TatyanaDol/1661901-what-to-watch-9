import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<string>('changeGenre');
export const filterFilmsByGenre = createAction('filterFilmsByGenre');