import React from 'react';
import TaskList from './TaskList';
import SearchBar from './SearchBar';

const MainContent = () => {
  return (
    <div>
      <SearchBar />
      <TaskList />
    </div>
  );
};

export default MainContent;
