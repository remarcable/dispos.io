import {
  SET_FILE_PATH,
  RESET_FILE_PATH,
} from '../actions';

const initialState = '';

export default function filePath(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FILE_PATH: {
      return action.filePath;
    }
    case RESET_FILE_PATH: {
      return '';
    }

    default:
      return state;
  }
}
