import React from "react";

import SideBar from "../Components/SideBar/SideBar";
import TaskDetailsPanel from "../Components/TaskDetailsPanel/TaskDetailsPanel";
import MainContext from "../Components/MainContext/MainContext";

const layout = () => {
  return (
    <div className="flex flex-row h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="w-sm flex-shrink-0 transition-all duration-300">
        <SideBar />
      </div>

      {/* Main Content fills available space and ensures visibility */}
      <div className="w-1/2 ">
        <MainContext />
      </div>

      {/* TaskDetailsPanel - ensure it's visible, fixed width */}
      <div className="w-1/2 border-l border-slate-200 bg-white">
        <TaskDetailsPanel />
      </div>
    </div>
  );
};

export default layout;
