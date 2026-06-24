import { useEffect, useState } from 'react';

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
  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)),
    );
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const deleteAllTasks = () => {
    setTasks([]);
    localStorage.setItem(TASK, JSON.stringify([]));
  };

  useEffect(() => {
    localStorage.setItem(TASK, JSON.stringify(tasks));
  }, [tasks]);

  // LIST FUNCTIONS
  const addList = ({ newList }) => {
    setLists((prev) => {
      const updatedLists = [...prev, newList];
      return updatedLists;
    });
  };
  const editList = ({ id, newTitle }) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === id ? { ...list, title: newTitle } : list,
      ),
    );
  };
  const removeList = ({ id }) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
  };
  const deleteAllLists = () => {
    setLists([]);
    localStorage.setItem(LIST, JSON.stringify([]));
  };

  useEffect(() => {
    localStorage.setItem(LIST, JSON.stringify(lists));
  }, [lists]);

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
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext };
export default TaskProvider;
