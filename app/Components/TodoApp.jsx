var React = require ('react');
var uuid = require ('node-uuid'); // provides a unique ID for every text we enter in the todoApp..
var $ = require ('jquery');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
var TodoSearch = require ('TodoSearch');
var TodoAPI = require ('TodoAPI');
var moment = require ('moment'); // provides time to be displayed to show CreatedAt function 

var TodoApp = React.createClass ({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
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
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        });
    },
    handleSearch : function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
            <div>
                <h1 className="page-title">Todo Application</h1>
                
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container ">
                            <TodoSearch onSearch = {this.handleSearch}/>
                            <TodoList/>
                            <AddTodo onAddTodo = {this.handleAddTodo}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = TodoApp;