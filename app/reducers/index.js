import { combineReducers } from 'redux';

import general from './general';
import schedule from './schedule';
import requirements from './requirements';
import additionalDetails from './additionalDetails';
import actions from './actions';

import editMode from './editMode';
import printMode from './printMode';

const rootReducer = combineReducers({
  editMode,
  printMode,
  general,
  schedule,
  requirements,
  additionalDetails,
  actions,
});

export default rootReducer;
