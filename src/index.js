import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';

//Store
import initialState from './reducers/initialState';
import configureStore from './store/configureStore';
import rootReducer from './reducers';

import routes from './routes';

import './styles/app.scss';


const store = createStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

ReactDOM.render(

  <Provider store={store}>
    <Router routes={routes(store)} history={history} />
  </Provider>,
  rootEl
);
