import React from "react";

import TaskSection from "./TaskSection";
import SubTaskSection from "./SubTaskSection";
import ActionBar from "./ActionBar";

const TaskDetailsPanel = () => {
  return (
    <div className="flex flex-col h-full p-8 bg-slate-50">
      <div className="flex flex-col gap-8 flex-1">
        {/* Task Info */}
        <TaskSection />

        {/* Sub Tasks */}
        <SubTaskSection />
      </div>
      {/* Actions */}
      <ActionBar />
    </div>
  );
};

export default TaskDetailsPanel;
