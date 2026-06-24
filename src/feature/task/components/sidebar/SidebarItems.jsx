import React from 'react';
import { useNavigate, useParams } from 'react-router';

const SidebarItems = ({ icon, title, value }) => {
  const Icon = icon;
  const { listId } = useParams();

  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        navigate(`/lists/${value}`);
      }}
      className={`flex items-center py-2.5 px-3 rounded-xl transition-all cursor-pointer group w-full outline-none
        hover:bg-slate-50/60 focus:ring-slate-400
        ${listId === value ? 'bg-slate-200 border border-slate-400 shadow' : 'bg-slate-50/60'}`}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center rounded-full bg-slate-200 text-slate-700">
          <Icon size={20} className="" />
        </span>
        <span
          className={`text-base ml-3 ${
            value ? 'text-slate-800 font-bold' : 'font-medium text-slate-800'
          }`}
        >
          {title}
        </span>
      </div>
      <span
        className={`bg-slate-100 text-xs font-semibold text-slate-700 px-2.5 py-0.5 rounded-full shadow ${
          listId === value ? 'border border-current' : ''
        }`}
      >
        {/* {getCountOfPresetLists(PRESET_IDS.ALL)} */}2
      </span>
    </button>
  );
};

export default SidebarItems;
