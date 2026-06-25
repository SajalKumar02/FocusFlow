import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useTasks } from '../feature/task';

const TaskDetails = () => {
  const { taskId } = useParams();
  const { tasks } = useTasks();
  const [task, setTask] = useState();

  return (
    <div>
      <div>
        {/* Header */}
        {/* Description */}
        {/* Subtasks */}
      </div>
      <div>
        {/* List */}
        {/* Due Date */}
        {/* Priority */}
        {/* Status */}
        {/* Created */}
        {/* lastUpdated */}
      </div>
    </div>
  );
};

export default TaskDetails;
