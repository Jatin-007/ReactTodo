var React = require ('react');
var TodoList = require ('TodoList');
var AddTodo = require ('AddTodo');
var TodoSearch = require ('TodoSearch');
var AddTodo = require ('AddTodo');
var uuid = require ('node-uuid');

var TodoApp = React.createClass ({
    getInitialState: function () {
        return {
            showCompleted: false,
            SearchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the room'
                },
                {
                    id: uuid(),
                    text: 'Work with React'
                },
                {
                    id: uuid(),
                    text: 'Work with Redux as well'
                },
                
            ]
        };
    },

    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
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