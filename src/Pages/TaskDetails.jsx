import React from 'react';
import { useParams } from 'react-router';

const TaskDetails = () => {
  const { taskId } = useParams();
  return <div>Tasks: {taskId}</div>;
};

export default TaskDetails;
