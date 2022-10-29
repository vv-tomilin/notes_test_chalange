export const initialState = {
  notes: [],
  currentIndex: 0,
  searchTerm: '',
  isOpenNote: false,
  isEditNote: false,
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
    case 'SET_IS_OPEN_NOTE':
      return {
        ...state,
        isOpenNote: action.payload,
      };
    case 'SET_IS_EDIT_NOTE':
      return {
        ...state,
        isEditNote: action.payload,
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
