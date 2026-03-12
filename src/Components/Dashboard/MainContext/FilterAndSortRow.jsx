import React, { useEffect, useState } from "react";
import { Filter, SortAsc } from "lucide-react";

// Example filter and sort options
const FILTER_OPTIONS = [
  { value: "all", label: "All Tasks" },
  { value: "completed", label: "Completed" },
  { value: "incomplete", label: "Incomplete" },
];

const SORT_OPTIONS = [
  { value: "created", label: "Created Date" },
  { value: "az", label: "A-Z" },
  { value: "za", label: "Z-A" },
];

const FilterAndSortRow = ({
  filter,
  sort,
  handleFilter,
  handleSort,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".filter-dropdown")) setFilterOpen(false);
      if (!e.target.closest(".sort-dropdown")) setSortOpen(false);
    };
    if (filterOpen || sortOpen) {
      window.addEventListener("mousedown", handleClick);
    }
    return () => window.removeEventListener("mousedown", handleClick);
  }, [filterOpen, sortOpen]);

  return (
    <section className="flex items-center gap-0 mb-4 py-0.5 px-0.5 rounded-lg bg-white/75 border border-slate-200 shadow-sm">
      {/* Filter Dropdown */}
      <div className="relative filter-dropdown">
        <button
          className={`flex items-center gap-1 px-3 py-1.5 font-medium text-slate-700 text-sm bg-transparent rounded focus:outline-none justify-center cursor-pointer hover:bg-slate-100 transition`}
          aria-haspopup="listbox"
          aria-expanded={filterOpen}
          tabIndex={0}
          type="button"
          onClick={() => {
            setFilterOpen((prev) => !prev);
            setSortOpen(false);
          }}
        >
          <Filter
            className="h-4 w-4 text-slate-400 opacity-80 mr-1"
            strokeWidth={2}
          />
          <span className="hidden sm:inline font-medium">
            Filters
          </span>
        </button>
        {filterOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-1 z-30 w-[140px] bg-white rounded-lg shadow-xl border border-slate-100 py-1">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition rounded ${
                  filter === option.value
                    ? "bg-blue-100 text-blue-700"
                    : ""
                }`}
                onClick={() => {
                  handleFilter(option.value);
                  setFilterOpen(false);
                }}
                tabIndex={0}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Divider */}
      <span className="h-6 border-l border-slate-200 mx-1 w-px" />
      {/* Sort Dropdown */}
      <div className="relative sort-dropdown">
        <button
          className={`flex items-center gap-1 px-3 py-1.5 font-medium text-slate-700 text-sm bg-transparent rounded focus:outline-none justify-center cursor-pointer hover:bg-slate-100 transition`}
          aria-haspopup="listbox"
          aria-expanded={sortOpen}
          tabIndex={0}
          type="button"
          onClick={() => {
            setSortOpen((prev) => !prev);
            setFilterOpen(false);
          }}
        >
          <SortAsc
            className="h-4 w-4 text-slate-400 opacity-80 mr-1"
            strokeWidth={2}
          />
          <span className="hidden sm:inline font-medium">Sort</span>
        </button>
        {sortOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-1 z-30 w-[140px] bg-white rounded-lg shadow-xl border border-slate-100 py-1">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition rounded ${
                  sort === option.value
                    ? "bg-blue-100 text-blue-700"
                    : ""
                }`}
                onClick={() => {
                  handleSort(option.value);
                  setSortOpen(false);
                }}
                tabIndex={0}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterAndSortRow;
