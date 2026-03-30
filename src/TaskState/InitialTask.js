export default [
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
