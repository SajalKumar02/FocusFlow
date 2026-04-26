import React, {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import { Plus } from "lucide-react";
import { ToastContext } from "../../../Toast/ToastProvider";

const MAX_SUBTASKS = 6;

const SubTaskSection = ({ subtasks, onChange }) => {
  const [adding, setAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    if (adding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [adding]);

  const handleAddClick = (e) => {
    e.preventDefault();
    // Check if subtask limit reached
    if ((subtasks ? subtasks.length : 0) >= MAX_SUBTASKS) {
      showToast &&
        showToast(
          "warning",
          `You can only add up to ${MAX_SUBTASKS} subtasks.`,
        );
      return;
    }
    setAdding(true);
    setInputValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      if ((subtasks ? subtasks.length : 0) >= MAX_SUBTASKS) {
        showToast &&
          showToast(
            "warning",
            `You can only add up to ${MAX_SUBTASKS} subtasks.`,
          );
        setAdding(false);
        setInputValue("");
        return;
      }
      if (onChange && inputValue.trim() !== "") {
        const newSubtask = {
          id: Date.now(),
          title: inputValue.trim(),
          completed: false,
        };
        onChange([...(subtasks || []), newSubtask]);
      }
      setAdding(false);
      setInputValue("");
    } else if (e.key === "Escape") {
      setAdding(false);
      setInputValue("");
    }
  };

  // Toggle subtask completed state
  const handleToggleComplete = (index) => {
    if (!onChange) return;
    const updatedSubtasks = subtasks.map((subtask, idx) =>
      idx === index
        ? { ...subtask, completed: !subtask.completed }
        : subtask,
    );
    onChange(updatedSubtasks);
  };

  return (
    <div className="flex flex-col gap-3 pt-4">
      <span className="text-xl font-semibold text-slate-800 mb-1">
        Subtasks:
      </span>
      {!adding ? (
        <button
          className="flex items-center w-fit text-slate-600 font-medium text-base px-0 hover:text-indigo-600 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
          onClick={handleAddClick}
        >
          <Plus size={18} className="mx-1" />
          <span className="text-sm font-medium">Add New Subtask</span>
        </button>
      ) : (
        <input
          ref={inputRef}
          type="text"
          className="border border-slate-300 rounded-md px-2 py-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          placeholder="New subtask"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onBlur={() => setAdding(false)}
        />
      )}
      <ul className="flex flex-col max-h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {Array.isArray(subtasks) && subtasks.length > 0 ? (
          subtasks.map((subtask, idx) => (
            <li
              key={subtask.id || idx}
              className={`flex items-center min-w-0 px-2 py-1 rounded-md transition-colors duration-150 ${
                subtask.completed
                  ? "bg-slate-100 opacity-80"
                  : "hover:bg-indigo-50"
              }`}
            >
              <input
                type="checkbox"
                className="h-4 w-4 mx-2 accent-indigo-600 border-slate-300 cursor-pointer flex-shrink-0 transition-colors"
                checked={!!subtask.completed}
                onChange={() => handleToggleComplete(idx)}
                aria-label={`Mark subtask '${subtask.title || `Subtask ${idx + 1}`}' as completed`}
              />
              <span
                className={`text-sm font-medium truncate max-w-xs ${
                  subtask.completed
                    ? "text-slate-400 line-through"
                    : "text-slate-800"
                }`}
                title={subtask.title || `Subtask ${idx + 1}`}
              >
                {subtask.title || `Subtask ${idx + 1}`}
              </span>
            </li>
          ))
        ) : (
          <li className="text-slate-400 text-sm px-2">No subtasks</li>
        )}
      </ul>
    </div>
  );
};

export default SubTaskSection;
