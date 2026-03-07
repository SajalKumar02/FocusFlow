import React, { createContext, useReducer } from "react";
import todoReducer from "./todoReducer";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext };
export default TodoProvider;
