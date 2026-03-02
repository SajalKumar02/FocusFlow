import React, { createContext, useReducer, useEffect } from "react";

import {
  todoReducer,
  initialiser,
  initialState,
} from "../reducer/reducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // Initialize the state with an empty array or load from localStorage
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState,
    initialiser,
  );

  useEffect(() => {
    localStorage.setItem("todoState", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state: state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
