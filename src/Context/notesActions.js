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

export const setIsOpenNote = (payload) => {
  return {
    type: 'SET_IS_OPEN_NOTE',
    payload,
  };
};

export const setIsEditNote = (payload) => {
  return {
    type: 'SET_IS_EDIT_NOTE',
    payload,
  };
};

export const setIsNewNoteCreate = (payload) => {
  return {
    type: 'SET_IS_NEW_NOTE_CREATE',
    payload,
  };
};

export const setAllNotes = (payload) => {
  return {
    type: 'SET_ALL_NOTES',
    payload,
  };
};
