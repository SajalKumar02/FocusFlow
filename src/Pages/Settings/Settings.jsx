import React from "react";

const Settings = () => {
  return (
    <div className="h-screen font-mono bg-[radial-gradient(circle_at_50%_20%,#232946_0%,#14121c_100%)]">
      {/* Settings Title */}
      <div className="text-center py-4">
        <h1 className="text-white text-4xl">Settings</h1>
      </div>
      {/* Options */}
      <div className="flex flex-col p-8 gap-8 max-w-6xl mx-auto">
        {/* Appearence */}
        <div>
          <p className="text-4xl text-gray-300 font-bold transition-colors duration-200 hover:text-gray-50 cursor-pointer">
            Appearance
          </p>
          <div className="flex">
            <div className="flex-3 basis-3/4 p-8">
              <p className="text-2xl text-gray-300 mb-2">
                Toggle Theme
              </p>
              <p className="text-gray-300/40 text-sm ">
                Switch between{" "}
                <span className="font-semibold">Light</span> and{" "}
                <span className="font-semibold">Dark</span> modes to
                change the appearance of the app.
              </p>
            </div>
            <div className="flex-1 basis-1/4 p-3 m-auto">
              <div className="flex">
                <span className="text-gray-400 font-semibold text-center flex-1/2 py-3">
                  LIGHT
                </span>
                <span className="text-gray-400 font-semibold text-center flex-1/2 py-3">
                  DARK
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Behaviour */}
        {/* <div className="border">
          <p className="text-3xl text-gray-300 font-bold transition-colors duration-200 hover:text-gray-50 cursor-pointer">
            Appearance
          </p>
          <div className="flex-3 basis-3/4 p-8">
            <span className="text-gray-300">Toggle Theme</span>
          </div>
          <div className="flex-1 basis-1/4 p-6 ">
            <span className="text-gray-400">Sidebar (25%)</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Settings;
