import {
  SET_SHEET,
  RESET_SHEET,
} from '../actions';

const initialState = false;

export default function printMode(state = initialState, action = {}) {
  // This actually isn't correct yet. SET_SHEET just activates editMode
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
