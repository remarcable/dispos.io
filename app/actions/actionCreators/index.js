import {
  SET_SHEET,
  RESET_SHEET,
} from '../actionTypes';

import {
  setGeneral,
  setSchedule,
  setRequirements,
  setAdditionalDetails,
  setActions,
} from './setters';

import * as empty from './empty';
import * as example from './example';

export function setSheet(general, schedule, requirements, additionalDetails, actions) {
  return dispatch => {
    dispatch({ type: SET_SHEET });
    dispatch(setGeneral(general));
    dispatch(setSchedule(schedule));
    dispatch(setRequirements(requirements));
    dispatch(setAdditionalDetails(additionalDetails));
    dispatch(setActions(actions));
  };
}

export function resetSheet() {
  return { type: RESET_SHEET };
}

export function setExampleSheet() {
  const { general, schedule, requirements, additionalDetails, actions } = example;
  return setSheet(general, schedule, requirements, additionalDetails, actions);
}

export function setEmptySheet() {
  const { general, schedule, requirements, additionalDetails, actions } = empty;
  return setSheet(general, schedule, requirements, additionalDetails, actions);
}

export * from './updateFields';
export * from './setters';
