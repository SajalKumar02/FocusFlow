import { useContext } from 'react';

import { TaskContext } from '@/feature/task/context/provider';

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }

  return context;
};
