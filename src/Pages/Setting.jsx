import React from 'react';
import { useTheme } from '../feature/theme';
import { useTasks } from '../feature/task';
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

const Setting = () => {
  const { theme, toggleTheme } = useTheme();
  const { deleteAllData } = useTasks();

  const navigate = useNavigate();

  const handleDeleteAllData = () => {
    deleteAllData();
    navigate('/');
  };

  return (
    <div className="h-screen overflow-hidden font-mono bg-gray-200 dark:bg-gray-900">
      {/* Settings Title */}
      <div className="flex items-center justify-between px-8 py-7 rounded-2xl shadow-2xl mb-10 border-b-4 dark:border-fuchsia-400/30">
        <div
          className="flex flex-row gap-1 group cursor-pointer text-slate-500 transition hover:text-slate-900"
          onClick={() => navigate('/')}
        >
          <ChevronLeft className="" />
          <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
            Back
          </span>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text drop-shadow-2xl animate-gradient-x select-none bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-transparent dark:text-gray-100 dark:bg-none pb-1">
          Settings
        </h1>

        {/* Spacer for symmetry */}
        <div className="h-9 w-9 opacity-0" />
      </div>
      {/* Options */}
      <div className="flex flex-col p-8 gap-8 max-w-6xl mx-auto">
        {/* Appearence */}
        <div>
          <p className="text-2xl text-yellow-700 dark:text-yellow-300 font-semibold mb-2">
            Beta Testing: Theme switching is experimental and might not work
            across the complete app.
          </p>
          <p className="text-4xl text-gray-700 dark:text-gray-300 font-bold transition-colors duration-200 hover:text-gray-900 dark:hover:text-gray-50 cursor-pointer">
            Appearance
          </p>
          <div className="flex">
            <div className="flex-3 basis-3/4 p-8">
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
                Toggle Theme
              </p>
              <p className="text-gray-500 dark:text-gray-300/40 text-sm">
                Switch between <span className="font-semibold">Light</span> and{' '}
                <span className="font-semibold">Dark</span> modes to change the
                appearance of the app.
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
                  className={`relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300 outline-none border-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-400' : 'bg-gray-200 border-gray-300'}`}
                  aria-label="Toggle theme"
                  type="button"
                >
                  <span
                    className={`inline-block w-7 h-7 rounded-full bg-white shadow transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
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
      <div className="flex flex-col p-8 gap-8 max-w-6xl mx-auto">
        {/* DELETE ALL DATA */}
        <div>
          <p className="text-4xl text-red-700 dark:text-red-300 font-bold transition-colors duration-200 hover:text-red-900 dark:hover:text-red-100 cursor-pointer mb-2">
            Delete All Data
          </p>
          <div className="flex">
            <div className="flex-3 basis-3/4 p-8">
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
                Danger Zone
              </p>
              <p className="text-gray-500 dark:text-gray-300/40 text-sm">
                <span className="font-semibold text-red-600 dark:text-red-400">
                  Warning:
                </span>{' '}
                This will <strong>permanently delete all your data</strong> and
                cannot be undone. Are you sure you want to continue?
              </p>
            </div>
            <div className="flex-1 basis-1/4 p-3 m-auto flex items-center justify-center">
              <button
                onClick={handleDeleteAllData}
                className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow transition-all duration-200 border-2 border-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Delete all data"
                type="button"
              >
                Delete All Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
