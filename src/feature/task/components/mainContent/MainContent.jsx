import React from 'react';

import TaskList from './TaskList';
import AddNewTask from './AddNewTask.jsx';

const MainContent = () => {
  return (
    <div className="focusflow-component">
      <div className="bg-white grid gap-2 rounded-lg border border-slate-200 p-4">
        <AddNewTask />
        <TaskList />
      </div>
    </div>
  );
};

export default MainContent;
