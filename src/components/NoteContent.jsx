import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import NotesContext from '../Context/NotesContext';

const NoteContent = () => {
  const notesContext = useContext(NotesContext);
  const notes = notesContext.state.notes;
  const index = notesContext.state.currentIndex;

  const currentRenderNote = notes.filter((note) => {
    if (note.id === index) {
      return note;
    }
  })[0];

  console.log(currentRenderNote);

  return (
    <div style={{ border: '5px dashed red' }}>
      <ReactMarkdown children={currentRenderNote.content} />
      <div>{currentRenderNote.id}</div>
    </div>
  );
};

export default NoteContent;
