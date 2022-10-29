import { useState, useContext } from 'react';
import { Button } from 'antd';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import options from './options';

import {
  setNewNote,
  setCurrentIndex,
  setIsOpenNote,
  setIsEditNote,
} from '../../Context/notesActions';
import NotesContext from '../../Context/NotesContext';

import ControllerDB from '../../database/schema';

const Editor = ({ type }) => {
  const { addNewNoteToDB, updateNoteToDB } = new ControllerDB();

  const notesContext = useContext(NotesContext);
  const currentState = notesContext.state;
  const currentIndex = notesContext.state.currentIndex;

  const editingNote = currentState.notes.filter((note) => {
    if (note.id === currentIndex) {
      return note;
    }
  })[0];

  const id = window.crypto.randomUUID();
  const [content, setContent] = useState('**Новая заметка**\n\n');
  const title = content ? content.match(/\*(.+?)(?:\n|$)/g) : '';

  const changeContent = (value) => {
    setContent(value);
  };

  const createNewNote = () => {
    addNewNoteToDB({ id, title, content });
    notesContext.notesDispatch(setNewNote([...currentState.notes, { id, title, content }]));
    notesContext.notesDispatch(setCurrentIndex(id));
    notesContext.notesDispatch(setIsOpenNote(true));
  };

  const saveEditedNote = () => {
    updateNoteToDB(currentIndex, { title, content });
    notesContext.notesDispatch(setCurrentIndex(currentIndex));
    notesContext.notesDispatch(setIsOpenNote(true));
  };

  const cancelEdit = () => {
    notesContext.notesDispatch(setIsEditNote(false));
    notesContext.notesDispatch(setIsOpenNote(true));
  };

  return (
    <div>
      {type === 'new' && (
        <>
          <SimpleMDE value={content} options={options} onChange={changeContent} />
          <Button type="primary" onClick={createNewNote}>
            Create
          </Button>
        </>
      )}
      {type === 'edit' && (
        <>
          <SimpleMDE value={editingNote.content} options={options} onChange={changeContent} />
          <Button type="primary" onClick={saveEditedNote}>
            Save
          </Button>
          <Button type="dashed" onClick={cancelEdit}>
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};

export default Editor;
