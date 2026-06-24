export const LOCAL_STORAGE_KEY = 'lists';

import { Folder, Calendar, AlertCircle } from 'lucide-react';

export const defaultListNames = [
  { id: 0, title: 'All Tasks', value: 'allTasks', icon: Folder },
  { id: 1, title: 'Today', value: 'today', icon: Calendar },
  { id: 2, title: 'Overdue', value: 'overdue', icon: AlertCircle },
];

export const initialLists = [
  {
    id: 'personal',
    title: 'Personal',
  },
  {
    id: 'work',
    title: 'Work',
  },
];
