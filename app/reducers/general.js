import {
  SET_GENERAL,
  UPDATE_FIELD,
  RESET_SHEET,
} from '../actions';

const initialState = {};

export default function general(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GENERAL: {
      return {
        ...action.details,
      };
    }
    case UPDATE_FIELD: {
      if (action.section === 'general') {
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
