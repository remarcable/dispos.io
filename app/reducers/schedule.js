import {
  SET_SCHEDULE,
  UPDATE_FIELD,
  RESET_SHEET,
} from '../actions';

const initialState = {};

export default function schedule(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SCHEDULE: {
      return {
        ...action.details,
      };
    }
    case UPDATE_FIELD: {
      if (action.section === 'schedule') {
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
