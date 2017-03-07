import {
  SET_ADDITIONAL_DETAILS,
  UPDATE_FIELD,
  RESET_SHEET,
} from '../actions';

const initialState = {};

export default function additionalDetails(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ADDITIONAL_DETAILS: {
      return {
        ...action.details,
      };
    }
    case UPDATE_FIELD: {
      if (action.section === 'additionalDetails') {
        return {
          ...state,
          [action.field]: action.value,
        };
      }

      return state;
    }
    case RESET_SHEET: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}
