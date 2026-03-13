import React, { useContext, useEffect, useState } from "react";

import { TaskContext } from "../../../TaskState/TaskProvider";

import TaskSection from "./TaskSection";
import SubTaskSection from "./SubTaskSection";
import ActionBar from "./ActionBar";

const TaskDetailsPanel = ({ selectedTask }) => {
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
      <div className="flex flex-col h-full p-8 bg-slate-50 items-center justify-center text-slate-400">
        <span className="text-lg">No task selected</span>
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
