import React, { useState } from "react";

import SideBar from "../Components/SideBar/SideBar";
import TaskDetailsPanel from "../Components/TaskDetailsPanel/TaskDetailsPanel";
import MainContext from "../Components/MainContext/MainContext";

const Layout = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarExpanded ? "w-64" : "w-16"
        } flex-shrink-0 transition-all duration-300`}
      >
        <SideBar
          expanded={sidebarExpanded}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Main Content fills available space and ensures visibility */}
      <div
        className={`${
          sidebarExpanded ? "w-1/2" : "w-2/3"
        } transition-all duration-300`}
      >
        <MainContext />
      </div>

      {/* TaskDetailsPanel - ensure it's visible, fixed width */}
      <div
        className={`border-l border-slate-200 bg-white ${
          sidebarExpanded ? "w-1/2" : "w-1/3"
        } transition-all duration-300`}
      >
        <TaskDetailsPanel />
      </div>
    </div>
  );
};

export default Layout;
