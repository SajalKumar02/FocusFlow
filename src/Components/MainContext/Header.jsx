import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-start mb-6">
      <span className="text-3xl font-semibold text-slate-800">
        Today
      </span>
      <span className="text-slate-500 text-lg">
        Friday, Mar 6, 2026
      </span>
    </div>
  );
};

export default Header;
