import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockFilms, {mockReviws} from './moks/films';


ReactDOM.render(
  <React.StrictMode>
    <App films={mockFilms} reviews={mockReviws}/>
  </React.StrictMode>,
  document.getElementById('root'));
