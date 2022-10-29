import { useContext } from 'react';
import { Card, Space } from 'antd';
import ReactMarkdown from 'react-markdown';
import removeMd from 'remove-markdown';

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
    notesContext.notesDispatch(setCurrentIndex(id));
    notesContext.notesDispatch(setIsOpenNote(true));
  };

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', height: '100vh', marginTop: '30px' }}>
      {notes &&
        notes
          .filter((note) => {
            if (searchTerm === '') {
              return note;
            } else if (isFilterNote(note.title[0]) || isFilterNote(note.content)) {
              return note;
            }
          })
          .sort((a, b) => b.createTime - a.createTime)
          .map((note) => {
            return (
              <Card
                style={{ margin: '0 15px 15px' }}
                title={removeMd(note.title[0])}
                size="small"
                onClick={() => openNoteContent(note.id)}
                key={note.id}>
                <ReactMarkdown children={note.title} />
                <ReactMarkdown
                  children={note.content.replace(note.title, '').slice(0, 30) + '...'}
                />
              </Card>
            );
          })}
    </Space>
  );
};

export default Sidebar;
