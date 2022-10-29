import { useContext, useState } from 'react';
import { Button, Input as Search } from 'antd';

import Editor from './Editor/Editor';
import NoteContent from './NoteContent';

import NotesContext from '../Context/NotesContext';
import { setSearchTerm, setIsOpenNote } from '../Context/notesActions';

const Workspase = () => {
  const notesContext = useContext(NotesContext);
  const isOpenNote = notesContext.state.isOpenNote;
  const isEditNote = notesContext.state.isEditNote;

  const [isNewNoteCreate, setIsNewNoteCreate] = useState(false);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    notesContext.notesDispatch(setSearchTerm(searchValue));
  };

  const createNewNote = () => {
    notesContext.notesDispatch(setIsOpenNote(false));
    setIsNewNoteCreate(true);
  };

  return (
    <>
      <Search placeholder="Search..." onChange={handleSearch} />
      <Button onClick={createNewNote} type="primary">
        New Note
      </Button>
      {isNewNoteCreate && !isOpenNote && !isEditNote && <Editor type="new" />}
      {isEditNote && !isOpenNote && <Editor type="edit" />}
      {isOpenNote && <NoteContent />}
    </>
  );
};

export default Workspase;
