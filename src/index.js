import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../src/containers/organisms/HomePage/HomePage';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state);

ReactDOM.hydrate(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
