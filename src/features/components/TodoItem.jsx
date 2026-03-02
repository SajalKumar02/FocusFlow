import { useContext, useEffect } from "react";

import TodoContext from "../context/createContext";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: item.id } });
  };

  const handleCopy = () => {
    dispatch({
      type: "ADD_TODO",
      payload: { title: item.title, content: item.content },
    });
  };

  const handleCheckboxChange = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: { id: item.id },
    });
  };

  return (
    <div className="flex flex-row border-2 border-gray-300 p-4 mb-4 bg-white rounded-lg shadow-md justify-between ">
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={handleCheckboxChange}
      >
        <input
          type="checkbox"
          className="mr-2"
          onClick={handleCheckboxChange}
          onChange={handleCheckboxChange}
          name="toggle-completed-task"
          checked={item.completed}
        />

        <p
          className={`font-semibold text-md select-none ${
            item.completed ? "line-through" : ""
          }`}
        >
          <span className="capitalize">{item.title}</span>
          {"  "}
          <span className="text-gray-700 font-light">
            {item.content}
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center">
        <span className="h-full border-1 mx-2"></span>

        <img
          src="/Trash-Linear-32px.svg"
          alt="Delete"
          className="w-6 cursor-pointer"
          onClick={() => {
            handleDelete();
          }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
