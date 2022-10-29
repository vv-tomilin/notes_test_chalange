export const setSearchTerm = (payload) => {
  return {
    type: 'SET_SEARCH_TERM',
    payload,
  };
};

export const setNewNote = (payload) => {
  return {
    type: 'SET_NEW_NOTE',
    payload,
  };
};

export const setCurrentIndex = (payload) => {
  return {
    type: 'SET_CURRENT_INDEX',
    payload,
  };
};

export const setIsCreatedNote = (payload) => {
  return {
    type: 'SET_IS_CREATED_NOTE',
    payload,
  };
};

export const setAllNotes = (payload) => {
  return {
    type: 'SET_ALL_NOTES',
    payload,
  };
};
