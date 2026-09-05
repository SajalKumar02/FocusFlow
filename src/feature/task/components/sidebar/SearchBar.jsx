import React from 'react';
import { useSearchParams } from 'react-router';
import { Search } from 'lucide-react';

/*
  UI follows design.md and index.css design tokens:
    - bg-surface, border-app, text-title, text-muted
    - rounded-lg, px-4, py-2, pl-10 for text alignment with icon
    - focus:outline-none, focus:ring for active state
    - consistent placeholder and icon coloring
*/

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get('task') || '';

  const handleInputChange = (e) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (e.target.value) {
        newParams.set('task', e.target.value);
      } else {
        newParams.delete('task');
      }
      return newParams;
    });
  };

  return (
    <div className="relative mb-2">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
        <Search size={18} aria-hidden="true" />
      </span>
      <input
        className="w-full rounded-lg border border-app bg-surface px-4 py-2 pl-10 text-title text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition"
        type="text"
        placeholder="Search tasks..."
        value={searchInput}
        onChange={handleInputChange}
        aria-label="Search tasks"
        autoComplete="off"
        maxLength={48}
        spellCheck={false}
      />
    </div>
  );
};

export default SearchBar;
