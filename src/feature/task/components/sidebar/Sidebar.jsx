import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import SidebarItems from '@/feature/task/components/sidebar/SidebarItems';
import SearchBar from '@/feature/task/components/sidebar/SearchBar';

import { useTasks } from '@/feature/task';
import { useToast } from '@/feature/toast';

import { Settings, X } from 'lucide-react';

// Sidebar component styled per design.md and design tokens (see index.css)
const Sidebar = ({ handleSidebarToggle }) => {
  const { lists, defaultListNames, addList } = useTasks();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const [showListInput, setShowListInput] = useState(false);
  const [newListTitle, setNewListTitle] = useState('');

  const inputRef = useRef(null);

  // Add new list with title validation and design-consistent feedback
  const handleAddList = () => {
    const title = newListTitle.trim();

    // Title (case-insensitive) must not match any existing list
    if (
      lists.some((list) => list.title.toLowerCase() === title.toLowerCase()) ||
      defaultListNames.some(
        (list) => list.title.toLowerCase() === title.toLowerCase(),
      )
    ) {
      showToast('warning', 'List name must be unique.');
      setNewListTitle('');
      setShowListInput(false);
      return;
    }

    const canAddMoreLists = lists.length < 4;

    if (!canAddMoreLists) {
      showToast('warning', "You can't have more than 4 lists.");
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

  // Keyboard interactions for the input field
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
      {/* Header Row */}
      <div className="flex flex-row py-1 items-center justify-between">
        <div className="flex items-center">
          <p className="text-lg font-semibold text-title tracking-tight select-none">
            FocusFlow
          </p>
        </div>
        <div>
          <button
            className="p-1 rounded hover:bg-surface-2 active:bg-app cursor-pointer transition-colors"
            onClick={handleSidebarToggle}
            aria-label="Close sidebar"
            type="button"
          >
            <X className="h-5 w-5 text-muted hover:text-title transition-colors" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Quick Views Section */}
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-xs font-bold text-muted tracking-wider select-none">
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

      {/* Lists Section */}
      <div className="flex flex-col gap-2">
        <div>
          <span className="text-xs font-bold text-muted tracking-wider select-none">
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
              custom={true}
            />
          ))}
          {showListInput && (
            <input
              type="text"
              placeholder="Add New List"
              className="w-full px-3 py-2 rounded-lg border border-app bg-surface text-title focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              ref={inputRef}
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              onKeyDown={handleInputKeyDown}
              aria-label="Add new list"
              autoFocus
              maxLength={24}
            />
          )}

          <span
            className="text-center text-xs py-1 font-medium text-accent hover:text-accent-hover cursor-pointer transition-colors"
            onClick={() => setShowListInput((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ')
                setShowListInput((prev) => !prev);
            }}
          >
            {showListInput ? 'Cancel' : 'Add New List'}
          </span>
        </div>
      </div>
      <div className="border-b border-app" />

      {/* Settings Section */}
      <div className="mt-auto">
        <button
          onClick={() => navigate('/settings')}
          className="flex w-full items-center gap-2 px-4 py-2.5 hover:bg-surface-2 rounded-lg cursor-pointer transition-colors"
          type="button"
        >
          <Settings className="h-5 w-5 text-muted" />
          <span className="text-sm font-medium text-title">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
