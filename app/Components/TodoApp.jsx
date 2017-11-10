var React = require ('react');
var uuid = require ('node-uuid'); // provides a unique ID for every text we enter in the todoApp..
var $ = require ('jquery');

var TodoList = require ('TodoList');
var AddTodo = require ('AddTodo');
var TodoSearch = require ('TodoSearch');
var TodoAPI = require ('TodoAPI');

var TodoApp = React.createClass ({
    getInitialState: function () {
        return {
            showCompleted: false,
            SearchText: '',
            todos: TodoAPI.getTodos()
                 // this call will be used to inherit all the stored todos in the TodoAPI file
        };
    },

    componentDidUpdate: function (){
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },

    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map((todo)=> { // iterates from each and every todo id to match the one that is toggled
            if(todo.id === id){ 
                todo.completed = !todo.completed; //if todo.completed was set equal to false, the next operation helps to change the value to its opposite... 
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    },

    handleSearch : function (showCompleted, SearchText) {
        this.setState({
            showCompleted: showCompleted,
            SearchText: SearchText.toLowerCase()
        });
    },

    render: function () {
        var {todos, showCompleted, SearchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, SearchText);

        return (
            <div className="row">
                <div className="columns medium-5 large-5 small-centered">
                    <h2 className="application-heading">Todo Application</h2>
                    <TodoSearch onSearch = {this.handleSearch}/>
                    <TodoList todos = {filteredTodos} onToggle = {this.handleToggle}/>
                    <AddTodo onAddTodo = {this.handleAddTodo}/>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;