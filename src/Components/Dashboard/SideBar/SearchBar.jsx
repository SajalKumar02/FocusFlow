import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ expanded, onToggle }) => {
  const inputRef = useRef(null);

  // Auto-focus the input when expanded or after triggering expand via icon
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  // Handler for icon click in collapsed mode
  const handleIconClick = () => {
    if (typeof onToggle === "function") {
      onToggle();
      // focusing input will be handled via useEffect after expand
    }
  };

  return (
    <div className="p-5 border-b border-slate-200">
      {expanded ? (
        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2.5 shadow-inner focus-within:ring-2 focus-within:ring-blue-400">
          <input
            ref={inputRef}
            className="bg-transparent outline-none flex-1 text-base placeholder-slate-400 text-slate-800"
            type="text"
            placeholder="Search tasks..."
          />
        </div>
      ) : (
        <button
          className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl shadow-inner hover:bg-slate-200 transition-all"
          aria-label="Expand sidebar and focus search"
          type="button"
          onClick={handleIconClick}
        >
          <Search size={22} className="text-slate-400" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
