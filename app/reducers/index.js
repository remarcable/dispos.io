// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import page from './page';

const rootReducer = combineReducers({
  page,
  routing
});

export default rootReducer;
