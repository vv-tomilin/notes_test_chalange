import { useReducer, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import NotesContext from './Context/NotesContext';
import notesReducer, { initialState } from './Context/notesReducer.js';
import { setAllNotes } from './Context/notesActions';

import Workspase from './components/Workspase';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';

import ControllerDB from './database/schema';

const App = () => {
  const storage = new ControllerDB();

  const notesDb = useLiveQuery(() => {
    return storage.getAllNotesFromDB();
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
};

export default App;
