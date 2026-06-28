export const LOCAL_STORAGE_KEY = 'tasks';

export const initialTasks = [
  {
    id: 1,
    title: 'Welcome to Task Manager!',
    completed: false,
    description: '',
    subtasks: [],
    list: '',
    dueDate: new Date(),
  },
  {
    id: 2,
    title: 'Try completing this task',
    completed: false,
    description: '',
    subtasks: [
      { id: 201, title: 'Check the box', completed: false },
      { id: 202, title: 'Add a new task', completed: false },
    ],
    list: '',
    dueDate: new Date(),
  },
  {
    id: 3,
    title: 'Feel free to add or remove tasks',
    completed: false,
    description: '',
    subtasks: [],
    list: '',
    dueDate: new Date(),
  },
];
