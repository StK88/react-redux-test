import { createStore, applyMiddleware, compose } from 'redux';
//compose for dev variant
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


import { routerMiddleware } from 'react-router-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { browserHistory } from 'react-router';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}
