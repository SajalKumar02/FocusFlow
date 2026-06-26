import React from 'react';
import { useSearchParams } from 'react-router';

import { Search } from 'lucide-react';

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
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none">
        <Search size={18} />
      </span>
      <input
        className="rounded-lg px-4 py-1.5 w-full pl-10 outline outline-slate-300"
        type="text"
        placeholder="Search tasks..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
