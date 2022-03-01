import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockFilms from './moks/films';
import {mockReviws} from './moks/films';


// const movieData = {
//   title: 'The Grand Budapest Hotel',
//   genre: 'Drama',
//   year: 2014,
// };

ReactDOM.render(
  <React.StrictMode>
    <App films={mockFilms} reviews={mockReviws}/>
  </React.StrictMode>,
  document.getElementById('root'));
