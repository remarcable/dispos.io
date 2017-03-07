import {
  SET_ACTIONS,
  UPDATE_FIELD,
  RESET_SHEET,
} from '../actions';

const initialState = [];

export default function actions(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACTIONS: {
      return [
        ...action.details,
      ];
    }
    case UPDATE_FIELD: {
      if (action.section === 'actions') {
        const previousState = [...state];
        previousState[action.id].fields = {
          ...previousState[action.id].fields,
          [action.field]: action.value,
        };
        return previousState;
      }

      return state;
    }
    case RESET_SHEET: {
      return [
        ...initialState,
      ];
    }

    default:
      return state;
  }
}
