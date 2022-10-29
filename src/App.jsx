import { useReducer, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import NotesContext from './Context/NotesContext';
import notesReducer, { initialState } from './Context/notesReducer.js';
import { setAllNotes } from './Context/notesActions';

import Workspase from './components/Workspase';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';

import data from './data.json';
import { db } from './database/db';

function App() {
  const notesDb = useLiveQuery(() => {
    return db.notes.toArray();
  });

  const [state, dispatch] = useReducer(notesReducer, initialState);
  const contextValue = { state: state, notesDispatch: dispatch };

  useEffect(() => {
    dispatch(setAllNotes(notesDb));
  }, [notesDb]);

  console.log('STATE = ', state);

  return (
    <NotesContext.Provider value={contextValue}>
      <Workspase />
      <Sidebar />
    </NotesContext.Provider>
  );
}

export default App;
