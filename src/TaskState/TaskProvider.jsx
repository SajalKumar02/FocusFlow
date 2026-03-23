import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
// Task Setup
import taskReducer from "./taskReducer";
import {
  addTask,
  removeTask,
  toggleTask,
  editTask,
} from "./taskActions.js";

import {
  PRESET_IDS,
  getTaskCountForList,
  filterTasksByListId,
} from "../utils/ListHelper";

const TaskContext = createContext();

// Toast Setup
import { ToastContext } from "../Toast/ToastProvider";

const initialTasks = [
  {
    id: 1,
    title: "Welcome to Task Manager!",
    completed: false,
    subtasks: [],
    list: 0,
  },
  {
    id: 2,
    title: "Try completing this task",
    completed: false,
    subtasks: [
      { id: 201, title: "Check the box", completed: false },
      { id: 202, title: "Add a new task", completed: false },
    ],
    list: 0,
  },
  {
    id: 3,
    title: "Feel free to add or remove tasks",
    completed: false,
    subtasks: [],
    list: 0,
  },
];

const loadtasksFromLocalStorage = () => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    } else {
      return initialTasks;
    }
  } catch (e) {
    console.error("Failed to load tasks from localStorage", e);
    return initialTasks;
  }
};

const LOCAL_STORAGE_KEY = "tasks";

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    undefined,
    loadtasksFromLocalStorage,
  );

  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage", e);
    }
  }, [tasks]);

  const handleAddTask = (title, listid) => {
    dispatch(addTask(title, listid));
    showToast("success", "Task added!");
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
    showToast("danger", "Task deleted!");
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
    const t = tasks.find((task) => task.id === id);
    if (t && !t.completed) {
      showToast("success", "Task completed!");
    }
  };

  const handleEditTask = (id, updates) => {
    dispatch(editTask(id, updates));
    showToast("success", "Task updated!");
  };

  const getCountOfPresetLists = (listid) => {
    return getTaskCountForList(listid, tasks);
  };

  const getFilteredTasks = (listid) => {
    return filterTasksByListId(listid, tasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask: handleAddTask,
        removeTask: handleRemoveTask,
        toggleTask: handleToggleTask,
        editTask: handleEditTask,
        // List Utils
        PRESET_IDS: PRESET_IDS,
        getFilteredTasks: getFilteredTasks,
        getCountOfPresetLists: getCountOfPresetLists,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext };
export default TaskProvider;
