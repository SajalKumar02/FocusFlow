import React from "react";

const ListSection = () => {
  return (
    <div className="px-5 mt-10 flex-1">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[11px] text-slate-400 font-bold tracking-widest uppercase">
          Lists
        </h2>
        <button
          className="flex items-center justify-center w-7 h-7 bg-slate-100 text-blue-500 rounded-full transition-all hover:bg-blue-50 active:bg-blue-200"
          type="button"
          title="Add List"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 5v14M5 12h14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center justify-between py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-pink-50/60 group">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94" strokeLinecap="round" />
                <path d="M9.69 8h11.48" strokeLinecap="round" />
                <path d="M7.38 12l5.74-9.94" strokeLinecap="round" />
                <path
                  d="M14.31 16l-5.74-9.94"
                  strokeLinecap="round"
                />
                <path d="M9.69 16H3.21" strokeLinecap="round" />
                <path
                  d="M16.62 12l-5.74 9.94"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              Personal
            </span>
          </div>
          <span className="bg-pink-100 text-xs font-semibold text-pink-600 px-2.5 py-0.5 rounded-full shadow">
            {4}
          </span>
        </li>
        <li className="flex items-center justify-between py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-yellow-50/60 group">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              Work
            </span>
          </div>
          <span className="bg-yellow-100 text-xs font-semibold text-yellow-600 px-2.5 py-0.5 rounded-full shadow">
            {6}
          </span>
        </li>
        <li className="flex items-center justify-between py-2.5 px-3 rounded-xl transition-all cursor-pointer hover:bg-teal-50/60 group">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <span className="text-base font-medium text-slate-800">
              List 1
            </span>
          </div>
          <span className="bg-teal-100 text-xs font-semibold text-teal-600 px-2.5 py-0.5 rounded-full shadow">
            {1}
          </span>
        </li>
      </ul>
      {/* Hidden add new list input for future use */}
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
    </div>
  );
};

export default ListSection;
