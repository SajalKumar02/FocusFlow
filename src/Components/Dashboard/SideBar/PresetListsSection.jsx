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
      <h2 className="text-xs mb-3 text-slate-500 font-bold tracking-widest uppercase">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2">
        {/* All */}
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-xl transition-colors duration-150 cursor-pointer group w-full outline-none relative border border-transparent border-l-4
              ${
                isAllSelected
                  ? "bg-indigo-50 border border-indigo-200 border-l-indigo-600 shadow-sm"
                  : "bg-transparent hover:bg-slate-50 hover:border-slate-200"
              }
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
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
                className={`inline-flex items-center justify-center rounded-full ${
                  isAllSelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-500"
                }`}
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
                      ? "text-slate-900 font-bold"
                      : "font-medium text-slate-600"
                  }`}
                >
                  All
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${
                  isAllSelected ? "border border-current" : ""
                } ${
                  isAllSelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-600"
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
            className={`flex items-center py-2.5 px-3 rounded-xl transition-colors duration-150 cursor-pointer group w-full outline-none relative border border-transparent border-l-4
              ${
                isTodaySelected
                  ? "bg-indigo-50 border border-indigo-200 border-l-indigo-600 shadow-sm"
                  : "bg-transparent hover:bg-slate-50 hover:border-slate-200"
              }
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
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
                className={`inline-flex items-center justify-center rounded-full ${
                  isTodaySelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-500"
                }`}
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
                      ? "text-slate-900 font-bold"
                      : "font-medium text-slate-600"
                  }`}
                >
                  Today
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${
                  isTodaySelected ? "border border-current" : ""
                } ${
                  isTodaySelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-600"
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
            className={`flex items-center py-2.5 px-3 rounded-xl transition-colors duration-150 cursor-pointer group w-full outline-none relative border border-transparent border-l-4
              ${
                isOverdueSelected
                  ? "bg-indigo-50 border border-indigo-200 border-l-indigo-600 shadow-sm"
                  : "bg-transparent hover:bg-slate-50 hover:border-slate-200"
              }
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
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
                className={`inline-flex items-center justify-center rounded-full ${
                  isOverdueSelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-500"
                }`}
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
                      ? "text-slate-900 font-bold"
                      : "font-medium text-slate-600"
                  }`}
                >
                  Overdue
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${
                  isOverdueSelected ? "border border-current" : ""
                } ${
                  isOverdueSelected
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-slate-100 text-slate-600"
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
