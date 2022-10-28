import { useContext, useState } from 'react';
import { Button, Input as Search } from 'antd';

import Editor from './Editor/Editor';

import NotesContext from '../Context/NotesContext';
import { setSearchTerm } from '../Context/notesActions';

const Workspase = () => {
  const notesContext = useContext(NotesContext);

  const [isNewNoteCreate, setIsNewNoteCreate] = useState(false);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    notesContext.notesDispatch(setSearchTerm(searchValue));
  };

  const createNewNote = () => {
    setIsNewNoteCreate(true);
  };

  return (
    <>
      <Search placeholder="Search..." onChange={handleSearch} />
      <Button onClick={createNewNote} type="primary">
        New Note
      </Button>
      {isNewNoteCreate && <Editor type="new" />}
    </>
  );
};

export default Workspase;
