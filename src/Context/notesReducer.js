export const initialState = {
  notes: [],
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
    case 'SET_NEW_NOTE':
      return {
        ...state,
        notes: action.payload,
      };
    case 'SET_ALL_NOTES':
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
