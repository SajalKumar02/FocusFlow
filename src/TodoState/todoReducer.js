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
    // Create a list matching the title against the inputText (case-insensitive), returns the matched list or null
    case "FIND_LIST_BY_TITLE": {
      const { inputText } = action.payload;
      const matchedList = state.find(
        (list) =>
          list.title.toLowerCase() === inputText.toLowerCase(),
      );
      return matchedList || null;
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
    default:
      return state;
  }
}

export default todoReducer;
