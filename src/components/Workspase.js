import React from 'react';

import { Button, Input as Search } from 'antd';

const Workspase = () => {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Search placeholder="Search..." onChange={handleSearch} />
      <Button type="primary">Create</Button>
    </div>
  );
};

export default Workspase;
