import React, {
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { Plus, ListIcon } from "lucide-react";

import { ListContext } from "../../../../ListState/ListProvider";
import { ToastContext } from "../../../../Toast/ToastProvider";

import ListComponent from "./listComponent";

const ListSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  const { lists, addList } = useContext(ListContext);
  const { showToast } = useContext(ToastContext);

  const [newListTitle, setNewListTitle] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (expanded && showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput, expanded]);

  useEffect(() => {
    if (!expanded) {
      setShowInput(false);
      setNewListTitle("");
    }
  }, [expanded]);

  const handleAddList = () => {
    const canAddMoreLists = lists.length < 4;

    if (!canAddMoreLists) {
      showToast("warning", "You can have a maximum of 4 lists.");
      return;
    }

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

  return (
    <div className="py-5 px-3 flex-1 flex flex-col h-full min-h-0">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs mb-3 text-slate-500 font-bold tracking-widest uppercase">
          Lists
        </h2>
        {expanded && (
          <button
            className="flex items-center justify-center w-7 h-7 bg-indigo-50 text-indigo-600 rounded-full transition-colors hover:bg-indigo-100 active:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            type="button"
            title="Add List"
            onClick={handleAddList}
            aria-label="Add List"
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        )}
      </div>

      {/* ListComponent */}
      <div className="relative flex-1 min-h-0 flex flex-col overflow-visible">
        <div className="flex-1 min-h-0 overflow-y-visible overflow-x-visible scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <ul className="flex flex-col gap-2 relative overflow-visible w-full">
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
                    ? "bg-indigo-50 text-slate-900 border-indigo-200 shadow-sm border border-l-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    : "bg-transparent text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                }
                borderClass={selectedList === list.id ? "border-l-indigo-600" : ""}
                ariaLabel={list.title}
              />
            ))}
          </ul>
        </div>
      </div>

      {expanded && showInput && (
        <div className="flex mt-3 w-full max-w-full overflow-hidden">
          <input
            ref={inputRef}
            type="text"
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            onKeyDown={handleInputKeyDown}
            className="flex-1 min-w-0 py-1.5 px-3 text-sm rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus:outline-none"
            placeholder="Add new list..."
            aria-label="Add new list"
          />
        </div>
      )}
    </div>
  );
};

export default ListSection;
