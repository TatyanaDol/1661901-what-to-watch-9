import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MovieData = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App title = {MovieData.title}
      genre = {MovieData.genre}
      year = {MovieData.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
