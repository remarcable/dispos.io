import { ipcRenderer } from 'electron';
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

export function setSheet(general, schedule, requirements, additionalDetails, actions) {
  return dispatch => {
    dispatch(setGeneral(general));
    dispatch(setSchedule(schedule));
    dispatch(setRequirements(requirements));
    dispatch(setAdditionalDetails(additionalDetails));
    dispatch(setActions(actions));
    dispatch({ type: SET_SHEET });
  };
}

export function resetSheet() {
  return { type: RESET_SHEET };
}

export function openFile() {
  return () => {
    setTimeout(() => {
      ipcRenderer.send('show-open-file');
    }, 200); // To make buttons appear snappier
  };
}

export function setEmptySheet() {
  const { general, schedule, requirements, additionalDetails, actions } = empty;
  return setSheet(general, schedule, requirements, additionalDetails, actions);
}

export * from './updateFields';
export * from './setters';
