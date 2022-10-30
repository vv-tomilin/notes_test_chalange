import { useContext } from 'react';
import { Space } from 'antd';

import Editor from './Editor';
import NoteContent from './NoteContent';

import NotesContext from '../Context/NotesContext';

const Workspase = () => {
  const notesContext = useContext(NotesContext);
  const isOpenNote = notesContext.state.isOpenNote;
  const isEditNote = notesContext.state.isEditNote;
  const isNewNoteCreate = notesContext.state.isNewNoteCreate;

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {isNewNoteCreate && !isOpenNote && !isEditNote && <Editor type="new" />}
      {isEditNote && !isOpenNote && <Editor type="edit" />}
      {isOpenNote && <NoteContent />}
      {!isNewNoteCreate && !isEditNote && !isOpenNote && (
        <div className="prymary-text centring-all">Select note or create new note...</div>
      )}
    </Space>
  );
};

export default Workspase;
