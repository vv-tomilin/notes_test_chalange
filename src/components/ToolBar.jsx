import { useContext } from 'react';
import { Button, Input as Search, Space } from 'antd';

import NotesContext from '../Context/NotesContext';
import {
  setSearchTerm,
  setIsOpenNote,
  setIsNewNoteCreate,
  setIsEditNote,
} from '../Context/notesActions';

const ToolBar = () => {
  const notesContext = useContext(NotesContext);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    notesContext.notesDispatch(setSearchTerm(searchValue));
  };

  const createNewNote = () => {
    notesContext.notesDispatch(setIsOpenNote(false));
    notesContext.notesDispatch(setIsNewNoteCreate(true));
    notesContext.notesDispatch(setIsEditNote(false));
  };
  return (
    <Space style={{ width: '100%' }}>
      <Search placeholder="Search..." onChange={handleSearch} style={{ width: '50vw' }} />
      <Button onClick={createNewNote} type="primary">
        New Note
      </Button>
    </Space>
  );
};

export default ToolBar;
