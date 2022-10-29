import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'antd';

import NotesContext from '../Context/NotesContext';
import { setIsEditNote, setIsOpenNote } from '../Context/notesActions';

import ControllerDB from '../database/schema';

const NoteContent = () => {
  const { removeFromDB } = new ControllerDB();

  const notesContext = useContext(NotesContext);
  const notes = notesContext.state.notes;
  const index = notesContext.state.currentIndex;

  const currentRenderNote = notes.filter((note) => {
    if (note.id === index) {
      return note;
    }
  })[0];

  const editNote = () => {
    notesContext.notesDispatch(setIsEditNote(true));
    notesContext.notesDispatch(setIsOpenNote(false));
  };

  const deleteNote = () => {
    removeFromDB(index);
    notesContext.notesDispatch(setIsOpenNote(false));
  };

  return (
    <div style={{ border: '5px dashed red' }}>
      <ReactMarkdown children={currentRenderNote.content} />
      <div>{currentRenderNote.id}</div>
      <Button type="primary" onClick={editNote}>
        Edit
      </Button>
      <Button type="primary" danger onClick={deleteNote}>
        Delete
      </Button>
    </div>
  );
};

export default NoteContent;
