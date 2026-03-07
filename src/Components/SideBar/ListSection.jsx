import React, { useRef } from "react";
import { Plus, Star, Briefcase, Circle } from "lucide-react";

const LISTS = [
  {
    name: "Personal",
    icon: Star,
    color: "pink",
    count: 4,
  },
  {
    name: "Work",
    icon: Briefcase,
    color: "yellow",
    count: 6,
  },
  {
    name: "List 1",
    icon: Circle,
    count: 1,
  },
  // Add more lists here for testing scroll/overflow
];

// Darker shade for predefined lists
const colorMap = {
  pink: {
    bg: "bg-pink-200",
    text: "text-pink-700",
    pill: "bg-pink-200 text-pink-800",
    hover: "hover:bg-pink-300/60",
  },
  yellow: {
    bg: "bg-yellow-200",
    text: "text-yellow-800",
    pill: "bg-yellow-200 text-yellow-900",
    hover: "hover:bg-yellow-300/60",
  },
};

// Use a visible, darker shade for general lists
const generalColors = {
  bg: "bg-slate-300",
  text: "text-slate-700",
  pill: "bg-slate-300 text-slate-700",
  hover: "hover:bg-slate-400/60",
};

const ListSection = ({ expanded }) => {
  const listsRef = useRef(null);

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
      {/* Render lists differently based on expanded */}
      <div
        ref={listsRef}
        className="flex-1 min-h-0 overflow-y-auto pr-1"
        style={{
          // Show a scrollbar only if necessary, future proofing for large sets
          scrollbarWidth: "thin",
        }}
        tabIndex={0}
        aria-label="List items"
      >
        <ul className="flex flex-col gap-2">
          {LISTS.map((list) => {
            // Only Personal and Work keep their color, others use general
            const color =
              list.name === "Personal"
                ? colorMap.pink
                : list.name === "Work"
                  ? colorMap.yellow
                  : generalColors;
            return (
              <li
                key={list.name}
                className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group ${color.hover} ${
                  expanded ? "justify-between" : "justify-center"
                }`}
              >
                <div
                  className={`flex items-center ${
                    expanded ? "gap-3" : "gap-0 justify-center w-full"
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center rounded-full ${color.bg} ${color.text}`}
                  >
                    <list.icon size={18} strokeWidth={2} />
                  </span>
                  {expanded && (
                    <span className="text-base font-medium text-slate-800 ml-3">
                      {list.name}
                    </span>
                  )}
                </div>
                {expanded && (
                  <span
                    className={`${color.pill} text-xs font-semibold px-2.5 py-0.5 rounded-full shadow`}
                  >
                    {list.count}
                  </span>
                )}
              </li>
            );
          })}
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
