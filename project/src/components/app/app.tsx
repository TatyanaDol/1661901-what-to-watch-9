import React from 'react';
import MainScreen from '../main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {ReviewData} from '../../moks/films';
import {useAppSelector} from '../../hooks/index';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: ReviewData[];
}

function App({reviews}: AppScreenProps): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {allFilms} = useAppSelector(({DATA}) => DATA);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyList films={allFilms}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={<Film />} />
        <Route path={AppRoute.FilmDetails} element={<Film />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>);

}

export default App;
