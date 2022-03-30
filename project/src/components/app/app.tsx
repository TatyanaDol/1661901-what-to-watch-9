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
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import AddReview from '../add-review/add-review';

function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute >
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute >
            <AddReview />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>);

}

export default App;

