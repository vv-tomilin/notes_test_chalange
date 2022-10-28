import { useReducer } from 'react';

import NotesContext from './Context/NotesContext';
import notesReducer, { initialState } from './Context/notesReducer.js';

import Workspase from './components/Workspase';
import Sidebar from './components/Sidebar';

import 'antd/dist/antd.css';

function App() {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const contextValue = { state: state, notesDispatch: dispatch };
  return (
    <NotesContext.Provider value={contextValue}>
      <Workspase />
      <Sidebar />
    </NotesContext.Provider>
  );
}

export default App;
