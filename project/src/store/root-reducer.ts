import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {filmsDataLoadingProcess} from './films-data-loading-process/films-data-loading-process';
import {siteProcess} from './site-process/site-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmsDataLoadingProcess.reducer,
  [NameSpace.Site]: siteProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
