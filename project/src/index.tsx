import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import mockFilms, {mockReviws} from './moks/films';
import {store} from './store/index';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App films={mockFilms} reviews={mockReviws}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
