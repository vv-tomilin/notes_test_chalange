import { useContext } from 'react';
import { Button, Input as Search } from 'antd';

import NotesContext from '../Context/NotesContext';
import { setSearchTerm } from '../Context/notesActions';

const Workspase = () => {
  const notesContext = useContext(NotesContext);
  console.log(notesContext.state);

  const handleSearch = (event) => {
    const searchValue = event.target.value;

    notesContext.notesDispatch(setSearchTerm(searchValue));
  };

  return (
    <>
      <Search placeholder="Search..." onChange={handleSearch} />
      <Button type="primary">Create</Button>
    </>
  );
};

export default Workspase;
