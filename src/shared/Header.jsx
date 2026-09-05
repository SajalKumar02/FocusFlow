import React from 'react';
import { useLocation } from 'react-router';
import { Menu } from 'lucide-react';

/**
 * Header component.
 * Design spec: see design.md for sizing, spacing, layout, color, shadow, and icon use.
 * - Bar height: 56px (mobile), 64px (desktop)
 * - Bar background: bg-surface, border on bottom (border-app)
 * - Left: Burger menu (lucide-react Menu), semibold header
 * - Subtitle: muted color, smaller
 * - Icon size: 24px, padding/spacing according to design.md
 * - Content: Title + optional description
 * - Mobile spacing: horizontal pad 16px, vertical 8px, gap 16px between icon and text
 * - Desktop spacing: horizontal pad 24px, vertical 0px, same gap
 */

const HEADER_HEIGHT_MOBILE = 'h-[56px]';
const HEADER_HEIGHT_DESKTOP = 'md:h-[64px]';

const Header = ({ handleSidebarToggle }) => {
  const location = useLocation();
  const page = location.pathname.split('/')[1];

  const currentDate = () => {
    const now = new Date();
    // Example: "Tuesday, Mar 19, 2024"
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
    // Add new static page names here...
    // Default for home or unknown: Today
    return 'Today';
  };

  const getHeaderDescription = () => {
    if (page === 'settings')
      return 'Manage your preferences, lists, and account settings.';
    if (page === 'tasks') return ''; // No description for details, see design.md
    return currentDate();
  };

  const renderTextBlock = () => (
    <div className="flex flex-col items-start ml-2 sm:ml-3 gap-0.5 my-0.5 sm:my-1 min-w-0">
      <span
        className="text-[1.05rem] sm:text-md font-semibold text-title truncate"
        style={{ lineHeight: '1.3' }} // see design.md
        data-testid="header-title"
      >
        {getHeaderTitle()}
      </span>
      {/* Description may be empty (e.g. on Task Details) */}
      {getHeaderDescription() && (
        <span
          className="text-muted text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ lineHeight: '1.25', marginTop: '0.10rem' }} // design.md recommends tight vertical rhythm
          data-testid="header-desc"
        >
          {getHeaderDescription()}
        </span>
      )}
    </div>
  );

  return (
    <header
      className={`flex flex-row items-center gap-3 ${HEADER_HEIGHT_MOBILE} ${HEADER_HEIGHT_DESKTOP} px-4 sm:px-6 border-b border-app bg-surface shadow-sm`}
      // minor shadow per design.md for header elevation
      style={{ minHeight: '56px' }} // fallback for browsers not supporting h-[] syntax
      data-testid="app-header"
    >
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={handleSidebarToggle}
        className="flex items-center justify-center rounded-md p-2 hover:bg-surface-2 focus-visible:ring-2 focus-visible:ring-blue-400 transition-colors"
        tabIndex={0}
        data-testid="sidebar-toggle"
        style={{ minWidth: 40, minHeight: 40 }} // tap target 40x40 min, design.md
      >
        <Menu
          size={24}
          strokeWidth={2.2}
          className="text-muted hover:text-title transition-colors"
          aria-hidden="true"
        />
      </button>
      {renderTextBlock()}
    </header>
  );
};

export default Header;
