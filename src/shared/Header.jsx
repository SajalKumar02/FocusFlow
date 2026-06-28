import React from 'react';
import { useLocation } from 'react-router';

import { Menu } from 'lucide-react';

const Header = ({ handleSidebarToggle }) => {
  const location = useLocation();
  const page = location.pathname.split('/')[1];

  const currentDate = () => {
    const now = new Date();
    const options = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return now.toLocaleDateString('en-US', options);
  };

  const getHeaderTitle = () => {
    if (page === 'settings') return 'Settings';
    if (page === 'tasks') return 'Task Details';
    // Add additional pages if needed. Default to Today.
    return 'Today';
  };

  const getHeaderDescription = () => {
    if (page === 'settings')
      return 'Manage your preferences, lists, and account settings.';
    if (page === 'tasks') return ''; // Or a suitable description for Task Details
    return currentDate();
  };

  return (
    <div className="flex flex-row items-center gap-4 p-2 md:py-0 border-b border-app bg-surface">
      <div className="flex">
        <Menu
          size={24}
          onClick={handleSidebarToggle}
          className="cursor-pointer text-muted hover:text-title transition-colors"
        />
      </div>
      {(page === 'settings' || page === 'tasks' || page === '') && (
        <div className="flex flex-col items-start my-1 sm:my-2">
          <span className="text-base sm:text-md font-semibold text-title">
            {getHeaderTitle()}
          </span>
          {/* Only render description if it's not empty */}
          {getHeaderDescription() && (
            <span className="text-muted text-xs sm:text-sm">
              {getHeaderDescription()}
            </span>
          )}
        </div>
      )}
      {/* Optionally, for main page (no page), show title/description as well */}
      {page !== 'settings' && page !== 'tasks' && page !== '' && (
        <div className="flex flex-col items-start my-1 sm:my-2">
          <span className="text-base sm:text-md font-semibold text-title">
            {getHeaderTitle()}
          </span>
          <span className="text-muted text-xs sm:text-sm">
            {getHeaderDescription()}
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
