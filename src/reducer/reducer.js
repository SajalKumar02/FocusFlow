export const initialState = {
    todos: [],
    filter: "all",
    sort: "all",
    status: "all"
};

export const initialiser = (initialValue = initialState) => JSON.parse(localStorage.getItem("todoState")) || initialValue;

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_TODOS":
            const localTodos = JSON.parse(localStorage.getItem("todoState")) || initialState;
            state.todos = localTodos.todos || [];
            return state;
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        content: action.payload.content,
                        completed: false
                    }
                ]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos.filter((item) => item.id !== action.payload.id)
                ]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: [
                    ...state.todos.map((item) => {
                        if (item.id === action.payload.id) {
                            return { ...item, completed: !item.completed };
                        }
                        return item;
                    })
                ]
            }
        case "FILTER_TODO_STATUS":
            return {
                ...state,
                status: action.payload.status
            }
        case "FILTER_TODO":
            return {
                ...state,
                filter: action.payload.filter
            }
        case "SORT_TODO":
            return {
                ...state,
                sort: action.payload.sort
            }
        default:
            break;
    }
}