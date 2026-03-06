import React from "react";

const Footer = () => {
  return (
    <div className="px-5 pb-6 flex flex-col gap-2 mt-4 border-t border-slate-200 pt-5">
      <button className="flex items-center px-3 py-2 rounded-lg transition-all hover:bg-slate-200/70 text-slate-600 font-semibold text-base group">
        <svg
          className="w-5 h-5 mr-3 text-slate-400 group-hover:text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 15v2m-6-7V7a2 2 0 012-2h8a2 2 0 012 2v3"
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
          <path
            d="M12 11v2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Settings</span>
      </button>
      <button className="flex items-center px-3 py-2 rounded-lg transition-all hover:bg-red-50/80 text-slate-600 font-semibold text-base group">
        <svg
          className="w-5 h-5 mr-3 text-slate-400 group-hover:text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M17 16l4-4m0 0l-4-4m4 4H7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default Footer;
