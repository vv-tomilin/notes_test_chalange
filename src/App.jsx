import { useReducer, useEffect } from 'react';

import NotesContext from './Context/NotesContext';
import notesReducer, { initialState } from './Context/notesReducer.js';
import { setAllNotes } from './Context/notesActions';

import Workspase from './components/Workspase';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';

import data from './data.json';

function App() {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const contextValue = { state: state, notesDispatch: dispatch };

  useEffect(() => {
    dispatch(setAllNotes(data.data));
  }, []);

  console.log('APP_STATE = ', state);

  return (
    <NotesContext.Provider value={contextValue}>
      <Workspase />
      <Sidebar />
    </NotesContext.Provider>
  );
}

export default App;
