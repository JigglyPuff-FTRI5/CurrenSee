import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter } from 'react-router-dom';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);