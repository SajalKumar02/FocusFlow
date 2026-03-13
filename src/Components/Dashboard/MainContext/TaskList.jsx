import React, { useContext } from "react";
import { ChevronRight } from "lucide-react";

import { TaskContext } from "../../../TaskState/TaskProvider";

const TaskList = ({ selectedList, handleSetSelectedTask }) => {
  const { toggleTask, getFilteredTasks } = useContext(TaskContext);

  const filteredTasks = getFilteredTasks(selectedList);

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks?.length === 0 ? (
        <div className="text-slate-400 text-center py-6">
          No tasks yet
        </div>
      ) : (
        filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="flex items-center px-4 py-2 bg-white border-t border-b border-slate-200 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
            onClick={() => handleSetSelectedTask(task.id)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                toggleTask(task.id);
              }}
              className="mr-2 w-4 h-4 border border-slate-200 bg-white rounded cursor-pointer transition-colors duration-150"
            />
            <span
              className={`text-slate-800 ${task.completed ? "line-through text-slate-400" : ""}`}
            >
              {task.title}
            </span>
            <div className="flex-1" />
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
