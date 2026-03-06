import React from "react";

import Header from "./Header";
import AddNewTask from "./AddNewTask.jsx";
import TaskList from "./TaskList.jsx";

const MainContext = () => {
  return (
    <div className="w-full px-8 py-6 flex flex-col">
      <Header />

      <AddNewTask />

      <TaskList />
    </div>
  );
};

export default MainContext;
