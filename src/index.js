import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter basename="/rick-shop">
    <Provider store={store}>
      <React.StrictMode>

        <App />

      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

