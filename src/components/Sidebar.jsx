import { useContext } from 'react';
import NotesContext from '../Context/NotesContext';

import data from '../data.json';

const Sidebar = () => {
  const notes = data.data;

  const searchTerm = useContext(NotesContext).state.searchTerm;

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
