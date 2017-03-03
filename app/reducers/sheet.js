const initialState = {};

export default function sheet(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_SHEET': {
      return {
        ...initialState,
        ...action.sheet,
      };
    }

    default:
      return state;
  }
}
