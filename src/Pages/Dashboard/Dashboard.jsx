import React, { useContext, useState } from "react";

import SideBar from "../../Components/Dashboard/SideBar/SideBar";
import MainContent from "../../Components/Dashboard/MainContext/MainContent";
import TaskDetailsPanel from "../../Components/Dashboard/TaskDetailsPanel/TaskDetailsPanel";

import { TaskContext } from "../../TaskState/TaskProvider";

const Dashboard = () => {
  const { PRESET_IDS } = useContext(TaskContext);
  // Sidebar state
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  // List selection state
  const [selectedList, setSelectedList] = useState(PRESET_IDS.ALL);
  // Task selection state
  const [selectedTask, setSelectedTask] = useState(null);

  const [filteringString, setFilteringString] = useState("");

  const handleSetSelectedList = (listid) => {
    setSelectedList(listid);
  };

  const handleSidebarToggle = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const handleSetSelectedTask = (taskid) => {
    setSelectedTask(taskid);
  };

  const handleSetFilteringString = (fileringString) => {
    setFilteringString(fileringString);
  };

  return (
    <div className="h-screen grid grid-cols-[auto_1fr] bg-primary">
      {/* Sidebar */}
      <aside
        className={`
          border-r border-slate-200 shadow-xl backdrop-blur-lg 
          transition-all duration-300 
          ${sidebarExpanded ? "w-64" : "w-20"}`}
      >
        <SideBar
          expanded={sidebarExpanded}
          onToggle={handleSidebarToggle}
          selectedList={selectedList}
          handleSetSelectedList={handleSetSelectedList}
          fileringString={filteringString}
          handleSetFilteringString={handleSetFilteringString}
        />
      </aside>

      {/* Main Content */}
      <div className="">
        <MainContent
          selectedList={selectedList}
          handleSetSelectedTask={handleSetSelectedTask}
          filteringString={filteringString}
        />
      </div>

      {/* TaskDetailsPanel */}
      {selectedTask !== null && (
        <div className="">
          <TaskDetailsPanel
            selectedTask={selectedTask}
            handleSetSelectedTask={handleSetSelectedTask}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
