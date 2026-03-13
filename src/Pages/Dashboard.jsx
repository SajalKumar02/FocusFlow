import React, { useContext, useState } from "react";

import SideBar from "../Components/Dashboard/SideBar/SideBar";
import MainContent from "../Components/Dashboard/MainContext/MainContent";
import TaskDetailsPanel from "../Components/Dashboard/TaskDetailsPanel/TaskDetailsPanel";

import { TaskContext } from "../TaskState/TaskProvider";

const Dashboard = () => {
  const { PRESET_IDS } = useContext(TaskContext);

  // Sidebar state
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  // List selection state
  const [selectedList, setSelectedList] = useState(PRESET_IDS.ALL);
  // Task selection state
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSetSelectedList = (listid) => {
    setSelectedList(listid);
  };

  const handleSidebarToggle = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const handleSetSelectedTask = (taskid) => {
    setSelectedTask(taskid);
  };

  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarExpanded ? "w-64" : "w-20"
        } flex-shrink-0 transition-all duration-400`}
      >
        <SideBar
          expanded={sidebarExpanded}
          onToggle={handleSidebarToggle}
          selectedList={selectedList}
          handleSetSelectedList={handleSetSelectedList}
        />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 min-w-0 transition-all duration-300 overflow-auto`}
      >
        <MainContent
          selectedList={selectedList}
          handleSetSelectedTask={handleSetSelectedTask}
        />
      </div>

      {/* TaskDetailsPanel */}
      <div
        className={`border-l border-slate-200 bg-white w-[400px] flex-shrink-0 transition-all duration-300`}
      >
        <TaskDetailsPanel selectedTask={selectedTask} />
      </div>
    </div>
  );
};

export default Dashboard;
