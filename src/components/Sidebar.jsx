import React from 'react';

import data from '../data.json';

const Sidebar = () => {
  const notes = data.data;

  return (
    <div>
      {notes &&
        notes.map((note, index) => {
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
