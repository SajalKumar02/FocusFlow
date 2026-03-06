import React from "react";

const SearchBar = () => {
  return (
    <div className="p-5">
      <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2.5 shadow-inner focus-within:ring-2 focus-within:ring-blue-400">
        <svg
          className="w-5 h-5 text-slate-400 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="bg-transparent outline-none flex-1 text-base placeholder-slate-400 text-slate-800"
          type="text"
          placeholder="Search tasks..."
          // disabled // Switch to enable if desired
        />
      </div>
    </div>
  );
};

export default SearchBar;
