import React from "react";

const TaskSection = () => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-semibold text-slate-800">
        Task
      </span>
      <input
        className="px-2 py-1 border border-slate-200 rounded-md  text-slate-400 text-sm font-small focus:outline-none focus:border-blue-400 bg-slate-50"
        placeholder="Title"
        defaultValue="Title"
      />
      <textarea
        className="px-3 py-2 border border-slate-200 rounded-md  text-slate-400 text-sm font-small focus:outline-none focus:border-blue-400 bg-slate-50 resize-none"
        placeholder="Description"
        defaultValue="Description"
        rows={3}
      />

      <div className="flex flex-col gap-3 mt-2 w-75">
        <div className="grid grid-cols-2">
          <label className="my-auto me-4 text-slate-500 text-sm font-medium mb-1">
            List
          </label>
          <select className="border border-slate-200 rounded-md px-2 py-1 text-sm text-slate-700">
            <option>Personal</option>
          </select>
        </div>
        <div className="grid grid-cols-2">
          <label className="my-auto me-4 text-slate-500 text-sm font-medium mb-1">
            Due Date
          </label>
          <input
            type="date"
            className="border border-slate-200 rounded-md px-2 py-1 text-sm text-slate-700"
            defaultValue="2026-03-06"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
