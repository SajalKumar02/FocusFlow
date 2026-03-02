import { useContext, useMemo } from "react";

import TodoContext from "../context/createContext.jsx";
import TodoItem from "./TodoItem.jsx";

import {
  sortTodos,
  filterTodos,
  filterStatusTodos,
} from "../../shared/utils/TodoHelpers.js";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const { todos, filter, sort, status } = state;

  const filteredTodos = useMemo(() => {
    let filtered = [...todos];

    filtered = filterTodos(filtered, filter);
    filtered = filterStatusTodos(filtered, status);
    filtered = sortTodos(filtered, sort);

    return filtered;
  }, [todos, filter, sort, status]);

  return (
    <div className="overflow-y-auto p-4">
      {filteredTodos &&
        filteredTodos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default TodoList;
