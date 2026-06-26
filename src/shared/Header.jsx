import React from 'react';

import { Menu } from 'lucide-react';
import DateTimeHeader from './DateTimeHeader';

const Header = ({ handleSidebarToggle }) => {
  return (
    <div className="flex flex-row items-center gap-4 p-2 md:py-0 border-b border-slate-200">
      <div className="flex">
        <Menu
          size={24}
          onClick={handleSidebarToggle}
          className="cursor-pointer text-slate-400 hover:text-slate-500 transition-colors"
        />
      </div>

      <DateTimeHeader />
    </div>
  );
};

export default Header;
