import React, { useContext } from "react";

import { ListContext } from "../../../ListState/ListProvider";

const TaskSection = ({ task, onChange }) => {
  const { lists } = useContext(ListContext);

  if (!task) return null;

  const handleTitleChange = (e) => {
    onChange({ title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    onChange({ description: e.target.value });
  };

  const handleListChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      return;
    }
    const selected = lists.find((list) => String(list.id) === value);
    if (selected) {
      onChange({ list: selected.id });
    }
  };

  const handleDueDateChange = (e) => {
    onChange({ dueDate: e.target.value });
  };

  const selectedList =
    lists && lists.length > 0
      ? lists.find((list) => String(list.id) === String(task.list))
      : null;

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
        <div className="grid grid-cols-2 items-center">
          <label className="me-4 text-slate-500 text-sm font-medium mb-1 flex items-center h-full">
            List
          </label>
          <select
            className="border border-slate-200 rounded-lg px-3 py-2 text-base text-slate-700 focus:outline-none focus:border-blue-500 bg-white shadow-sm transition-all"
            value={selectedList ? selectedList.id : ""}
            onChange={handleListChange}
          >
            <option value="" disabled>
              No List
            </option>
            {lists &&
              lists.length > 0 &&
              lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.title}
                </option>
              ))}
          </select>
        </div>
        <div className="grid grid-cols-2 items-center">
          <label className="me-4 text-slate-500 text-sm font-medium mb-1 flex items-center h-full">
            Due Date
          </label>
          <input
            type="date"
            className="border border-slate-300 rounded-lg px-3 py-2 text-base text-slate-700 focus:outline-none focus:border-blue-500 bg-white shadow-sm transition-all"
            value={task.dueDate ? task.dueDate.substring(0, 10) : ""}
            onChange={handleDueDateChange}
            min={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
