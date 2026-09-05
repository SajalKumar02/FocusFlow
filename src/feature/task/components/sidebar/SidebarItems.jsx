import React from 'react';
import { useNavigate, useParams } from 'react-router';

import { ListIcon } from 'lucide-react';
import { getTaskCountForList } from '@/feature/task/utils';
import { useTasks } from '@/feature/task/context/useTask';

const SidebarItems = ({ icon, title, value, style, custom = false }) => {
  const { tasks } = useTasks();
  const { listId } = useParams();
  const navigate = useNavigate();

  const IconComponent = icon || ListIcon;
  const isSelected = listId === value;

  return (
    <button
      type="button"
      className={[
        'flex w-full items-center gap-2 px-4 py-2.5 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700',
        style && style.length > 0
          ? style
          : 'bg-transparent text-title hover:bg-surface-2',
        isSelected ? 'bg-surface-2 outline outline-blue-500' : '',
      ].join(' ')}
      aria-current={isSelected ? 'page' : undefined}
      onClick={() => navigate(`/lists/${value}`)}
    >
      <IconComponent size={20} className="text-muted" aria-hidden="true" />
      <span className="text-sm font-medium text-title">{title}</span>
      {custom && (
        <span className="ml-auto text-xs font-semibold text-accent">
          {getTaskCountForList(value, tasks)}
        </span>
      )}
    </button>
  );
};

export default SidebarItems;
