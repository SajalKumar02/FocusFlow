import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

import { ChevronRight } from 'lucide-react';

import { useTasks } from '../../context/useTask';
import { useToast } from '../../../toast';

import { getTasksByList, getTasksByString } from '../../utils';

const TaskList = () => {
  const { tasks, toggleTask } = useTasks();
  const { showToast } = useToast();

  const { listId } = useParams();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get('task') || '';

  const filteredTasksByList = getTasksByList(tasks, listId);
  const filteredTasks = getTasksByString(filteredTasksByList, searchInput);

  return (
    <div className="flex flex-col gap-2">
      {filteredTasks?.length === 0 ? (
        <div className="text-muted text-center py-6 italic">No tasks yet</div>
      ) : (
        filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="
              flex items-center 
              px-4 py-2
              bg-surface
              border-t border-b border-app
              hover:bg-surface-2 transition-colors duration-150 
              cursor-pointer
              rounded-lg
            "
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                toggleTask(task.id);
                showToast(
                  task.completed ? 'info' : 'success',
                  task.completed
                    ? 'Task marked as incomplete'
                    : 'Task Completed',
                );
              }}
              className="
                mr-2 w-4 h-4
                border border-app 
                bg-surface 
                rounded 
                cursor-pointer 
                transition-colors duration-150
                align-middle
              "
            />
            <div
              className="flex w-full justify-between items-center"
              onClick={() => navigate(`/tasks/${task.id}`)}
            >
              <span
                className={
                  `text-title text-base font-semibold transition ` +
                  (task.completed ? 'line-through text-muted' : '')
                }
              >
                {task.title}
              </span>
              <div className="flex-1" />
              <ChevronRight className="w-5 h-5 text-muted" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
