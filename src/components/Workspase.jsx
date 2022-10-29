import { useContext, useState } from 'react';
import { Button, Input as Search } from 'antd';

import Editor from './Editor/Editor';
import NoteContent from './NoteContent';

import NotesContext from '../Context/NotesContext';
import { setSearchTerm, setIsCreatedNote } from '../Context/notesActions';

const Workspase = () => {
  const notesContext = useContext(NotesContext);
  const isCreated = notesContext.state.isCreatedNote;

  const [isNewNoteCreate, setIsNewNoteCreate] = useState(false);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    notesContext.notesDispatch(setSearchTerm(searchValue));
  };

  const createNewNote = () => {
    notesContext.notesDispatch(setIsCreatedNote(false));
    setIsNewNoteCreate(true);
  };

  return (
    <>
      <Search placeholder="Search..." onChange={handleSearch} />
      <Button onClick={createNewNote} type="primary">
        New Note
      </Button>
      {isNewNoteCreate && !isCreated && <Editor type="new" />}
      {isCreated && <NoteContent />}
    </>
  );
};

export default Workspase;
