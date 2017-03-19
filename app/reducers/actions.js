import {
  SET_ACTIONS,
  ADD_ACTION,
  REMOVE_ACTION,
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
    case ADD_ACTION: {
      const details = action.details || {};

      return [
        ...state,
        {
          id: details.id,
          fields: {
            title: details.title || '',
            description: details.description || '',
            length: details.length || '',
            artist: details.artist || '',
            requirements: details.requirements || '',
          },
        }
      ];
    }
    case REMOVE_ACTION: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
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
