export const initialState = {
  notes: [],
  currentIndex: 0,
  searchTerm: '',
  isCreatedNote: false,
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
    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        currentIndex: action.payload,
      };
    case 'SET_IS_CREATED_NOTE':
      return {
        ...state,
        isCreatedNote: action.payload,
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
