import {
  SET_SHEET,
  RESET_SHEET,
} from '../actionTypes';

import {
  setGeneral,
  setRequirements,
  setAdditionalDetails,
  setActions,
} from './setters';

import * as empty from './empty';

export function setSheet(general, requirements, additionalDetails, actions) {
  return dispatch => {
    dispatch(setGeneral(general));
    dispatch(setRequirements(requirements));
    dispatch(setAdditionalDetails(additionalDetails));
    dispatch(setActions(actions));
    dispatch({ type: SET_SHEET });
  };
}

export function resetSheet() {
  return { type: RESET_SHEET };
}

export function setEmptySheet() {
  const { general, requirements, additionalDetails, actions } = empty;
  return setSheet(general, requirements, additionalDetails, actions);
}

export * from './updateFields';
export * from './setters';
export * from './fileOperations';
