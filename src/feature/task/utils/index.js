import { defaultListNames } from '../constants/initialLists';

const isToday = (task) => {
  if (!task.dueDate) return false;
  const today = new Date();
  const dueDate = new Date(task.dueDate);
  return (
    dueDate.getDate() === today.getDate() &&
    dueDate.getMonth() === today.getMonth() &&
    dueDate.getFullYear() === today.getFullYear()
  );
};

const isOverdue = (task) => {
  if (!task.dueDate || task.completed) return false;
  const now = new Date();
  const dueDate = new Date(task.dueDate);
  return dueDate < now;
};

export const getTasksByList = (tasks, listId) => {
  if (!Array.isArray(tasks)) return [];
  if (!listId) {
    return tasks;
  } else {
    switch (listId) {
      case defaultListNames[0].value:
        return tasks;
      case defaultListNames[1].value:
        return tasks.filter(isToday);
      case defaultListNames[2].value:
        return tasks.filter(isOverdue);
      default:
        return tasks.filter((t) => t.list === listId);
    }
  }
};

export const getTaskCountForList = (listId, tasks) => {
  const filteredList = getTasksByList(listId, tasks);
  return filteredList.length;
};

export const filterTaskByString = (filteringString, tasks) => {
  const lowerFilter = filteringString.toLowerCase();
  return tasks.filter((task) => task.title.toLowerCase().includes(lowerFilter));
};

export const getTasksByString = (tasks, searchString) => {
  if (!Array.isArray(tasks) || !searchString) return tasks;
  const lowerSearch = searchString.toLowerCase();
  return tasks.filter((task) => task.title.toLowerCase().includes(lowerSearch));
};

export const getTaskByTaskId = (tasks, taskId) => {
  if (!Array.isArray(tasks) || !taskId) return [];
  return tasks.filter((task) => String(task.id) === String(taskId));
};

export const getPercentageCompleteCount = (task) => {
  if (!Array.isArray(task.subtasks) || task.subtasks.length === 0) return 0;
  const completedCount = task.subtasks.filter((st) => st.completed).length;
  return Math.round((completedCount * 100) / task.subtasks.length);
};
