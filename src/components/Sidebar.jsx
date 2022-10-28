import { useContext, useEffect } from 'react';
import NotesContext from '../Context/NotesContext';
import { setAllNotes } from '../Context/notesActions';

const Sidebar = () => {
  const notesContext = useContext(NotesContext);
  const searchTerm = notesContext.state.searchTerm;

  const notes = notesContext.state.notes;

  const isFilterNote = (element) => {
    return element.toLowerCase().replaceAll('\n', '').includes(searchTerm.toLowerCase());
  };

  return (
    <div>
      {notes &&
        notes
          .filter((note) => {
            if (searchTerm === '') {
              return note;
            } else if (isFilterNote(note.title) || isFilterNote(note.content)) {
              return note;
            }
          })
          .map((note, index) => {
            return (
              <div key={index} style={{ margin: '10px', border: '2px solid black' }}>
                <div>{note.title}</div>
                <div>{note.content}</div>
              </div>
            );
          })}
    </div>
  );
};

export default Sidebar;
