import { useContext } from 'react';

import { setCurrentIndex, setIsOpenNote } from '../Context/notesActions';
import NotesContext from '../Context/NotesContext';

const Sidebar = () => {
  const notesContext = useContext(NotesContext);
  const searchTerm = notesContext.state.searchTerm;

  const notes = notesContext.state.notes;

  const isFilterNote = (element) => {
    return element.toLowerCase().replaceAll('\n', '').includes(searchTerm.toLowerCase());
  };

  const openNoteContent = (id) => {
    console.log('open', id);
    notesContext.notesDispatch(setCurrentIndex(id));
    notesContext.notesDispatch(setIsOpenNote(true));
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
          .map((note) => {
            return (
              <div
                onClick={() => openNoteContent(note.id)}
                key={note.id}
                style={{ margin: '10px', border: '2px solid black' }}>
                <div>{note.title}</div>
                <div>{note.content}</div>
              </div>
            );
          })}
    </div>
  );
};

export default Sidebar;
