import { useReducer, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Layout } from 'antd';

import NotesContext from './Context/NotesContext';
import notesReducer, { initialState } from './Context/notesReducer.js';
import { setAllNotes } from './Context/notesActions';

import Workspase from './components/Workspase';
import Sidebar from './components/Sidebar';
import ToolBar from './components/ToolBar';

import 'antd/dist/antd.css';
import './styles/main.css';

import ControllerDB from './database/schema';

const { Header, Content, Sider } = Layout;

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

  return (
    <NotesContext.Provider value={contextValue}>
      <Layout></Layout>
      <Layout hasSider style={{ minWidth: '300px' }}>
        <Sider
          style={{
            background: '#252525',
            overflow: 'auto',
            position: 'relative',
            left: 0,
            top: 0,
          }}>
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{ padding: '0 14px' }}>
            <ToolBar />
          </Header>
          <Content>
            <Workspase />
          </Content>
        </Layout>
      </Layout>
    </NotesContext.Provider>
  );
};

export default App;
