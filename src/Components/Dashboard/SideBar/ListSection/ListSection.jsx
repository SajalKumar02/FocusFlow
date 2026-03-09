import React, {
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { Plus, ListIcon } from "lucide-react";

import { ListContext } from "../../../../ListState/ListProvider";

import ListComponent from "./listComponent";

const ListSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  const { lists, addList } = useContext(ListContext);

  const [newListTitle, setNewListTitle] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleAddList = () => {
    // Only show the input if it's not currently visible
    if (!showInput) {
      setShowInput(true);
      return;
    }

    const title = newListTitle.trim();
    if (title) {
      addList({ title });
      setNewListTitle("");
      setShowInput(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddList();
    }
    if (e.key === "Escape") {
      setShowInput(false);
      setNewListTitle("");
    }
  };

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  // The key fix: Add "relative" to the wrapping ul to ensure ring/outline does not get clipped
  // Also adjust padding to create a bit more room for the visual ring

  return (
    <div className="p-5 flex-1 flex flex-col h-full min-h-0">
      {/* Header row: title (left) and add button (right, only when expanded) */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[11px] mb-3 text-slate-400 font-bold tracking-widest uppercase">
          Lists
        </h2>
        {expanded && (
          <button
            className="flex items-center justify-center w-7 h-7 bg-slate-100 text-blue-500 rounded-full transition-all hover:bg-blue-50 active:bg-blue-200"
            type="button"
            title="Add List"
            onClick={handleAddList}
            aria-label="Add List"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        )}
      </div>

      {/* Ensure no parent clips the ListComponent rings */}
      <div className="relative flex-1 min-h-0 flex flex-col overflow-visible">
        <div
          className="flex-1 min-h-0 overflow-y-auto overflow-x-visible pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
          style={{ overflow: "visible" }}
        >
          <ul className="flex flex-col gap-1 relative overflow-visible">
            {lists.map((list) => (
              <ListComponent
                key={list.id}
                title={list.title}
                icon={ListIcon}
                expanded={expanded}
                selected={selectedList === list.id}
                onSelect={() => handleSetSelectedList(list.id)}
                colorClass={
                  selectedList === list.id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-slate-100 text-slate-700"
                }
                borderClass={
                  selectedList === list.id
                    ? "ring-2 ring-blue-400 z-10 relative"
                    : ""
                }
                ariaLabel={list.title}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Show add new list input only when showInput is true and expanded */}
      {expanded && showInput && (
        <div className="flex mt-3 w-full max-w-full overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="flex-1 min-w-0 py-1.5 px-3 text-sm rounded-xl border border-slate-300 transition-all focus:border-blue-400 focus:ring-0 focus:outline-none"
            placeholder="Add new list..."
            aria-label="Add new list"
          />
        </div>
      )}
    </div>
  );
};

export default ListSection;
