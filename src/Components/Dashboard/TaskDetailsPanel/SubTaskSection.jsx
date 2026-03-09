import React, { useState, useRef, useEffect } from "react";

import { Plus } from "lucide-react";

const SubTaskSection = ({ subtasks, onChange }) => {
  const [adding, setAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (adding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [adding]);

  const handleAddClick = (e) => {
    e.preventDefault();
    setAdding(true);
    setInputValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      // Complete: add subtask when Enter is pressed and input is non-empty
      if (onChange && inputValue.trim() !== "") {
        const newSubtask = {
          id: Date.now(), // simple unique ID; in a real app, use better uuid
          title: inputValue.trim(),
          completed: false,
        };
        onChange([...(subtasks || []), newSubtask]);
      }
      setAdding(false);
      setInputValue("");
    } else if (e.key === "Escape") {
      setAdding(false);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col gap-3 pt-4">
      <span className="text-xl font-semibold text-slate-800 mb-1">
        Subtasks:
      </span>
      {!adding ? (
        <button
          className="flex items-center w-fit text-slate-400 font-medium text-base px-0 hover:text-slate-500 cursor-pointer focus:outline-none"
          onClick={handleAddClick}
        >
          <Plus size={18} className="mx-1" />
          <span className="text-sm font-medium">Add New Subtask</span>
        </button>
      ) : (
        <input
          ref={inputRef}
          type="text"
          className="border border-slate-200 rounded-md px-2 py-1 text-sm text-slate-700"
          placeholder="New subtask"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onBlur={() => setAdding(false)}
        />
      )}
      <ul className="flex flex-col">
        {Array.isArray(subtasks) && subtasks.length > 0 ? (
          subtasks.map((subtask, idx) => (
            <li key={subtask.id || idx} className="flex items-center">
              <input
                type="checkbox"
                className="h-3 w-3 mx-2 accent-slate-300"
                checked={!!subtask.completed}
                readOnly
              />
              <span className="text-slate-600 text-sm font-medium">
                {subtask.title || `Subtask ${idx + 1}`}
              </span>
            </li>
          ))
        ) : (
          <li className="text-slate-400 text-sm px-2">No subtasks</li>
        )}
      </ul>
    </div>
  );
};

export default SubTaskSection;
