import React from "react";
import { Users, Sun } from "lucide-react";

/**
 * TaskSection
 * Renders "Upcoming" and "Today" sections as accessible buttons for filtering tasks.
 * Does not contain filtering logic; UI only. Handlers for future functionality are stubbed.
 */
const TASKS = [
  {
    label: "Upcoming",
    icon: Users,
    bg: "bg-blue-50/60",
    hover: "hover:bg-blue-50/60",
    ring: "focus:ring-blue-400",
    pillBg: "bg-blue-100",
    pillText: "text-blue-600",
    count: 3,
  },
  {
    label: "Today",
    icon: Sun,
    bg: "bg-green-50/60",
    hover: "hover:bg-green-50/60",
    ring: "focus:ring-green-400",
    pillBg: "bg-green-100",
    pillText: "text-green-700",
    count: 5,
  },
];

const TaskSection = ({ expanded }) => {
  // Placeholder for click handler - functionality to be added later
  const handleClick = (label) => {
    // Will trigger todo filtering by date (not handled here)
  };

  return (
    <div className="p-5 border-b border-slate-200">
      <h2 className="text-[11px] mb-3 text-slate-400 font-bold tracking-widest uppercase">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2">
        {TASKS.map((task) => (
          <li key={task.label}>
            <button
              type="button"
              className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
                ${task.bg} ${task.hover} ${task.ring}
                ${expanded ? "justify-between" : "justify-center"}`}
              onClick={() => handleClick(task.label)}
              tabIndex={0}
              aria-label={task.label}
            >
              <div
                className={`flex items-center ${
                  expanded ? "gap-3" : "gap-0 justify-center w-full"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-full ${task.pillBg} ${task.pillText}`}
                >
                  <task.icon
                    size={20}
                    className="w-5 h-5"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </span>
                {expanded && (
                  <span className="text-base font-medium text-slate-800 ml-3">
                    {task.label}
                  </span>
                )}
              </div>
              {expanded && (
                <span
                  className={`${task.pillBg} text-xs font-semibold ${task.pillText} px-2.5 py-0.5 rounded-full shadow`}
                >
                  {task.count}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSection;
