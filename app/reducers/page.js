const initialState = {
  current: 'start',
};

export default function page(state = initialState, action = {}) {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return {
        ...state,
        current: action.nextPage,
      };
    }

    default:
      return state;
  }
}
