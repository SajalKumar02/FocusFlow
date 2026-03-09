import React from "react";

import Header from "./Header.jsx";
import AddNewTask from "./AddNewTask.jsx";
import TaskList from "./TaskList.jsx";

const MainContent = ({ setSelectedTask }) => {
  return (
    <div className="w-full p-6 flex flex-col">
      <Header />

      <AddNewTask />

      <TaskList setSelectedTask={setSelectedTask} />
    </div>
  );
};

export default MainContent;
