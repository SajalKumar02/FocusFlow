import React from "react";

import Header from "./Header.jsx";
import AddNewTask from "./AddNewTask.jsx";
import TaskList from "./TaskList.jsx";

const MainContext = ({ setSelectedTask }) => {
  return (
    <div className="w-full mx-2 px-8 py-6 flex flex-col">
      <Header />

      <AddNewTask />

      <TaskList setSelectedTask={setSelectedTask} />
    </div>
  );
};

export default MainContext;
