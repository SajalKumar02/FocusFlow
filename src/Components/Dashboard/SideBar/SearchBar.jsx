import React, { useRef, useEffect } from "react";

import { Search } from "lucide-react";

const SearchBar = ({
  expanded,
  onToggle,
  filteringString,
  handleSetFilteringString,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  const handleIconClick = () => {
    if (typeof onToggle === "function") {
      onToggle();
    }
  };

  return (
    <div className="p-5">
      {expanded ? (
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-2xl px-5 py-3 shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-accent transition-all duration-200">
          <input
            ref={inputRef}
            className="bg-transparent outline-none flex-1 text-base placeholder-slate-400 text-slate-800"
            type="text"
            value={filteringString}
            onChange={(e) => handleSetFilteringString(e.target.value)}
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
