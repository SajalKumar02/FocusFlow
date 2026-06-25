import React from 'react';
import { Outlet } from 'react-router';

import { Sidebar } from '../feature/task';

const Layout = () => {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] bg-slate-50">
      <aside className="h-full border-r border-slate-200 shadow-lg">
        <Sidebar />
      </aside>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
