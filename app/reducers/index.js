import { combineReducers } from 'redux';

import general from './general';
import requirements from './requirements';
import additionalDetails from './additionalDetails';
import actions from './actions';

import editMode from './editMode';
import filePath from './filePath';

const rootReducer = combineReducers({
  editMode,
  filePath,
  general,
  requirements,
  additionalDetails,
  actions,
});

export default rootReducer;
