import { Plus } from 'lucide-react';
import React, { useState } from 'react';

const AddNewTask = () => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {};

  return (
    <form onSubmit={handleAddTask} className="flex items-center gap-2">
      <input
        type="text"
        className="flex-1 px-3 py-2 rounded-md border border-slate-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Add new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="New Task Title"
      />
      <button
        className="flex items-center px-4 py-2 rounded-md bg-white hover:bg-blue-50 transition-colors text-slate-500 font-small shadow"
        id="task"
        type="submit"
        disabled={!inputValue.trim()}
        title="Add Task"
      >
        <Plus className="mr-2" size={18} />
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddNewTask;
