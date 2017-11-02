var React = require ('react');
var TodoList = require ('TodoList');

var TodoApp = React.createClass ({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the room'
                },
                {
                    id: 3,
                    text: 'Work with React'
                },
                {
                    id: 4,
                    text: 'Work with Redux as well'
                },
                
            ]
        };
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos = {todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;