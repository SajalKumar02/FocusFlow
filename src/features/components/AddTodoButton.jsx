import React, { useContext } from "react";

import TodoContext from "../context/createContext";

const AddTodoButton = () => {
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    const title = prompt("Enter todo title:", "Todo ");
    if (title == null) {
      return;
    }

    const content = prompt("Enter todo content:");
    if (content == null) {
      return;
    }

    if (!title || !content) {
      alert("Title and content cannot be empty.");
      return;
    }
    dispatch({
      type: "ADD_TODO",
      payload: { title: title, content: content },
    });
  };

  return (
    <button
      className="font-semibold bg-gray-600 text-white border-2 p-2 mb-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-300"
      onClick={handleAddTodo}
    >
      Add Todo
    </button>
  );
};

export default AddTodoButton;
