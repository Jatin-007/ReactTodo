var $ = require ('jquery');

module.exports = {
    // for storing a todo function
    setTodos: function (todos) {
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    // for accessing the todos
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        }
        catch (e) {
            
        }

        return $.isArray(todos) ? todos : [];
        // the above written statement does the same as below if-else block
        // if($.isArray(todos)) {
        //     return todos;
        // }
        // else{
        //     return [];
        // }
    }
};