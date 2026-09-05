import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { useTheme } from '@/feature/theme';
import { getTaskCountForList, useTasks } from '@/feature/task';
import { useToast } from '@/feature/toast';

import { List, Palette, Pen, Save, Trash } from 'lucide-react';

// Design System Token Classes (from DESIGN.md)
// Typography: font-[cursor-gothic] normal, no bold headlines, 16px/400 body, 14px/500 button
// Buttons/inputs: rounded-md (8px), cards: rounded-lg (12px)
// Borders: border-hairline (should resolve to 1px, #e6e5e0), bg-surface, no drop shadow
// CTA: use bg-primary for orange, semantic for red, success, etc.
// Inputs: text-input, buttons: button-primary

const Settings = () => {
  const { lists, tasks, deleteAllData, removeList, editList } = useTasks();
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const [newListTitle, setNewListTitle] = useState('');
  const [showInput, setShowInput] = useState();

  const navigate = useNavigate();

  const handleDeleteAllData = () => {
    deleteAllData();
    showToast('danger', 'All Data Deleted');
    navigate('/');
  };

  const handleEditList = () => {
    if (!newListTitle.trim()) {
      showToast('warning', 'No title given');
      setNewListTitle('');
      setShowInput();
      return;
    }
    editList(showInput, newListTitle.trim());
    showToast('success', 'New List Title Saved');
    setNewListTitle('');
    setShowInput();
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEditList();
    } else if (e.key === 'Escape') {
      setShowInput();
      setNewListTitle('');
    }
  };

  const handleRemoveList = (id) => {
    removeList(id);
    showToast('success', 'List deleted successfully.');
    showToast('info', 'All tasks within the list have been deleted.');
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-3 sm:px-0">
      {/* Appearance */}
      <section className="feature-card rounded-lg border border-hairline bg-surface mb-8 p-8">
        <header className="flex items-center gap-3 mb-6">
          <Palette size={20} className="text-title" />
          <h2 className="text-title font-normal font-[cursor-gothic] text-xl">
            Appearance
          </h2>
        </header>
        <div className="space-y-2">
          <div>
            <div className="text-title font-normal text-lg mb-1">
              Toggle Theme
            </div>
            <div className="text-muted text-sm">
              Switch between Light and Dark modes to change the appearance of
              the app.
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <span className="font-medium text-title text-sm uppercase tracking-wider">
              Light
            </span>
            <button
              onClick={toggleTheme}
              className={`relative h-7 w-14 button-primary border-hairline border-2 bg-surface-2 rounded-full transition-colors duration-200 focus:outline-none`}
              aria-label="Toggle theme"
              type="button"
              tabIndex={0}
              style={{
                top: '-4px',
                left: '-4px',
                position: 'relative',
              }}
            >
              <span
                className={`absolute top-0 left-0 h-7 w-7 bg-app border-app border rounded-full transition-transform duration-200
                  ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}
                `}
                style={{
                  boxShadow: 'none',
                  top: '-2px',
                  left: '-2px',
                }}
              ></span>
            </button>
            <span className="font-medium text-title text-sm uppercase tracking-wider">
              Dark
            </span>
          </div>
        </div>
      </section>

      {/* List Management */}
      <section className="feature-card rounded-lg border border-hairline bg-surface mb-8 p-8">
        <header className="flex items-center gap-3 mb-4">
          <List size={18} className="text-title" />
          <h2 className="text-title font-normal font-[cursor-gothic] text-xl">
            List Management
          </h2>
        </header>
        <div className="text-muted text-sm mb-4">
          Organize your lists to keep your tasks structured.
        </div>
        <ul className="space-y-3">
          {Array.isArray(lists) &&
            lists.map((l) => (
              <li
                key={l.id}
                className="flex flex-row justify-between items-center border border-hairline rounded-lg bg-surface-2 px-4 py-2"
              >
                {showInput === l.id ? (
                  <input
                    type="text"
                    placeholder="New List Name…"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    autoFocus
                    className="text-input w-36 px-3 py-2 mr-2 rounded-md bg-surface-1 text-title border border-hairline focus:ring-2 focus:ring-primary"
                    style={{
                      fontFamily: 'inherit',
                      fontWeight: 400,
                      fontSize: 14,
                    }}
                  />
                ) : (
                  <span
                    className="text-title font-normal text-base"
                    style={{ fontFamily: 'var(--cursor-gothic, Inter)' }}
                  >
                    {l.title}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-app text-title font-medium uppercase rounded-full px-3 py-1 border border-app select-none">
                    {getTaskCountForList(l.value, tasks)}
                  </span>
                  {showInput === l.id ? (
                    <button
                      className="button-primary flex items-center justify-center h-8 w-8 rounded-md"
                      aria-label={`Save new title for list: ${l.title}`}
                      type="button"
                      onClick={handleEditList}
                    >
                      <Save size={16} />
                    </button>
                  ) : (
                    <button
                      className="flex items-center justify-center h-8 w-8 rounded-md border hover:bg-hairline"
                      aria-label={`Rename list: ${l.title}`}
                      type="button"
                      onClick={() => {
                        setShowInput(l.id);
                        setNewListTitle(l.title || '');
                      }}
                    >
                      <Pen size={16} />
                    </button>
                  )}
                  <button
                    className="flex items-center justify-center h-8 w-8 rounded-md border border-transparent hover:bg-error/10"
                    aria-label={`Delete list: ${l.title}`}
                    type="button"
                    onClick={() => handleRemoveList(l.id)}
                  >
                    <Trash size={16} className="text-error" />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>

      {/* Delete All Data */}
      <section className="feature-card rounded-lg border border-hairline bg-surface p-8">
        <header className="mb-4">
          <h2 className="text-title font-normal font-[cursor-gothic] text-xl">
            Delete All Data
          </h2>
        </header>
        <div>
          <div className="mb-3">
            <span className="text-error font-semibold">Warning:</span>
            <span className="text-muted text-sm ml-1">
              This will{' '}
              <span className="text-error font-semibold">
                permanently delete all your data
              </span>{' '}
              and cannot be undone. Are you sure you want to continue?
            </span>
          </div>
          <button
            onClick={handleDeleteAllData}
            className="button-primary bg-error hover:bg-error/80 font-medium px-6 py-2 mt-1 rounded-md uppercase tracking-wide transition-colors cursor-pointer border border-error dark:text-white"
            aria-label="Delete all data"
            type="button"
          >
            Delete All Data
          </button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
