import React, { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";
import * as todoActions from "./todoActions";

const TodoContext = createContext();

const initialTodos = {
  tasks: [
    {
      id: 1,
      listId: "personal",
      title: "Buy groceries",
      completed: false,
      details: "Milk, bread, eggs",
      deadline: null,
      creation: new Date(),
      starred: false,
      priority: "medium",
      subTasks: [],
    },
    {
      id: 2,
      listId: "personal",
      title: "Call a friend",
      completed: false,
      details: "Catch up with Alex",
      deadline: null,
      creation: new Date(),
      starred: false,
      priority: "low",
      subTasks: [],
    },
    {
      id: 3,
      listId: "work",
      title: "Submit report",
      completed: false,
      details: "Quarterly numbers",
      deadline: null,
      creation: new Date(),
      starred: false,
      priority: "high",
      subTasks: [],
    },
    {
      id: 4,
      listId: "work",
      title: "Team meeting",
      completed: false,
      details: "Discuss new project",
      deadline: null,
      creation: new Date(),
      starred: false,
      priority: "medium",
      subTasks: [],
    },
  ],
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Attach all actions and dispatch for use in context
  const actions = {};
  Object.keys(todoActions).forEach((key) => {
    actions[key] = (...args) => dispatch(todoActions[key](...args));
  });

  return (
    <TodoContext.Provider value={{ todos, dispatch, ...actions }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
export default TodoProvider;
