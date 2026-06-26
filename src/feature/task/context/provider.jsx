import { useEffect, useState, useCallback } from 'react';

import TaskContext from './context';

import {
  initialTasks,
  LOCAL_STORAGE_KEY as TASK,
} from '../constants/initialTasks';
import {
  initialLists,
  defaultListNames,
  LOCAL_STORAGE_KEY as LIST,
} from '../constants/initialLists';

const TaskProvider = ({ children }) => {
  const getInitialData = (key, fallback) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  };

  const [tasks, setTasks] = useState(() => getInitialData(TASK, initialTasks));
  const [lists, setLists] = useState(() => getInitialData(LIST, initialLists));

  // TASK FUNCTIONS
  const addTask = useCallback((title) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: title,
        completed: false,
        subtasks: [],
        list: '',
      },
    ]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const editTask = useCallback((id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    );
  }, []);

  const removeTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const deleteAllTasks = useCallback(() => {
    setTasks([]);
    localStorage.setItem(TASK, JSON.stringify([]));
  }, []);

  useEffect(() => {
    localStorage.setItem(TASK, JSON.stringify(tasks));
  }, [tasks]);

  // LIST FUNCTIONS
  const addList = useCallback((title) => {
    setLists((prev) => {
      const updatedLists = [
        ...prev,
        {
          id: new Date(),
          title: title.charAt(0).toUpperCase() + title.slice(1),
          value: title.toLowerCase(),
        },
      ];
      return updatedLists;
    });
  }, []);

  const editList = useCallback(({ id, newTitle }) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, title: newTitle } : list,
      ),
    );
  }, []);

  const removeList = useCallback(({ id }) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
  }, []);

  const deleteAllLists = useCallback(() => {
    setLists([]);
    localStorage.setItem(LIST, JSON.stringify([]));
  }, []);

  useEffect(() => {
    localStorage.setItem(LIST, JSON.stringify(lists));
  }, [lists]);

  const deleteAllData = useCallback(() => {
    setTasks(initialTasks);
    setLists(initialLists);
    localStorage.setItem(TASK, JSON.stringify(initialTasks));
    localStorage.setItem(LIST, JSON.stringify(initialLists));
  }, []);

  return (
    <TaskContext.Provider
      value={{
        // TASK
        tasks,
        addTask,
        toggleTask,
        editTask,
        removeTask,
        deleteAllTasks,
        // LIST
        lists,
        defaultListNames,
        addList,
        editList,
        removeList,
        deleteAllLists,
        // New User
        deleteAllData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext };
export default TaskProvider;
