import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import { Sidebar } from '../feature/task';
import Header from '../shared/Header';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowSidebar(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex flex-row bg-slate-50 overflow-hidden">
      <aside
        className={`
          w-64 bg-white h-full border-r border-slate-200 shadow-lg transform transition-transform duration-200 ease-in-out
          fixed z-30 inset-y-0 left-0
          ${showSidebar ? 'translate-x-0 md:relative md:z-0' : '-translate-x-full'}
        `}
      >
        <Sidebar
          showSidebar={showSidebar}
          handleSidebarToggle={handleSidebarToggle}
        />
      </aside>
      <main className="flex-1 grid grid-rows-[auto_1fr] transition-all duration-200 overflow-y-auto">
        <Header handleSidebarToggle={handleSidebarToggle} />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
