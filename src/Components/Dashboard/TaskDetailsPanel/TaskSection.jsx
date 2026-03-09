import React, { useContext } from "react";

import { ListContext } from "../../../ListState/ListProvider";

const TaskSection = ({ task, onChange }) => {
  const { lists } = useContext(ListContext);

  if (!task) return null;

  // Handler functions for all editable fields
  const handleTitleChange = (e) => {
    onChange({ title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    onChange({ description: e.target.value });
  };

  const handleListChange = (e) => {
    // Value will be string - try to keep consistent with list value types
    onChange({ list: e.target.value });
  };

  const handleDueDateChange = (e) => {
    onChange({ dueDate: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-semibold text-slate-800">
        Task
      </span>
      <input
        className="px-2 py-1 border border-slate-200 rounded-md text-slate-700 text-sm font-small focus:outline-none focus:border-blue-400 bg-slate-50"
        placeholder="Title"
        value={task.title || ""}
        onChange={handleTitleChange}
      />
      <textarea
        className="px-3 py-2 border border-slate-200 rounded-md text-slate-700 text-sm font-small focus:outline-none focus:border-blue-400 bg-slate-50 resize-none"
        placeholder="Description"
        value={task.description || ""}
        onChange={handleDescriptionChange}
        rows={3}
      />

      <div className="flex flex-col gap-3 mt-2 w-75">
        <div className="grid grid-cols-2">
          <label className="my-auto me-4 text-slate-500 text-sm font-medium mb-1">
            List
          </label>
          <select
            className="border border-slate-200 rounded-md px-2 py-1 text-sm text-slate-700"
            value={task.list || ""}
            onChange={handleListChange}
          >
            {lists && lists.length > 0 ? (
              lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.title}
                </option>
              ))
            ) : (
              <option value="">No List</option>
            )}
          </select>
        </div>
        <div className="grid grid-cols-2">
          <label className="my-auto me-4 text-slate-500 text-sm font-medium mb-1">
            Due Date
          </label>
          <input
            type="date"
            className="border border-slate-200 rounded-md px-2 py-1 text-sm text-slate-700"
            value={task.dueDate ? task.dueDate.substring(0, 10) : ""}
            onChange={handleDueDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
