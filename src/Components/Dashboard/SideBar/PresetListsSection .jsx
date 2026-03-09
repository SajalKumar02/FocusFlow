import React from "react";
import { Users, Sun } from "lucide-react";

const CustomLinkSection = ({
  expanded,
  selectedList,
  handleSetSelectedList,
}) => {
  // Handles the selection of a task list
  const handleSelect = (taskLabel) => {
    if (handleSetSelectedList) {
      handleSetSelectedList(taskLabel);
    }
  };

  // First button: Upcoming
  const isUpcomingSelected = selectedList === "Upcoming";
  // Second button: Today
  const isTodaySelected = selectedList === "Today";

  return (
    <div className="p-5 border-b border-slate-200">
      <h2 className="text-[11px] mb-3 text-slate-400 font-bold tracking-widest uppercase">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2">
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
              ${isUpcomingSelected ? "bg-blue-100 border border-blue-400 shadow" : "bg-blue-50/60"}
              ${"hover:bg-blue-50/60"} ${"focus:ring-blue-400"}
              ${expanded ? "justify-between" : "justify-center"}
            `}
            onClick={() => handleSelect("Upcoming")}
            tabIndex={0}
            aria-label="Upcoming"
            aria-current={isUpcomingSelected ? "page" : undefined}
          >
            <div
              className={`flex items-center ${
                expanded ? "gap-3" : "gap-0 justify-center w-full"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600 ${
                  isUpcomingSelected
                    ? "ring-2 ring-offset-2 ring-inset ring-current"
                    : ""
                }`}
              >
                <Users
                  size={20}
                  className="w-5 h-5"
                  aria-hidden="true"
                  strokeWidth={2}
                />
              </span>
              {expanded && (
                <span
                  className={`text-base ml-3 ${
                    isUpcomingSelected
                      ? "text-blue-700 font-bold"
                      : "font-medium text-slate-800"
                  }`}
                >
                  Upcoming
                </span>
              )}
            </div>
            {expanded && (
              <span
                className={`bg-blue-100 text-xs font-semibold text-blue-600 px-2.5 py-0.5 rounded-full shadow ${
                  isUpcomingSelected ? "border border-current" : ""
                }`}
              >
                3
              </span>
            )}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
              ${isTodaySelected ? "bg-green-100 border border-green-400 shadow" : "bg-green-50/60"}
              ${"hover:bg-green-50/60"} ${"focus:ring-green-400"}
              ${expanded ? "justify-between" : "justify-center"}
            `}
            onClick={() => handleSelect("Today")}
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
                className={`inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 ${
                  isTodaySelected
                    ? "ring-2 ring-offset-2 ring-inset ring-current"
                    : ""
                }`}
              >
                <Sun
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

export default CustomLinkSection;
