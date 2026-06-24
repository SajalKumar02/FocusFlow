import React from 'react';

import { MainContent, Sidebar } from '../feature/task';

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr]">
      <aside className="h-full border-r border-slate-200 shadow-lg">
        <Sidebar />
      </aside>
      <div className="p-2">
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
