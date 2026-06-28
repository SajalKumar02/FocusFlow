import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useTasks } from '@/feature/task/context/useTask';
import { useToast } from '@/feature/toast/context/useToast';

import {
  getPercentageCompleteCount,
  getTaskByTaskId,
} from '@/feature/task/utils';

import { Save, Trash2, X } from 'lucide-react';

const TaskDetailsPanel = () => {
  const { taskId } = useParams();
  const { tasks, lists, editTask, removeTask } = useTasks();
  const { showToast } = useToast();

  const [task, setTask] = useState(() => getTaskByTaskId(tasks, taskId)[0]);
  const [newSubTaskTitle, setNewSubTaskTitle] = useState('');

  const subTasksCompletePercentage = getPercentageCompleteCount(task);

  const navigate = useNavigate();

  const handleDeleteTask = () => {
    removeTask(task.id);
    showToast('success', 'Task deleted');
    navigate('/');
  };

  const handleEditTask = () => {
    editTask(task.id, task);
    showToast('success', 'Task updated');
    navigate('/');
  };

  const handleEdit = (e) => {
    const { name, type, checked, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddSubTask = () => {
    const trimmedTitle = newSubTaskTitle.trim();
    if (!trimmedTitle) return;
    setTask((prev) => ({
      ...prev,
      subtasks: [
        ...(Array.isArray(prev.subtasks) ? prev.subtasks : []),
        {
          id: Date.now(),
          title: trimmedTitle,
          completed: false,
        },
      ],
    }));
    showToast('success', 'Subtask Added');
    setNewSubTaskTitle('');
  };

  const handleNewSubTaskInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSubTask();
    }
  };

  const handleToggleCompleteSubTask = (id) => {
    setTask((prev) => ({
      ...prev,
      subtasks: prev.subtasks.map((sub) =>
        sub.id === id ? { ...sub, completed: !sub.completed } : sub,
      ),
    }));
  };

  const handleDeleteSubTask = (id) => {
    setTask((prev) => ({
      ...prev,
      subtasks: prev.subtasks.filter((sub) => sub.id !== id),
    }));
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-4">
      <div className="bg-surface grid grid-rows-[auto_auto_auto] rounded-lg">
        {/* Header */}
        <div className="rounded-t-lg taskdetailspanel-component">
          <input
            type="checkbox"
            checked={task.completed}
            name="completed"
            onChange={handleEdit}
            className="mr-2 w-4 h-4 align-middle"
          />
          <span className="font-bold text-2xl text-title align-middle">
            {task.title}
          </span>
        </div>
        {/* Description */}
        <div className="taskdetailspanel-component">
          <label
            className="text-sm font-semibold text-muted mb-1 block"
            htmlFor="task-description-textarea"
          >
            Description
          </label>
          <textarea
            id="task-description-textarea"
            className="w-full p-3 border border-app rounded-lg bg-surface text-title focus:outline-none focus:border-slate-400 text-base"
            rows={3}
            value={task.description || ''}
            name="description"
            onChange={handleEdit}
          />
        </div>
        {/* Subtasks */}
        <div className="rounded-b-lg taskdetailspanel-component flex flex-col gap-2">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <span className="text-lg font-semibold block text-title">
              Subtasks
              <span className="text-muted">
                ({Array.isArray(task.subtasks) ? task.subtasks.length : 0})
              </span>
            </span>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="text"
              className="flex-1 px-2 py-1 border border-app rounded text-sm text-title bg-surface"
              placeholder="New subtask..."
              value={newSubTaskTitle}
              onChange={(e) => setNewSubTaskTitle(e.target.value)}
              onKeyDown={handleNewSubTaskInputKeyDown}
            />
            <button
              type="button"
              className="text-blue-600 hover:text-blue-800 text-sm px-3 py-1 border border-blue-200 rounded transition bg-surface"
              onClick={handleAddSubTask}
              disabled={!newSubTaskTitle.trim()}
              aria-label="Add subtask"
            >
              Add
            </button>
          </div>

          {Array.isArray(task.subtasks) && task.subtasks.length > 0 ? (
            <>
              {/* Progress Bar */}
              <div className="flex flex-col gap-2 mb-4">
                <span className="text-sm font-medium text-body">
                  {subTasksCompletePercentage}% complete
                </span>
                <div className="w-full h-2 bg-surface-2 rounded overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{
                      width: `${subTasksCompletePercentage}%`,
                    }}
                    aria-valuenow={subTasksCompletePercentage}
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-label="Subtasks Completion"
                    role="progressbar"
                  />
                </div>
              </div>

              {/* Subtask Lists */}
              <div>
                {Array.isArray(task.subtasks) &&
                  task.subtasks.length > 0 &&
                  task.subtasks.map((t) => (
                    <div key={t.id} className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        name="completed"
                        checked={t.completed}
                        onChange={() => handleToggleCompleteSubTask(t.id)}
                      />

                      <span
                        className={
                          t.completed ? 'line-through text-muted' : 'text-title'
                        }
                      >
                        {t.title}
                      </span>
                      <button
                        type="button"
                        className="ml-auto text-red-500 hover:text-red-700"
                        onClick={() => handleDeleteSubTask(t.id)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            <div className="text-muted italic text-center">
              No subtasks available
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-surface rounded-lg taskdetailspanel-component">
          {/* List */}
          <div className="flex flex-col gap-1 mb-4">
            <label
              htmlFor="task-list-select"
              className="text-sm font-semibold text-muted mb-1"
            >
              List
            </label>
            <div className="flex items-center group">
              <select
                id="task-list-select"
                name="list"
                className="
                  block w-full rounded-md border border-app bg-surface py-2 pl-3 pr-8 shadow-sm
                  text-base font-semibold text-title focus:border-blue-400 focus:ring focus:ring-blue-100 focus:ring-opacity-50
                  appearance-none cursor-pointer transition
                "
                onChange={handleEdit}
                value={task.list}
              >
                <option value="" className="text-title font-semibold">
                  Select List
                </option>
                {lists.map((list) => (
                  <option
                    key={list.id}
                    value={list.value}
                    className="text-title font-semibold"
                  >
                    {list.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-1 mb-4">
            <label
              htmlFor="task-due-date"
              className="text-sm font-semibold text-muted mb-1"
            >
              Due Date
            </label>
            <input
              type="date"
              id="task-due-date"
              name="dueDate"
              className="w-full rounded-md border border-app bg-surface py-2 px-3 shadow-sm text-base font-semibold text-title focus:border-blue-400 focus:ring focus:ring-blue-100 focus:ring-opacity-50 transition"
              value={
                task.dueDate
                  ? new Date(task.dueDate).toISOString().split('T')[0]
                  : ''
              }
              onChange={handleEdit}
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-2 gap-6 px-4">
          <button
            className="flex items-center gap-2 px-6 py-3 border-2 border-red-300 text-red-600 font-semibold bg-surface rounded-lg transition hover:border-red-400 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            onClick={handleDeleteTask}
            type="button"
          >
            <Trash2 className="w-5 h-5" />
            <span>Delete Task</span>
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            onClick={handleEditTask}
            type="button"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPanel;
