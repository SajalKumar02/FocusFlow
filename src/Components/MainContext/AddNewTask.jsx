import React from "react";

import { Plus } from "lucide-react";

const AddNewTask = () => {
  return (
    <button
      className="flex items-center px-4 py-2 rounded-md bg-white hover:bg-blue-50 transition-colors text-slate-500 font-small shadow mb-2"
      id="task"
      type="button"
    >
      <Plus className="mr-2" size={18} />
      <span>Add New Task</span>
    </button>
  );
};

export default AddNewTask;
