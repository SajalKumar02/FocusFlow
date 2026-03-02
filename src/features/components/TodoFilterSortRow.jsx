import { useContext } from "react";
import TodoContext from "../context/createContext";

const TodoFilterSortRow = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleStatus = (e) => {
    dispatch({
      type: "FILTER_TODO_STATUS",
      payload: { status: e.target.value },
    });
  };

  const handleFilter = (e) => {
    dispatch({
      type: "FILTER_TODO",
      payload: { filter: e.target.value },
    });
  };

  const handleSort = (e) => {
    dispatch({
      type: "SORT_TODO",
      payload: { sort: e.target.value },
    });
  };

  return (
    <div className="flex items-center mx-4 mb-4">
      {/* Filter */}
      <label className="mr-2 font-semibold">Filter:</label>
      <select
        className="border-2 border-gray-300 p-2 rounded-lg mr-4"
        onChange={handleFilter}
        value={state.filter}
      >
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
      </select>
      {/* Status */}
      <label className="mr-2 font-semibold">Status:</label>
      <select
        className="border-2 border-gray-300 p-2 rounded-lg mr-4"
        onChange={handleStatus}
        value={state.status}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      {/* Sort */}
      <label className="mr-2 font-semibold">Sort:</label>
      <select
        className="border-2 border-gray-300 p-2 rounded-lg mr-4"
        onChange={handleSort}
        value={state.sort}
      >
        <option value="all">All</option>
        <option value="latest">Latest to Oldest</option>
        <option value="oldest">Oldest to Latest</option>
        <option value="a-z">A to Z</option>
        <option value="z-a">Z to A</option>
      </select>
    </div>
  );
};

export default TodoFilterSortRow;
