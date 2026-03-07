import React, { useContext } from "react";

import { ToastContext } from "../../../Toast/ToastProvider";

import { ChevronRight } from "lucide-react";

const TaskList = () => {
  const { showSuccessToast } = useContext(ToastContext);

  const toggleTask = () => {
    showSuccessToast();
  };

  return (
    <div className="flex flex-col gap-2">
      {["Task 1", "Task 2", "Task 3"].map((task, idx) => (
        <div
          key={idx}
          className="flex items-center px-4 py-2 bg-white border-t border-b border-slate-200 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
          onClick={toggleTask}
        >
          <input
            type="checkbox"
            className="mr-2 w-3 h-3 border border-slate-200 bg-white rounded cursor-pointer transition-colors duration-150"
          />
          <span className="text-skate-300">{task}</span>
          <div className="flex-1" />
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
