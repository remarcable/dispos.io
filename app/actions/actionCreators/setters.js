import randomize from 'randomatic';

import {
  SET_GENERAL,
  SET_REQUIREMENTS,
  SET_ADDITIONAL_DETAILS,
  SET_ACTIONS,
  ADD_ACTION,
  REMOVE_ACTION,
  SET_FILE_PATH,
  RESET_FILE_PATH,
} from '../actionTypes';

export function setGeneral(general) {
  return { type: SET_GENERAL, details: general };
}

export function setRequirements(requirements) {
  return { type: SET_REQUIREMENTS, details: requirements };
}

export function setAdditionalDetails(additionalDetails) {
  return { type: SET_ADDITIONAL_DETAILS, details: additionalDetails };
}

export function setActions(actions) {
  return { type: SET_ACTIONS, details: actions };
}

export function addAction(action) {
  // Add a random id for Reacts requirement to add a 'key' in order to work properly
  const id = randomize('A0', 10);
  return { type: ADD_ACTION, details: { ...action, id } };
}

export function removeAction(actionIndex) {
  return { type: REMOVE_ACTION, index: actionIndex };
}

export function setFilePath(filePath) {
  return { type: SET_FILE_PATH, filePath };
}

export function resetFilePath() {
  return { type: RESET_FILE_PATH };
}
