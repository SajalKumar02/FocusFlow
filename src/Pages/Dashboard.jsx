import React, { useState } from "react";

import SideBar from "../Components/Dashboard/SideBar/SideBar";
import TaskDetailsPanel from "../Components/Dashboard/TaskDetailsPanel/TaskDetailsPanel";
import MainContext from "../Components/Dashboard/MainContext/MainContext";

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
        className={`flex-1 transition-all duration-300 overflow-auto`}
      >
        <MainContext />
      </div>

      {/* TaskDetailsPanel - ensure it's visible, fixed width */}
      <div
        className={`border-l border-slate-200 bg-white w-[400px] flex-shrink-0 transition-all duration-300`}
      >
        <TaskDetailsPanel />
      </div>
    </div>
  );
};

export default Layout;
