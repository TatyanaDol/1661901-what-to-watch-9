import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import mockFilms, {mockReviws} from './moks/films';
import {store} from './store/index';
import ErrorMessage from './components/error-message/error-message';
import {fetchFilmsAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App films={mockFilms} reviews={mockReviws}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
