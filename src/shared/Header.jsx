import React from 'react';

import { Menu } from 'lucide-react';
import DateTimeHeader from './DateTimeHeader';
import { useLocation } from 'react-router';

const Header = ({ handleSidebarToggle }) => {
  const location = useLocation();

  const page = location.pathname.split('/')[1];

  return (
    <div className="flex flex-row items-center gap-4 p-2 md:py-0 border-b border-slate-200">
      <div className="flex">
        <Menu
          size={24}
          onClick={handleSidebarToggle}
          className="cursor-pointer text-slate-400 hover:text-slate-500 transition-colors"
        />
      </div>
      {page === 'settings' ? (
        <div className="">
          <span className="text-base sm:text-md font-semibold text-slate-800">
            Settings
          </span>
          <p className="text-slate-500 text-xs sm:text-sm">
            Manage your preferences, lists, and account settings.
          </p>
        </div>
      ) : (
        <DateTimeHeader />
      )}
    </div>
  );
};

export default Header;
