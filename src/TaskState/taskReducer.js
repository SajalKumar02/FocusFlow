// Template reducer for tasks with subtasks structure

const initialState = [];

function taskReducer(state = initialState, action) {
  switch (action.type) {
    // Add a new task
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
          subtasks: [],
        },
      ];
    // Remove a task
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    // Toggle task complete
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task,
      );
    // Edit task
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates }
          : task,
      );
    // ---------------------------------------------------------------------------------------------------------
    // Upcoming, today and custom list actions can be implemented here as needed.
    default:
      return state;
  }
}

export default taskReducer;
