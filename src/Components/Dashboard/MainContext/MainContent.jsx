import React from "react";

import Header from "./Header.jsx";
import AddNewTask from "./AddNewTask.jsx";
import TaskList from "./TaskList.jsx";
import FilterAndSortRow from "./FilterAndSortRow.jsx";

const MainContent = ({ selectedList, handleSetSelectedTask }) => {
  // const [filter, setFilter] = useState("all");
  // const [sort, setSort] = useState("created");

  // const handleFilter = (value) => setFilter(value);
  // const handleSort = (value) => setSort(value);

  return (
    <div className="w-full p-6 flex flex-col">
      <Header />

      {/* <FilterAndSortRow
        filter={filter}
        sort={sort}
        handleFilter={handleFilter}
        handleSort={handleSort}
      /> */}

      <section className="flex flex-col gap-4 mb-6 py-3 px-5 rounded-2xl bg-white/75 shadow-xl border border-slate-200 backdrop-blur-md">
        <AddNewTask selectedList={selectedList} />

        <TaskList
          selectedList={selectedList}
          handleSetSelectedTask={handleSetSelectedTask}
          // filter={filter}
          // sort={sort}
        />
      </section>
    </div>
  );
};

export default MainContent;
