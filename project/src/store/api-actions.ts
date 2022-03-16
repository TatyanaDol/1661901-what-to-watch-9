import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from './index';
import {store} from './index';
import {FilmsData} from '../types/film';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {loadFilms, setError} from './action';
import {handleError} from '../services/handle-error';


export const fetchFilmsAction = createAsyncThunk(
  'fetchFilms',
  async () => {
    try {
      const {data} = await api.get<FilmsData>(APIRoute.allFilms);
      store.dispatch(loadFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


