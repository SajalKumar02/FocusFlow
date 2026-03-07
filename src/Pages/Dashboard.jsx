import React, { useState } from "react";

import SideBar from "../Components/Dashboard/SideBar/SideBar";
import MainContext from "../Components/Dashboard/MainContext/MainContext";
import TaskDetailsPanel from "../Components/Dashboard/TaskDetailsPanel/TaskDetailsPanel";

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedList, setSelectedList] = useState(null);

  const handleSidebarToggle = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const handleSetSelectedTask = (task) => {
    setSelectedTask(task);
  };

  const handleSetSelectedList = (list) => {
    setSelectedList(list);
  };

  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarExpanded ? "w-64" : "w-16"
        } flex-shrink-0 transition-all duration-400`}
      >
        <SideBar
          expanded={sidebarExpanded}
          onToggle={handleSidebarToggle}
          selectedList={selectedList}
          handleSetSelectedList={handleSetSelectedList}
        />
      </div>

      {/* Main Content fills available space and ensures visibility */}
      <div
        className={`flex-1 transition-all duration-300 overflow-auto`}
      >
        <MainContext handleSetSelectedTask={handleSetSelectedTask} />
      </div>

      <div
        className={`border-l border-slate-200 bg-white w-[400px] flex-shrink-0 transition-all duration-300`}
      >
        <TaskDetailsPanel selectedTask={selectedTask} />
      </div>
    </div>
  );
};

export default Dashboard;
