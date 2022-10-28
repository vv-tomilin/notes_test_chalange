import { useState, useContext } from 'react';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import options from './options';

import { Button } from 'antd';

import { setNewNote } from '../../Context/notesActions';
import NotesContext from '../../Context/NotesContext';

const Editor = ({ type }) => {
  const notesContext = useContext(NotesContext);
  const currentState = notesContext.state;

  const [content, setContent] = useState('**Новая заметка**\n\n');
  const title = content ? content.match(/\*(.+?)(?:\n|$)/g)[0] : '';

  const changeContent = (value) => {
    setContent(value);
  };

  const createNewNote = () => {
    notesContext.notesDispatch(
      setNewNote([...currentState.notes, { id: window.crypto.randomUUID(), title, content }])
    );
  };

  return (
    <div>
      <SimpleMDE value={content} options={options} onChange={changeContent} />
      <Button type="primary" onClick={createNewNote}>
        Create
      </Button>
    </div>
  );
};

export default Editor;
