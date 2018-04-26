export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

//toggleSHowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = ()=> {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};


export var addTodo = (text)=> {
    return {
        type: 'ADD_TODO',
        text
    };
};

//toggleTodo(id) TOGGLE_TODO

export var addTodos = (todos)=> {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var toggleTodo = (id)=> {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};