import TodoList from "../features/components/TodoList.jsx";
import AddTodoButton from "../features/components/AddTodoButton.jsx";
import TodoFilterSortRow from "../features/components/TodoFilterSortRow.jsx";

const App = () => {
  return (
    <div className="h-screen bg-amber-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-mono font-bold mb-4">Todo List</h1>
      {/* Filter Sort Row */}
      <TodoFilterSortRow />

      {/* List */}
      <TodoList />

      {/* Add Todo Button */}
      <AddTodoButton />
    </div>
  );
};

export default App;
