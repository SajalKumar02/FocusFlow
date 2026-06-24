import React from 'react';

import { User, X } from 'lucide-react';

import { defaultListNames } from '../../constants/initialLists';
import SidebarItems from './SidebarItems.jsx';

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      {/* CLOSE BUTTON */}
      <div className="">
        <button className="cursor-pointer">
          <X className="text-slate-400 hover:text-slate-600 transition-colors" />
        </button>
      </div>
      {/* USER Details */}
      <div className="flex flex-row items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <span className="text-slate-500 font-semibold">
            <User />
          </span>
        </div>
        <div>
          <p className="font-semibold text-slate-800">MyTasks</p>
          <p className="text-slate-400 text-sm">Stay productive!</p>
        </div>
      </div>
      <div className="border-b border-slate-200" />

      {/* QUICK VIEW */}
      <div>
        <div className="">
          <span className="text-xs font-bold text-slate-500 tracking-wider">
            QUICK VIEWS
          </span>
        </div>
        <div>
          {defaultListNames.map((list, index) => (
            <SidebarItems
              key={index}
              icon={list.icon}
              title={list.title}
              value={list.value}
            />
          ))}
        </div>
      </div>
      <div className="border-b border-slate-200" />

      {/* LISTS */}
      <div className="border-b border-slate-200" />

      {/* OTHERS */}
    </div>
  );
};

export default Sidebar;
