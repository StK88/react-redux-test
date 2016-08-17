import { combineReducers } from 'redux';
import fields from './fields';
import sortBy from './sortBy';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  fields,
  sortBy
})

export default rootReducer
