import React, { useContext } from "react";
import {
  FolderKanban,
  CalendarDays,
  AlertCircle,
} from "lucide-react";

import { TaskContext } from "../../../TaskState/TaskProvider";

const PresetListsSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  const { PRESET_IDS, getCountOfPresetLists } =
    useContext(TaskContext);

  const handleSelectList = (listId) => {
    if (handleSetSelectedList) {
      handleSetSelectedList(listId);
    }
  };

  const isAllSelected = selectedList === PRESET_IDS.ALL;
  const isTodaySelected = selectedList === PRESET_IDS.TODAY;
  const isOverdueSelected = selectedList === PRESET_IDS.OVERDUE;

  return (
    <div className="py-5 px-3 border-b border-slate-200">
      <h2 className="text-xs mb-3 text-slate-400 font-bold tracking-widest uppercase">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2">
        {/* All */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-lg shadow-sm transition-all cursor-pointer group w-full outline-none
              ${
                isAllSelected
                  ? "bg-gradient-to-r from-slate-300 to-slate-200 border border-slate-500 ring-2 ring-slate-300"
                  : "bg-slate-100/80 border border-slate-300"
              }
              hover:bg-slate-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500
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
                {getCountOfPresetLists(PRESET_IDS.ALL)}
              </span>
            )}
          </button>
        </li>
        {/* Today */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-lg shadow-sm transition-all cursor-pointer group w-full outline-none
              ${
                isTodaySelected
                  ? "bg-gradient-to-r from-green-200 to-green-100 border border-green-500 ring-2 ring-green-300"
                  : "bg-green-100/80 border border-green-300"
              }
              hover:bg-green-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500
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
                {getCountOfPresetLists(PRESET_IDS.TODAY)}
              </span>
            )}
          </button>
        </li>
        {/* Overdue */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-lg shadow-sm transition-all cursor-pointer group w-full outline-none
              ${
                isOverdueSelected
                  ? "bg-gradient-to-r from-red-200 to-red-100 border border-red-400 ring-2 ring-red-200"
                  : "bg-red-50/80 border border-red-200"
              }
              hover:bg-red-100 hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-400
              ${expanded ? "justify-between" : "justify-center"}
            `}
            onClick={() => handleSelectList(PRESET_IDS.OVERDUE)}
            tabIndex={0}
            aria-label="Overdue"
            aria-current={isOverdueSelected ? "page" : undefined}
          >
            <div
              className={`flex items-center ${
                expanded ? "gap-3" : "gap-0 justify-center w-full"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center rounded-full bg-red-100 text-red-700`}
              >
                <AlertCircle
                  size={20}
                  className="w-5 h-5"
                  aria-hidden="true"
                  strokeWidth={2}
                />
              </span>
              {expanded && (
                <span
                  className={`text-base ml-3 ${
                    isOverdueSelected
                      ? "text-red-800 font-bold"
                      : "font-medium text-slate-800"
                  }`}
                >
                  Overdue
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`bg-red-100 text-xs font-semibold text-red-700 px-2.5 py-0.5 rounded-full shadow ${
                  isOverdueSelected ? "border border-current" : ""
                }`}
              >
                {getCountOfPresetLists(PRESET_IDS.OVERDUE)}
              </span>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PresetListsSection;
