import React from 'react';

import { Menu } from 'lucide-react';
import DateTimeHeader from './DateTimeHeader';
import { useLocation } from 'react-router';

const Header = ({ handleSidebarToggle }) => {
  const location = useLocation();

  const page = location.pathname.split('/')[1];

  return (
    <div className="flex flex-row items-center gap-4 p-2 md:py-0 border-b border-app bg-surface">
      <div className="flex">
        <Menu
          size={24}
          onClick={handleSidebarToggle}
          className="cursor-pointer text-muted hover:text-title transition-colors"
        />
      </div>
      {page === 'settings' ? (
        <div className="">
          <span className="text-base sm:text-md font-semibold text-title">
            Settings
          </span>
          <p className="text-muted text-xs sm:text-sm">
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
