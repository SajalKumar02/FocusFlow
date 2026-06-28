export const LOCAL_STORAGE_KEY = 'lists';

import { Folder, Calendar, AlertCircle } from 'lucide-react';

export const defaultListNames = [
  {
    id: 'allTasks',
    title: 'All Tasks',
    value: 'allTasks',
    icon: Folder,
    style:
      'text-cyan-700 hover:text-cyan-900 hover:bg-cyan-100/60 hover:outline-1 hover:outline-cyan-900 hover:shadow-md transition-all duration-150',
  },
  {
    id: 'today',
    title: 'Today',
    value: 'today',
    icon: Calendar,
    style:
      'text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100/60 hover:outline-1 hover:outline-emerald-900 hover:shadow-md transition-all duration-150',
  },
  {
    id: 'overdue',
    title: 'Overdue',
    value: 'overdue',
    icon: AlertCircle,
    style:
      'text-rose-700 hover:text-rose-900 hover:bg-rose-100/60 hover:outline-1 hover:outline-rose-900 hover:shadow-md transition-all duration-150',
  },
];

export const initialLists = [
  {
    id: 'personal',
    title: 'Personal',
    value: 'personal',
  },
  {
    id: 'work',
    title: 'Work',
    value: 'work',
  },
];
