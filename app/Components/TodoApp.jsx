var React = require ('react');
var TodoList = require ('TodoList');
var AddTodo = require ('AddTodo');
var TodoSearch = require ('TodoSearch');
var AddTodo = require ('AddTodo');

var TodoApp = React.createClass ({
    getInitialState: function () {
        return {
            showCompleted: false,
            SearchText: '',
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

    handleSearch : function (showCompleted, SearchText) {
        this.setState({
            showCompleted: showCompleted,
            SearchText: SearchText.toLowerCase()
        });
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div className="row">
                <div className="columns medium-5 large-5 small-centered">
                    <h2 className="application-heading">Todo Application</h2>
                    <TodoSearch onSearch = {this.handleSearch}/>
                    <TodoList todos = {todos}/>
                    <AddTodo onAddTodo = {this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;