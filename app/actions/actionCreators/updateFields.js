import {
  UPDATE_FIELD,
} from '../actionTypes';


export function updateFieldGeneral(field, value) {
  return { type: UPDATE_FIELD, field, value, section: 'general' };
}

export function updateFieldRequirements(field, value) {
  return { type: UPDATE_FIELD, field, value, section: 'requirements' };
}

export function updateFieldAdditionalDetails(field, value) {
  return { type: UPDATE_FIELD, field, value, section: 'additionalDetails' };
}

export function updateFieldActions(id, field, value) {
  return { type: UPDATE_FIELD, id, field, value, section: 'actions' };
}
