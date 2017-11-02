var React = require ('react');
var Todo = require ('Todo');

var TodoList = React.createClass ({
    render: function () {
        var {todos} = this.props;

        var renderTodos = ()=> {
            return todos.map((todo) => { // Todos.map takes a function and calls every element in the funciton and iterates
                return (
                    <Todo key={todo.id} {...todo}/> // id is specified in hardcoded TodoApp.jsx file inside todos array !! ///// Key specifies the unique id in the element
                )
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;