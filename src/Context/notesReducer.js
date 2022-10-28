export const initialState = {
  noteIndexCurrent: 0,
  searchTerm: '',
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
