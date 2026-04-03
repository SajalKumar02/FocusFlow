export const PRESET_IDS = {
  ALL: -1,
  TODAY: -2,
  OVERDUE: -3,
};

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

export const filterTasksByListId = (listId, tasks) => {
  if (!Array.isArray(tasks)) return [];
  switch (listId) {
    case PRESET_IDS.ALL:
      return tasks;
    case PRESET_IDS.TODAY:
      return tasks.filter(isToday);
    case PRESET_IDS.OVERDUE:
      return tasks.filter(isOverdue);
    default:
      return tasks.filter((t) => t.list === listId);
  }
};

export const getTaskCountForList = (listId, tasks) => {
  const filteredList = filterTasksByListId(listId, tasks);
  return filteredList.length;
};

export const filterTaskByString = (filteringString, tasks) => {
  const lowerFilter = filteringString.toLowerCase();
  return tasks.filter((task) =>
    task.title.toLowerCase().includes(lowerFilter),
  );
};
