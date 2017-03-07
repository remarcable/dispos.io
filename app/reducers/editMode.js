import {
  SET_SHEET,
  RESET_SHEET,
} from '../actions';

const initialState = false;

export default function editMode(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SHEET: {
      return true;
    }
    case RESET_SHEET: {
      return false;
    }

    default:
      return state;
  }
}
