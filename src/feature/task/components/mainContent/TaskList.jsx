import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

import { getTasksByList, getTasksByString } from '../../utils';
import { useTasks } from '../../context/useTask';
import { ChevronRight } from 'lucide-react';

const TaskList = () => {
  const { tasks, toggleTask } = useTasks();

  const { listId } = useParams();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get('task') || '';

  const filteredTasksByList = getTasksByList(tasks, listId);
  const filteredTasks = getTasksByString(filteredTasksByList, searchInput);

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks?.length === 0 ? (
        <div className="text-slate-400 text-center py-6">No tasks yet</div>
      ) : (
        filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="flex items-center px-4 py-2 bg-white border-t border-b border-slate-200 hover:bg-blue-50 transition-colors duration-150 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                toggleTask(task.id);
              }}
              className="mr-2 w-4 h-4 border border-slate-200 bg-white rounded cursor-pointer transition-colors duration-150"
            />
            <div
              className="flex w-full justify-between"
              onClick={() => navigate(`/tasks/${task.id}`)}
            >
              <span
                className={`text-slate-800 ${task.completed ? 'line-through text-slate-400' : ''}`}
              >
                {task.title}
              </span>
              <div className="flex-1" />
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
