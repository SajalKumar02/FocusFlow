const initialState = [];

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
          subtasks: [],
          list: action.payload.listid || 0,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task,
      );
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
