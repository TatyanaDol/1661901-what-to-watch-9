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
import {FilmData, ReviewData} from '../../moks/films';


type AppScreenProps = {
  films: FilmData[];
  reviews: ReviewData[];
}

function App({films, reviews}: AppScreenProps): JSX.Element {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen title={films[0].name} genre={films[0].genre} year={films[0].released} films={films}/>} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Player} element={<Player films={films}/>} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<Film films={films}/>} />
        <Route path={AppRoute.AddReview} element={<AddReview films={films} reviews={reviews}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>);

}

export default App;
