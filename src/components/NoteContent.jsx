import { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import ReactMarkdown from 'react-markdown';

import NotesContext from '../Context/NotesContext';
import { setIsEditNote, setIsOpenNote } from '../Context/notesActions';

import ControllerDB from '../database/schema';

const NoteContent = () => {
  const { removeFromDB } = new ControllerDB();

  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const notesContext = useContext(NotesContext);
  const notes = notesContext.state.notes;
  const index = notesContext.state.currentIndex;

  const currentRenderNote = notes.filter((note) => {
    if (note.id === index) {
      return note;
    }
  })[0];

  const editNote = () => {
    notesContext.notesDispatch(setIsEditNote(true));
    notesContext.notesDispatch(setIsOpenNote(false));
  };

  const openConfirmationModal = () => {
    setOpenConfirmModal(true);
  };

  const closeConfirmationModal = () => {
    setOpenConfirmModal(false);
  };

  const deleteNote = () => {
    removeFromDB(index);
    notesContext.notesDispatch(setIsOpenNote(false));
  };

  return (
    <div style={{ border: '5px dashed red' }}>
      <ReactMarkdown children={currentRenderNote.content} />
      <div>{currentRenderNote.id}</div>
      <Button type="primary" onClick={editNote}>
        Edit
      </Button>
      <Button type="primary" danger onClick={openConfirmationModal}>
        Delete
      </Button>
      <Modal
        title="Delete note"
        open={openConfirmModal}
        onOk={deleteNote}
        onCancel={closeConfirmationModal}>
        <p>Do you really want to delete the note?</p>
      </Modal>
    </div>
  );
};

export default NoteContent;
