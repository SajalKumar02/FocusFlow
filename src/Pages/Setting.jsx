import React from 'react';
import { useNavigate } from 'react-router';

import { useTheme } from '../feature/theme';
import { useTasks } from '../feature/task';

import { List, Palette, Pen, Trash } from 'lucide-react';
import { useToast } from '../feature/toast';

const Setting = () => {
  const { lists, deleteAllData, removeList, editList } = useTasks();
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const handleDeleteAllData = () => {
    deleteAllData();
    showToast('danger', 'All Data Deleted');
    navigate('/');
  };

  return (
    <div className="focusflow-component">
      {/* Appearance */}
      <div className="settings-card">
        <div className="settings-card-header">
          <Palette size={22} className="text-slate-600" />
          <p className="text-lg font-bold">Appearance</p>
        </div>
        <div className="settings-card-body">
          <div className="">
            <p className="text-lg">Toggle Theme</p>
            <p className="ms-1 text-sm font-semibold text-slate-600">
              Switch between Light and Dark modes to change the appearance of
              the app.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            {/* TOGGLER */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-center py-3">LIGHT</span>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300 outline-none border-2 ${theme === 'dark' ? 'border-gray-400' : 'border-gray-300'}`}
                aria-label="Toggle theme"
                type="button"
              >
                <span
                  className={`inline-block w-7 h-7 rounded-full shadow transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
                />
              </button>
              <span className="font-semibold text-center py-3">DARK</span>
            </div>
          </div>
        </div>
      </div>
      {/* List Management */}
      <div className="settings-card">
        <div className="settings-card-header">
          <List size={20} className="text-slate-600" />
          <p className="text-lg font-bold">List Management</p>
        </div>
        <p className="ms-1 text-sm font-semibold text-slate-600">
          Organize your lists to keep your tasks structured.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          {Array.isArray(lists) &&
            lists.map((l) => (
              <div
                key={l.id}
                className="flex flex-row justify-between items-center border border-slate-200 rounded-lg p-2"
              >
                <span className="text-sm font-semibold">{l.title}</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm bg-slate-100 text-slate-700 font-bold rounded-full px-3 py-1">
                    {0}
                  </span>
                  <button
                    className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label={`Edit list: ${l.title}`}
                    type="button"
                    onClick={() => editList(l.id)}
                  >
                    <Pen size={18} />
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-red-50 transition-colors"
                    aria-label={`Delete list: ${l.title}`}
                    type="button"
                    onClick={() => removeList(l.id)}
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Delete All Data */}
      <div className="settings-card">
        {/* Delete ALL DATA */}
        <div className="settings-card-header">
          <p className="text-lg font-bold">Delete All Data</p>
        </div>
        <div className="settings-card-body">
          {/* DELETE ALL DATA */}
          <div>
            <p className="text-sm">
              <span className="font-semibold">Warning:</span> This will{' '}
              <strong>permanently delete all your data</strong> and cannot be
              undone. Are you sure you want to continue?
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={handleDeleteAllData}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              aria-label="Delete all data"
              type="button"
            >
              Delete All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
