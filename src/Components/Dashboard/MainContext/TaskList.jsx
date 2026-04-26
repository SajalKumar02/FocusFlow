import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";

import { TaskContext } from "../../../TaskState/TaskProvider";

const TaskList = ({
  selectedList,
  handleSetSelectedTask,
  filteringString,
}) => {
  const { toggleTask, getFilteredTasks } = useContext(TaskContext);

  const filteredTasks = getFilteredTasks(
    selectedList,
    filteringString,
  );

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks?.length === 0 ? (
        <div className="text-slate-500 text-center py-6">
          No tasks yet
        </div>
      ) : (
        filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="group flex items-center px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-indigo-50/60 transition-all duration-150 cursor-pointer"
            onClick={() => handleSetSelectedTask(task.id)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                toggleTask(task.id);
              }}
              className="mr-2 w-4 h-4 border border-slate-300 bg-white rounded cursor-pointer transition-colors duration-150 accent-indigo-600"
            />
            <span
              className={`text-slate-800 ${
                task.completed ? "line-through text-slate-500" : ""
              }`}
            >
              {task.title}
            </span>
            <div className="flex-1" />
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-500" />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
