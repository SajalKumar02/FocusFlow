import React from 'react';

import Header from '../../../../shared/Header';

import TaskList from './TaskList';
import SearchBar from './SearchBar';
import AddNewTask from './AddNewTask.jsx';

const MainContent = () => {
  return (
    <div>
      <Header />
      <div className="p-2">
        <div className="flex flex-col gap-2">
          <SearchBar />
          <AddNewTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
