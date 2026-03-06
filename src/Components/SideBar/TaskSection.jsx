import React from "react";

const TaskSection = () => {
  return (
    <div className="px-5">
      <h2 className="text-[11px] text-slate-400 font-bold mb-3 mt-8 tracking-widest uppercase">
        Tasks
      </h2>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-between group py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-blue-50/60">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 17v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              Upcoming
            </span>
          </div>
          <span className="bg-blue-100 text-xs font-semibold text-blue-600 px-2.5 py-0.5 rounded-full shadow">
            {3}
          </span>
        </li>
        <li className="flex items-center justify-between group py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-green-50/60">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6v6l4 2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              Today
            </span>
          </div>
          <span className="bg-green-100 text-xs font-semibold text-green-700 px-2.5 py-0.5 rounded-full shadow">
            {5}
          </span>
        </li>
        <li className="flex items-center justify-between group py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-purple-50/60">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="4"
                  rx="2"
                  ry="2"
                />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              Calendar
            </span>
          </div>
          <span className="bg-purple-100 text-xs font-semibold text-purple-700 px-2.5 py-0.5 rounded-full shadow">
            {2}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TaskSection;
