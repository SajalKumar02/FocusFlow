import React, { useContext, useEffect, useState } from "react";

import { TaskContext } from "../../../TaskState/TaskProvider";

import TaskSection from "./TaskSection";
import SubTaskSection from "./SubTaskSection";
import ActionBar from "./ActionBar";

import { X } from "lucide-react";

const TaskDetailsPanel = ({
  selectedTask,
  handleSetSelectedTask,
}) => {
  const { tasks, editTask, removeTask } = useContext(TaskContext);

  const [taskState, setTaskState] = useState(() =>
    selectedTask && tasks
      ? tasks.find((t) => t.id === selectedTask)
      : null,
  );

  useEffect(() => {
    const found =
      selectedTask && tasks
        ? tasks.find((t) => t.id === selectedTask)
        : null;
    setTaskState(found);
  }, [selectedTask, tasks]);

  if (!taskState) {
    return (
      <div className="">
        <button
          className="m-2 hover:text-slate-600 transition-colors text-lg"
          onClick={() => handleSetSelectedTask(null)}
          aria-label="Close task details"
          type="button"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col h-full p-8 items-center justify-center">
          <span className="text-lg">No task selected</span>
        </div>
      </div>
    );
  }

  const handleTaskChange = (updates) => {
    setTaskState((prev) => ({ ...prev, ...updates }));
  };

  const handleSubtasksChange = (newSubtasks) => {
    setTaskState((prev) => ({ ...prev, subtasks: newSubtasks }));
  };

  // Save handler
  const handleSave = () => {
    if (taskState && editTask) {
      editTask(taskState.id, { ...taskState });
    }
  };

  const handleDelete = () => {
    if (taskState && removeTask) {
      removeTask(taskState.id);
      setTaskState(null);
    }
  };

  return (
    <div className="flex flex-col h-full p-8 bg-slate-50">
      <div className="flex flex-col gap-8 flex-1">
        <button
          className="text-slate-400 hover:text-slate-600 transition-colors text-lg"
          onClick={() => handleSetSelectedTask(null)}
          aria-label="Close task details"
          type="button"
        >
          <X size={24} />
        </button>

        {/* Task Info */}
        <TaskSection
          key={taskState?.id}
          task={taskState}
          onChange={handleTaskChange}
        />

        {/* Sub Tasks */}
        <SubTaskSection
          subtasks={taskState.subtasks}
          onChange={handleSubtasksChange}
        />
      </div>
      {/* Actions */}
      <ActionBar
        task={taskState}
        setTaskState={setTaskState}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TaskDetailsPanel;
