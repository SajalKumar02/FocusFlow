import React, { useState, useContext, useEffect } from "react";

import { ListContext } from "../ListState/ListProvider";

import SideBar from "../Components/Dashboard/SideBar/SideBar";
import MainContent from "../Components/Dashboard/MainContext/MainContent";
import TaskDetailsPanel from "../Components/Dashboard/TaskDetailsPanel/TaskDetailsPanel";

const Dashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedList, setSelectedList] = useState("Upcoming");
  const { getListFromLocalStorage } = useContext(ListContext);

  useEffect(() => {
    getListFromLocalStorage();
  }, []);

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

      {/* Main Content fills available space and ensures visibility */}
      <div
        className={`flex-1 min-w-0 transition-all duration-300 overflow-auto`}
      >
        <MainContent handleSetSelectedTask={handleSetSelectedTask} />
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
