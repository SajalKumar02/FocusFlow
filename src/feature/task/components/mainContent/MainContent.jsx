import React from 'react';

import TaskList from './TaskList';
import AddNewTask from './AddNewTask.jsx';

const MainContent = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <AddNewTask />
      <TaskList />
    </div>
  );
};

export default MainContent;
