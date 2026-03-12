import React from "react";
import { FolderKanban, CalendarDays } from "lucide-react";

// Numeric ids for preset lists
const PRESET_IDS = {
  ALL: -1,
  TODAY: -2,
};

const PresetListsSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  // Handles the selection of a list by listId, using the provided prop
  const handleSelectList = (listId) => {
    if (handleSetSelectedList) {
      handleSetSelectedList(listId);
    }
  };

  // Determine which preset list is selected via prop (numeric ids)
  const isAllSelected = selectedList === PRESET_IDS.ALL;
  const isTodaySelected = selectedList === PRESET_IDS.TODAY;

  return (
    <div className="p-5 border-b border-slate-200">
      <h2 className="text-[11px] mb-3 text-slate-400 font-bold tracking-widest uppercase">
        Lists
      </h2>
      <ul className="flex flex-col gap-2">
        {/* All */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
              ${isAllSelected ? "bg-slate-200 border border-slate-400 shadow" : "bg-slate-50/60"}
              hover:bg-slate-50/60 focus:ring-slate-400
              ${expanded ? "justify-between" : "justify-center"}
            `}
            onClick={() => handleSelectList(PRESET_IDS.ALL)}
            tabIndex={0}
            aria-label="All"
            aria-current={isAllSelected ? "page" : undefined}
          >
            <div
              className={`flex items-center ${
                expanded ? "gap-3" : "gap-0 justify-center w-full"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center rounded-full bg-slate-200 text-slate-700`}
              >
                <FolderKanban
                  size={20}
                  className="w-5 h-5"
                  aria-hidden="true"
                  strokeWidth={2}
                />
              </span>
              {expanded && (
                <span
                  className={`text-base ml-3 ${
                    isAllSelected
                      ? "text-slate-800 font-bold"
                      : "font-medium text-slate-800"
                  }`}
                >
                  All
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`bg-slate-100 text-xs font-semibold text-slate-700 px-2.5 py-0.5 rounded-full shadow ${
                  isAllSelected ? "border border-current" : ""
                }`}
              >
                8
              </span>
            )}
          </button>
        </li>
        {/* Today */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
              ${isTodaySelected ? "bg-green-100 border border-green-400 shadow" : "bg-green-50/60"}
              hover:bg-green-50/60 focus:ring-green-400
              ${expanded ? "justify-between" : "justify-center"}
            `}
            onClick={() => handleSelectList(PRESET_IDS.TODAY)}
            tabIndex={0}
            aria-label="Today"
            aria-current={isTodaySelected ? "page" : undefined}
          >
            <div
              className={`flex items-center ${
                expanded ? "gap-3" : "gap-0 justify-center w-full"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center rounded-full bg-green-100 text-green-700`}
              >
                <CalendarDays
                  size={20}
                  className="w-5 h-5"
                  aria-hidden="true"
                  strokeWidth={2}
                />
              </span>
              {expanded && (
                <span
                  className={`text-base ml-3 ${
                    isTodaySelected
                      ? "text-green-800 font-bold"
                      : "font-medium text-slate-800"
                  }`}
                >
                  Today
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`bg-green-100 text-xs font-semibold text-green-700 px-2.5 py-0.5 rounded-full shadow ${
                  isTodaySelected ? "border border-current" : ""
                }`}
              >
                5
              </span>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PresetListsSection;
