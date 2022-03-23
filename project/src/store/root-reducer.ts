import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {filmsDataLoadingProcess} from './films-data-loading-process/films-data-loading-process';
import {siteProcess} from './site-process/site-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsDataLoadingProcess.reducer,
  [NameSpace.site]: siteProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
