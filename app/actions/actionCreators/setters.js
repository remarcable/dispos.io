import {
  SET_GENERAL,
  SET_SCHEDULE,
  SET_REQUIREMENTS,
  SET_ADDITIONAL_DETAILS,
  SET_ACTIONS,
} from '../actionTypes';

export function setGeneral(general) {
  return { type: SET_GENERAL, details: general };
}

export function setSchedule(schedule) {
  return { type: SET_SCHEDULE, details: schedule };
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
