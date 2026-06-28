import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import SidebarItems from '@/feature/task/components/sidebar/SidebarItems';
import SearchBar from '@/feature/task/components/sidebar/SearchBar';

import { useTasks } from '@/feature/task';
import { useToast } from '@/feature/toast';

import { Settings, X } from 'lucide-react';

const Sidebar = ({ handleSidebarToggle }) => {
  const { lists, defaultListNames, addList } = useTasks();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const [showListInput, setShowListInput] = useState(false);
  const [newListTitle, setNewListTitle] = useState('');

  const inputRef = useRef(null);

  const handleAddList = () => {
    const title = newListTitle.trim().toLowerCase();

    if (
      lists.some((list) => list.title.toLowerCase() === title) &&
      defaultListNames.some((list) => list.title.toLowerCase() === title)
    ) {
      return;
    }

    const canAddMoreLists = lists.length < 4;

    if (!canAddMoreLists) {
      showToast('warning', "You can't have more than 4 lists. ");
      setShowListInput(false);
      setNewListTitle('');
      return;
    }

    if (!showListInput) {
      setShowListInput(true);
      return;
    }

    if (title) {
      addList(title);
      showToast('success', 'List Added');
      setNewListTitle('');
      setShowListInput(false);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddList();
    }
    if (e.key === 'Escape') {
      setShowListInput(false);
      setNewListTitle('');
    }
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-3 h-full bg-surface">
      {/* CLOSE BUTTON */}
      <div className="flex flex-row py-1 items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg font-semibold text-title tracking-tight select-none">
            FocusFlow
          </p>
        </div>
        <div>
          <button
            className="p-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-700 active:bg-slate-200 dark:active:bg-zinc-600 cursor-pointer transition-colors"
            onClick={handleSidebarToggle}
          >
            <X className="h-5 w-5 text-slate-400 dark:text-zinc-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-colors" />
          </button>
        </div>
      </div>

      {/* SEARCH BAR */}
      <SearchBar />

      {/* QUICK VIEW */}
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-xs font-bold text-muted tracking-wider">
            QUICK VIEWS
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {defaultListNames.map((list, index) => (
            <SidebarItems
              key={index}
              icon={list.icon}
              title={list.title}
              value={list.value}
              style={list.style}
            />
          ))}
        </div>
      </div>
      <div className="border-b border-app" />

      {/* LISTS */}
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-xs font-bold text-muted tracking-wider">
            LISTS
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {lists.map((list, index) => (
            <SidebarItems
              key={index}
              title={list.title}
              value={list.value}
              style={list.style}
            />
          ))}
          {showListInput && (
            <input
              type="text"
              placeholder="Add New List"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-title focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
              ref={inputRef}
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              onKeyDown={handleInputKeyDown}
              aria-label="Add new list"
            />
          )}

          <span
            className="text-center text-xs py-1 font-medium text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 cursor-pointer transition-colors"
            onClick={() => setShowListInput((prev) => !prev)}
          >
            Add New List
          </span>
        </div>
      </div>
      <div className="border-b border-app" />

      {/* Settings */}
      <div className="mt-auto">
        <button
          onClick={() => navigate('/settings')}
          className="flex w-full items-center gap-2 px-4 py-2.5 hover:bg-slate-200 dark:hover:bg-zinc-700 rounded-xl cursor-pointer transition-colors"
        >
          <Settings className="h-5 w-5 text-muted" />
          <span className="text-sm font-medium text-title">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
