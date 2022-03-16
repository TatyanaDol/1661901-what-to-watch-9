import React from 'react';
import MainScreen from '../main-screen/main-screen';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {ReviewData} from '../../moks/films';
import LoadingScreen from '../loading-screen/loading-screen';
import {useAppSelector} from '../../hooks/index';

type AppScreenProps = {
  reviews: ReviewData[];
}

function App({reviews}: AppScreenProps): JSX.Element {

  const {allFilms, isDataLoaded} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen title={allFilms[0].name} genre={allFilms[0].genre} year={allFilms[0].released}/>} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player films={allFilms}/>} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={allFilms}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film films={allFilms}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview films={allFilms} reviews={reviews}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>);

}

export default App;
