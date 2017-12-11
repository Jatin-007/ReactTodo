var React = require ('react');
var {connect} = require ('react-redux'); // helps you to connect with the state properties
import Todo from 'Todo';

export var TodoList = React.createClass ({
    render: function () {
        var {todos} = this.props;

        var renderTodos = ()=> {
            if(todos.length === 0) {
                return (
                <p className="container__message">Nothing to do</p>
                );
            }

            return todos.map((todo) => { // Todos.map takes a function and calls every element in the funciton and iterates
                return (
                    <Todo key={todo.id} {...todo}/> // id is specified in hardcoded TodoApp.jsx file inside todos array !! ///// Key specifies the unique id in the element
                );
            });
        };
        
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return {
            todos: state.todos // we are only returning the data we need... such as todo elements and not elements like search text or toggle completed. etc
        };
    }
)(TodoList);