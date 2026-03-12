// Template reducer for tasks with subtasks structure

const initialState = [];

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      console.log(action.payload);

      return [
        ...state,
        {
          id: Date.now(), // simple unique id
          title: action.payload.title,
          completed: false,
          subtasks: [],
          list: action.payload.listid || 0,
        },
      ];
    // Remove a task
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);

    // Toggle the completion status of the task
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task,
      );

    // Edit an existing task (applies 'updates' from action.payload)
    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates }
          : task,
      );

    default:
      return state;
  }
}

export default taskReducer;
