import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store/index';
import {fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
