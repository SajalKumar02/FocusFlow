import React from 'react';

import TaskList from '@/feature/task/components/mainContent/TaskList';
import AddNewTask from '@/feature/task/components/mainContent/AddNewTask';

const MainContent = () => {
  return (
    <div className="focusflow-component">
      <div className="bg-surface grid gap-2 rounded-lg border border-app p-4">
        <AddNewTask />
        <TaskList />
      </div>
    </div>
  );
};

export default MainContent;
