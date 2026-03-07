function todoReducer(state, action) {
  switch (action.type) {
    // Get and Set Complete List Array of Objects
    case "GET_TODO": {
      const todos = localStorage.getItem("todos");
      if (todos) {
        return JSON.parse(todos);
      }
      return state;
    }
    case "SET_TODO": {
      // Set the todos in localStorage before updating state
      localStorage.setItem("todos", JSON.stringify(action.payload));
      return action.payload;
    }
    case "GET_LIST_NAMES": {
      return state.map((list) => list.title);
    }
    // CRUD on List
    case "ADD_LIST": {
      const newList = {
        id: Date.now(),
        title: action.payload.title,
        tasks: [],
      };
      return [...state, newList];
    }
    case "UPDATE_LIST": {
      const { listId, updates } = action.payload;
      return state.map((list) =>
        list.id === listId ? { ...list, ...updates } : list,
      );
    }
    case "DELETE_LIST": {
      const listId = action.payload.listId;
      return state.filter((list) => list.id !== listId);
    }
    // CRUD on Tasks
    case "ADD_TASK":
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              tasks: [
                ...list.tasks,
                {
                  id: Date.now(),
                  title: action.payload.title,
                  completed: false,
                  details: action.payload.details || "",
                  deadline: action.payload.deadline || null,
                  creation: new Date(),
                  starred: action.payload.starred || false,
                  priority: action.payload.priority || "medium",
                  subTasks: [],
                },
              ],
            }
          : list,
      );
    case "UPDATE_TASK": {
      const { listId, taskId, updates } = action.payload;
      return state.map((list) => {
        if (list.id !== listId) return list;
        return {
          ...list,
          tasks: list.tasks.map((task) =>
            task.id === taskId ? { ...task, ...updates } : task,
          ),
        };
      });
    }
    case "DELETE_TASK": {
      const { listId, taskId } = action.payload;
      return state.map((list) => {
        if (list.id !== listId) return list;
        return {
          ...list,
          tasks: list.tasks.filter((task) => task.id !== taskId),
        };
      });
    }
    // CRUD on SubTasks
    case "ADD_SUBTASK": {
      const { listId, taskId, subTask } = action.payload;
      return state.map((list) => {
        if (list.id !== listId) return list;
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id !== taskId) return task;
            return {
              ...task,
              subTasks: [
                ...task.subTasks,
                {
                  id: Date.now(),
                  title: subTask.title,
                  completed: false,
                },
              ],
            };
          }),
        };
      });
    }
    case "UPDATE_SUBTASK": {
      const { listId, taskId, subTaskId, updates } = action.payload;
      return state.map((list) => {
        if (list.id !== listId) return list;
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id !== taskId) return task;
            return {
              ...task,
              subTasks: task.subTasks.map((subTask) =>
                subTask.id === subTaskId
                  ? { ...subTask, ...updates }
                  : subTask,
              ),
            };
          }),
        };
      });
    }
    case "DELETE_SUBTASK": {
      const { listId, taskId, subTaskId } = action.payload;
      return state.map((list) => {
        if (list.id !== listId) return list;
        return {
          ...list,
          tasks: list.tasks.map((task) => {
            if (task.id !== taskId) return task;
            return {
              ...task,
              subTasks: task.subTasks.filter(
                (subTask) => subTask.id !== subTaskId,
              ),
            };
          }),
        };
      });
    }

    // Preset lists
    case "GET_TODAYS_TASKS": {
      const today = new Date();
      // Format as YYYY-MM-DD
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const todayStr = `${yyyy}-${mm}-${dd}`;

      // Gather all tasks from all lists where deadline matches today (ignores time part)
      const todaysTasks = [];
      state.forEach((list) => {
        list.tasks.forEach((task) => {
          if (
            task.deadline &&
            typeof task.deadline === "string" &&
            task.deadline.slice(0, 10) === todayStr
          ) {
            todaysTasks.push({ ...task, listId: list.id });
          }
        });
      });
      return todaysTasks;
    }
    case "GET_UPCOMING_TASKS": {
      const now = new Date();

      // Gather all tasks with a deadline in the future (strictly after now)
      const upcomingTasks = [];
      state.forEach((list) => {
        list.tasks.forEach((task) => {
          if (task.deadline && typeof task.deadline === "string") {
            const taskDate = new Date(task.deadline);
            if (taskDate > now) {
              upcomingTasks.push({ ...task, listId: list.id });
            }
          }
        });
      });

      // Sort by soonest deadline first
      upcomingTasks.sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline),
      );

      return upcomingTasks;
    }
    // Other Lists
    case "GET_TASKS_FROM_LIST": {
      // action.payload.listId is the id of the list ('personal', 'work', or a numeric id)
      const { listId } = action.payload;
      // Support both numeric, 'personal', and 'work' keys
      const matchingList = state.find(
        (list) =>
          list.id === listId ||
          (typeof list.id === "string" &&
            (list.id === "personal" || list.id === "work") &&
            list.id === listId),
      );
      return matchingList ? matchingList.tasks : [];
    }
    default:
      return state;
  }
}

export default todoReducer;
