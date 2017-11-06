var React = require ('react');
var TodoList = require ('TodoList');
var AddTodo = require ('AddTodo');
var Search = require ('Search');
var AddTodo = require ('AddTodo');

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

    handleAddTodo: function (text) {
        alert (text); 
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div className="row">
                <div className="columns medium-5 large-5 small-centered">
                    <h2 className="application-heading">Todo Application</h2>
                    <Search/>
                    <TodoList todos = {todos}/>
                    <AddTodo onAddTodo = {this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;