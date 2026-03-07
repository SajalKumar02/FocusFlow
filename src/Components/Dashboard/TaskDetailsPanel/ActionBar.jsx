import React from "react";

import { X, Save } from "lucide-react";

const ActionBar = () => {
  return (
    <div className="flex gap-3 justify-end mt-10">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 bg-white text-red-600 font-medium hover:bg-red-50 hover:border-red-300 transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300">
        <span className="h-5 w-5">
          <span title="Delete">
            <i className="lucide">
              <X
                className="h-5 w-5 stroke-red-500"
                aria-label="Delete"
              />
            </i>
          </span>
        </span>
        Delete
      </button>
      <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300">
        <span className="h-5 w-5">
          <span title="Save">
            <i className="lucide">
              <Save
                className="h-5 w-5 text-white"
                aria-label="Save"
              />
            </i>
          </span>
        </span>
        Save
      </button>
    </div>
  );
};

export default ActionBar;
