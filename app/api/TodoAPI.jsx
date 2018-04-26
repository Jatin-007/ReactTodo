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
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
            
        // filter by showCompleted
        filteredTodos = filteredTodos.filter ((todo) => {
            return !todo.completed || showCompleted; // ************ the TodoList will display the list of the list which are not completed and also if showCOmpleted becomes true, it will display each of them .. 
        });
        // filter is a built in method that helps you filter things based on existing method
        // filter method requires callback for every item in array... 

        filteredTodos = filteredTodos.filter((todo) => {
            debugger;
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
          });
      

        // filter by SearchText
        // Sort todos with non completed first
        filteredTodos.sort ((a, b) => {
            if(!a. completed && b.completed) {
                return -1;
            }
            else if (a.completed && !b.completed){
                return 1;
            }
            else {
                return 0;
            }
        });

        return filteredTodos;
    }
};