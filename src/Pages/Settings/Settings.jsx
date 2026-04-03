import React, { useContext } from "react";

import { ThemeContext } from "../../Theme/ThemeContext.jsx";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="h-screen font-mono bg-gray-200 dark:bg-gray-900">
      {/* Settings Title */}
      <div className="flex items-center justify-between px-8 py-7 rounded-2xl shadow-2xl mb-10 border-b-4 dark:border-fuchsia-400/30">
        <Link
          to="/"
          className="flex items-center transition-all duration-200 rounded-full p-2 group
            hover:scale-110 hover:bg-gray-300
          dark:hover:bg-fuchsia-600/25
          "
          aria-label="Go back to Home"
        >
          <ChevronLeft
            className="h-9 w-9 drop-shadow-lg 

              dark:text-fuchsia-200 dark:group-hover:text-fuchsia-400 
            "
            strokeWidth={3}
          />
        </Link>
        <h1
          className="text-6xl font-extrabold tracking-tight bg-clip-text drop-shadow-2xl animate-gradient-x select-none
          bg-gradient-to-r 
          from-gray-800 via-gray-700 to-gray-800 text-transparent
          dark:from-fuchsia-300 dark:via-indigo-100 dark:to-fuchsia-400 dark:text-transparent
          "
        >
          Settings
        </h1>
        {/* Spacer for symmetry */}
        <div className="h-9 w-9 opacity-0" />
      </div>
      {/* Options */}
      <div className="flex flex-col p-8 gap-8 max-w-6xl mx-auto">
        {/* Appearence */}
        <div>
          <p className="text-4xl text-gray-700 dark:text-gray-300 font-bold transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50 cursor-pointer">
            Appearance
          </p>
          <div className="flex">
            <div className="flex-3 basis-3/4 p-8">
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
                Toggle Theme
              </p>
              <p className="text-gray-500 dark:text-gray-300/40 text-sm">
                Switch between{" "}
                <span className="font-semibold">Light</span> and{" "}
                <span className="font-semibold">Dark</span> modes to
                change the appearance of the app.
              </p>
            </div>
            <div className="flex-1 basis-1/4 p-3 m-auto">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-center py-3 text-gray-600 dark:text-gray-400">
                  LIGHT
                </span>
                {/* Toggle Switch */}
                <button
                  onClick={toggleTheme}
                  className={`relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300 outline-none border-2 ${theme === "dark" ? "bg-gray-700 border-gray-400" : "bg-gray-200 border-gray-300"}`}
                  aria-label="Toggle theme"
                  type="button"
                >
                  <span
                    className={`inline-block w-7 h-7 rounded-full bg-white shadow transform transition-transform duration-300 ${
                      theme === "dark"
                        ? "translate-x-7"
                        : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="font-semibold text-center py-3 text-gray-600 dark:text-gray-400">
                  DARK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
