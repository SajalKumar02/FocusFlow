// Action creators that return action objects for reducers

export const addTask = (title) => ({
  type: "ADD_TASK",
  payload: title,
});

export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: { id },
});

export const toggleTask = (id) => ({
  type: "TOGGLE_TASK",
  payload: { id },
});

export const editTask = (id, updates) => ({
  type: "EDIT_TASK",
  payload: { id, updates },
});
