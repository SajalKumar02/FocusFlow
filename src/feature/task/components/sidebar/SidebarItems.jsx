import React from 'react';
import { useNavigate, useParams } from 'react-router';

import { ListIcon } from 'lucide-react';
import { getTaskCountForList } from '@/feature/task/utils';
import { useTasks } from '@/feature/task/context/useTask';

const GENERAL_STYLE =
  'text-slate-700 hover:text-slate-900 hover:bg-slate-100/60 hover:outline-1 hover:outline-slate-900 hover:shadow-md transition-all duration-150';

const SidebarItems = ({ icon, title, value, style, custom = false }) => {
  const { tasks } = useTasks();
  const { listId } = useParams();
  const navigate = useNavigate();

  const IconComponent = icon || ListIcon;

  return (
    <button
      type="button"
      className={`flex w-full items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-colors
        ${style && style.length > 0 ? style : GENERAL_STYLE}
        ${listId === value ? `outline-1 bg-slate-100/50` : ''}
   
      `}
      onClick={() => navigate(`/lists/${value}`)}
    >
      <IconComponent size={20} />
      <span className="text-sm font-medium">{title}</span>
      {custom && (
        <span className="ml-auto items-end">
          {getTaskCountForList(value, tasks)}
        </span>
      )}
    </button>
  );
};

export default SidebarItems;
