import React, { useRef } from "react";
import { Plus, Star, Briefcase, Circle } from "lucide-react";

// Only dynamic lists should be put here for future management
const DYNAMIC_LISTS = [
  {
    name: "List 1",
    icon: Circle,
    count: 1,
  },
  // Add more lists here for testing scroll/overflow
];

const ListSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  const listsRef = useRef(null);

  const handleSelect = (listName) => {
    if (handleSetSelectedList) {
      handleSetSelectedList(listName);
    }
  };

  const renderPersonal = () => {
    const isSelected = selectedList === "Personal";
    return (
      <li key="Personal">
        <button
          type="button"
          className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
            ${
              isSelected
                ? "border-2 border-pink-400 bg-pink-100/60 shadow"
                : "bg-pink-50/80"
            }
            hover:bg-pink-100/60
            ${expanded ? "justify-between" : "justify-center"}
          `}
          onClick={() => handleSelect("Personal")}
          tabIndex={0}
          aria-label="Personal"
          aria-current={isSelected ? "page" : undefined}
        >
          <div
            className={`flex items-center ${
              expanded ? "gap-3" : "gap-0 justify-center w-full"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full bg-pink-200 text-pink-700 ${
                isSelected ? "ring-2 ring-pink-400" : ""
              }`}
            >
              <Star size={18} strokeWidth={2} />
            </span>
            {expanded && (
              <span
                className={`text-base ml-3 ${isSelected ? "text-pink-700 font-bold" : "font-medium text-slate-800"}`}
              >
                Personal
              </span>
            )}
          </div>
          {expanded && (
            <span
              className={`bg-pink-200 text-pink-700 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow ${isSelected ? "border border-current" : ""}`}
            >
              4
            </span>
          )}
        </button>
      </li>
    );
  };

  const renderWork = () => {
    const isSelected = selectedList === "Work";
    return (
      <li key="Work">
        <button
          type="button"
          className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
            ${
              isSelected
                ? "border-2 border-emerald-400 bg-emerald-100/60 shadow"
                : "bg-emerald-50/80"
            }
            hover:bg-emerald-100/60
            ${expanded ? "justify-between" : "justify-center"}
          `}
          onClick={() => handleSelect("Work")}
          tabIndex={0}
          aria-label="Work"
          aria-current={isSelected ? "page" : undefined}
        >
          <div
            className={`flex items-center ${
              expanded ? "gap-3" : "gap-0 justify-center w-full"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full bg-emerald-200 text-emerald-800 ${
                isSelected ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              <Briefcase size={18} strokeWidth={2} />
            </span>
            {expanded && (
              <span
                className={`text-base ml-3 ${isSelected ? "text-emerald-800 font-bold" : "font-medium text-slate-800"}`}
              >
                Work
              </span>
            )}
          </div>
          {expanded && (
            <span
              className={`bg-emerald-200 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow ${isSelected ? "border border-current" : ""}`}
            >
              6
            </span>
          )}
        </button>
      </li>
    );
  };

  const renderDynamicList = (list) => {
    const isSelected = selectedList === list.name;
    const Icon = list.icon || Circle;
    return (
      <li key={list.name}>
        <button
          type="button"
          className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
            hover:bg-slate-200/60
            ${expanded ? "justify-between" : "justify-center"}
            ${isSelected ? "border-2 border-blue-400 bg-blue-100/[0.60] shadow" : ""}
          `}
          onClick={() => handleSelect(list.name)}
          tabIndex={0}
          aria-label={list.name}
          aria-current={isSelected ? "page" : undefined}
        >
          <div
            className={`flex items-center ${
              expanded ? "gap-3" : "gap-0 justify-center w-full"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full bg-slate-300 text-slate-700 ${
                isSelected ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <Icon size={18} strokeWidth={2} />
            </span>
            {expanded && (
              <span
                className={`text-base ml-3 ${isSelected ? "text-blue-700 font-bold" : "font-medium text-slate-800"}`}
              >
                {list.name}
              </span>
            )}
          </div>
          {expanded && (
            <span
              className={`bg-slate-300 text-slate-700 text-xs font-semibold px-2.5 py-0.5 rounded-full shadow ${isSelected ? "border border-current" : ""}`}
            >
              {list.count}
            </span>
          )}
        </button>
      </li>
    );
  };

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
          >
            <Plus size={16} strokeWidth={3} />
          </button>
        )}
      </div>
      <div
        ref={listsRef}
        className="flex-1 min-h-0 overflow-y-auto pr-1"
        style={{
          scrollbarWidth: "thin",
        }}
        tabIndex={0}
        aria-label="List items"
      >
        <ul className="flex flex-col gap-2">
          {renderPersonal()}
          {renderWork()}
          {DYNAMIC_LISTS.map(renderDynamicList)}
        </ul>
      </div>
      {/* Hidden add new list input for future use (only show if expanded in future) */}
      {expanded && (
        <div className="flex mt-3">
          <input
            type="text"
            className="flex-1 py-1.5 px-3 text-sm rounded-xl border border-slate-300 outline-none transition-all focus:ring-2 focus:ring-blue-400"
            placeholder="Add new list..."
            style={{ display: "none" }}
            disabled
          />
          <button
            className="ml-2 px-4 py-1.5 text-sm rounded-xl bg-blue-500 text-white shadow-lg transition-all"
            style={{ display: "none" }}
            disabled
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default ListSection;
