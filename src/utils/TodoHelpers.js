export const filterTodos = (todos, filter) => {
    if (filter === "all") return todos;
    else if (filter === "today") {
        const today = new Date();
        return todos.filter((item) => {
            const itemDate = new Date(item.id);
            return (
                today.getFullYear() === itemDate.getFullYear()
                &&
                today.getMonth() === itemDate.getMonth()
                &&
                today.getDate() === itemDate.getDate()
            )
        })
    }
    else if (filter === "yesterday") {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return todos.filter((item) => {
            const itemDate = new Date(item.id);
            return (
                yesterday.getFullYear() === itemDate.getFullYear()
                &&
                yesterday.getMonth() === itemDate.getMonth()
                &&
                yesterday.getDate() === itemDate.getDate()
            )
        })
    }
}

export const filterStatusTodos = (todos, status) => {

    return todos.filter(todo => {
        if (status === 'completed') {
            return todo.completed;
        } else if (status === 'not-completed') {
            return !todo.completed;
        }
        return true;
    });
}

export const sortTodos = (todos, filter) => {
    return todos.sort((a, b) => {
        if (filter === "latest") {
            return new Date(b.id) - new Date(a.id);
        } else if (filter === "oldest") {
            return new Date(a.id) - new Date(b.id);
        } else if (filter === "a-z") {
            return a.title.localeCompare(b.title);
        } else if (filter === "z-a") {
            return b.title.localeCompare(a.title);
        }
    })
}
