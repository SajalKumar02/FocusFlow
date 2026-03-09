import React from "react";

const Header = () => {
  const currentDate = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    // Example output: Friday, Mar 6, 2026
    return now.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex flex-col items-start mb-6">
      <span className="text-3xl font-semibold text-slate-800">
        Today
      </span>
      <span className="text-slate-500 text-lg">{currentDate()}</span>
    </div>
  );
};

export default Header;
