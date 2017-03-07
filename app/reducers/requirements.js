import {
  SET_REQUIREMENTS,
  UPDATE_FIELD,
  RESET_SHEET,
} from '../actions';

const initialState = {};

export default function requirements(state = initialState, action = {}) {
  switch (action.type) {
    case SET_REQUIREMENTS: {
      return {
        ...action.details,
      };
    }
    case UPDATE_FIELD: {
      if (action.section === 'requirements') {
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
