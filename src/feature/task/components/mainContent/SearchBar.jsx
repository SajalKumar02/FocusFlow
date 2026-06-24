import React from 'react';
import { useSearchParams } from 'react-router';

import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = searchParams.get('q') || '';

  const handleInputChange = (e) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (e.target.value) {
        newParams.set('q', e.target.value);
      } else {
        newParams.delete('q');
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
        className="bg-gray-100 outline-none rounded-md px-4 py-2 w-full pl-10"
        type="text"
        placeholder="Search tasks..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
