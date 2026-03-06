import React from "react";

import { Plus } from "lucide-react";

const SubTaskSection = () => {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <span className="text-xl font-semibold text-slate-800 mb-1">
        Subtasks:
      </span>
      <button className="flex items-center w-fit text-slate-400 font-medium text-base px-0 hover:text-slate-500 cursor-pointer focus:outline-none">
        <Plus size={18} className="mx-1" />
        <span className="text-sm font-medium">Add New Subtask</span>
      </button>
      <ul className="flex flex-col">
        <li className="flex items-center">
          <input
            type="checkbox"
            className="h-3 w-3 mx-2 accent-slate-300"
          />
          <span className="text-slate-600 text-sm font-medium">
            Subtask 1
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SubTaskSection;
