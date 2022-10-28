export const initialState = {
  noteIndexCurrent: 0,
  serchTerm: '',
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        serchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
