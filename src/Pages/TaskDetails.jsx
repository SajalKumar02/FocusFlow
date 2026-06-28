import React from 'react';
import TaskDetailsPanel from '../feature/task/components/taskDetails/TaskDetailsPanel';

import BackButton from '../shared/BackButton';

const TaskDetails = () => {
  return (
    <div className="h-full p-4">
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <div className="flex flex-row">
          <BackButton />
        </div>
        <TaskDetailsPanel />
      </div>
    </div>
  );
};

export default TaskDetails;
