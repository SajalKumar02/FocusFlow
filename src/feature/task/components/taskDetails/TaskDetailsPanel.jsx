import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useTasks } from '@/feature/task/context/useTask';
import { useToast } from '@/feature/toast/context/useToast';

import {
  getPercentageCompleteCount,
  getTaskByTaskId,
} from '@/feature/task/utils';

import { Save, Trash2, X } from 'lucide-react';

/**
 * Task Details Panel
 * UI built to spec per design.md:
 * - Outer card has elevated surface, border, and rounded corners
 * - Section headers use text-title and font-semibold
 * - Action buttons at bottom, blue primary, red destructive
 * - Subtask area features progress bar matching brand, visual feedback on completion states
 * - Inputs & selects use spacing, font, border radii, and colors per design
 * - Light/dark tokens & layout grid per design.md
 */

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
    <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-6 md:gap-8">
      {/* Left: Core Task Info */}
      <div className="bg-surface grid grid-rows-[auto_auto_auto] rounded-xl shadow-sm overflow-hidden border border-app min-h-[520px]">
        {/* Header */}
        <div className="px-6 py-5 flex items-center border-b border-app gap-2 bg-surface rounded-t-xl">
          <input
            type="checkbox"
            checked={task.completed}
            name="completed"
            onChange={handleEdit}
            className="w-5 h-5 accent-blue-600 mr-2"
            aria-label="Mark task complete"
          />
          <span
            className="font-bold text-2xl text-title truncate"
            data-testid="task-title"
          >
            {task.title}
          </span>
        </div>
        {/* Description */}
        <div className="px-6 py-5 border-b border-app bg-surface">
          <label
            className="text-sm font-semibold text-muted mb-2 block"
            htmlFor="task-description-textarea"
          >
            Description
          </label>
          <textarea
            id="task-description-textarea"
            className="w-full p-3 border border-app rounded-lg bg-surface text-title focus:outline-none focus:border-blue-400 text-base resize-none transition"
            rows={3}
            value={task.description || ''}
            name="description"
            onChange={handleEdit}
            placeholder="Add a more detailed description..."
            data-testid="task-description"
          />
        </div>
        {/* Subtasks */}
        <div className="px-6 py-5 bg-surface rounded-b-xl flex flex-col gap-3">
          {/* Header */}
          <div className="flex flex-row justify-between items-center mb-2">
            <span className="text-lg font-semibold text-title block">
              Subtasks{' '}
              <span className="text-muted font-normal">
                ({Array.isArray(task.subtasks) ? task.subtasks.length : 0})
              </span>
            </span>
          </div>
          {/* New Subtask Input */}
          <div className="flex flex-row gap-2 items-center mb-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-app bg-surface rounded-lg text-sm text-title focus:outline-none focus:border-blue-400 transition"
              placeholder="New subtask..."
              value={newSubTaskTitle}
              onChange={(e) => setNewSubTaskTitle(e.target.value)}
              onKeyDown={handleNewSubTaskInputKeyDown}
              aria-label="Add new subtask"
            />
            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg shadow-sm transition hover:bg-blue-700 disabled:opacity-50"
              onClick={handleAddSubTask}
              disabled={!newSubTaskTitle.trim()}
              aria-label="Add subtask"
            >
              Add
            </button>
          </div>
          {/* Subtasks Progress */}
          {Array.isArray(task.subtasks) && task.subtasks.length > 0 ? (
            <>
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-xs font-medium text-muted select-none">
                  {subTasksCompletePercentage}% complete
                </span>
                <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${subTasksCompletePercentage}%`,
                      background:
                        'linear-gradient(90deg, #2869f6 0%, #679ef7 100%)',
                      transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)',
                    }}
                    aria-valuenow={subTasksCompletePercentage}
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-label="Subtasks Completion"
                    role="progressbar"
                  />
                </div>
              </div>
              {/* Subtasks List */}
              <div className="flex flex-col gap-2" data-testid="subtasks-list">
                {task.subtasks.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center group p-2 rounded hover:bg-surface-2 transition mb-1"
                  >
                    <input
                      type="checkbox"
                      name="completed"
                      checked={t.completed}
                      onChange={() => handleToggleCompleteSubTask(t.id)}
                      className="w-4 h-4 accent-blue-600"
                      aria-label={
                        t.completed
                          ? 'Mark subtask incomplete'
                          : 'Mark subtask complete'
                      }
                    />
                    <span
                      className={
                        'ml-3 text-sm ' +
                        (t.completed ? 'line-through text-muted' : 'text-title')
                      }
                      data-testid={`subtask-title-${t.id}`}
                    >
                      {t.title}
                    </span>
                    <button
                      type="button"
                      className="ml-auto text-red-500 hover:text-red-700 p-1 rounded transition-opacity opacity-80 hover:opacity-100"
                      onClick={() => handleDeleteSubTask(t.id)}
                      aria-label="Delete subtask"
                      tabIndex={0}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div
              className="text-muted text-center italic pt-2 pb-1"
              data-testid="no-subtasks"
            >
              No subtasks available
            </div>
          )}
        </div>
      </div>
      {/* Right: List & Date, Buttons */}
      <div className="flex flex-col gap-6 justify-between">
        {/* Meta Card */}
        <div className="bg-surface rounded-xl border border-app px-6 py-5 shadow-sm">
          {/* List */}
          <div className="flex flex-col gap-2 mb-6">
            <label
              htmlFor="task-list-select"
              className="text-sm font-semibold text-muted mb-1"
            >
              List
            </label>
            <div className="relative">
              <select
                id="task-list-select"
                name="list"
                className="block w-full px-3 py-2 rounded-lg border border-app bg-surface text-base font-semibold text-title focus:outline-none focus:border-blue-400 transition appearance-none"
                onChange={handleEdit}
                value={task.list}
                data-testid="task-list-select"
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
              {/* Down arrow for select, per design.md */}
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 10l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Due Date */}
          <div className="flex flex-col gap-2">
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
              className="w-full px-3 py-2 rounded-lg border border-app bg-surface text-base font-semibold text-title focus:outline-none focus:border-blue-400 transition"
              value={
                task.dueDate
                  ? new Date(task.dueDate).toISOString().split('T')[0]
                  : ''
              }
              onChange={handleEdit}
              data-testid="task-due-date"
            />
          </div>
        </div>
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-6 mt-2">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-300 text-red-600 font-semibold bg-surface rounded-lg transition hover:border-red-400 hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            onClick={handleDeleteTask}
            type="button"
            aria-label="Delete task"
            data-testid="delete-task"
          >
            <Trash2 className="w-5 h-5" />
            <span>Delete</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            onClick={handleEditTask}
            type="button"
            aria-label="Save task"
            data-testid="save-task"
          >
            <Save className="w-5 h-5" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPanel;
