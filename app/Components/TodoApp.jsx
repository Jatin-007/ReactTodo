var React = require ('react');
var uuid = require ('node-uuid'); // provides a unique ID for every text we enter in the todoApp..
var moment = require ('moment'); // provides time to be displayed to show CreatedAt function 

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass ({
    render: function () {
        return (
            <div>
                <h1 className="page-title">Todo Application</h1>
                
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container ">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;