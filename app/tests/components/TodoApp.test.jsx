var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var TodoApp = require ('TodoApp');

describe('TodoApp', ()=> {
    it('should exist', ()=> {
        expect(TodoApp).toExist();
    });

    it('should ad todo to the todos state on handleAddTodo', ()=> {
        var todoText = 'Test Text .. haha';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        expect(todoApp.state.todos[0].createdAt).toBeA('number');

    });

    it('should toggle completed value when handle toggle called', ()=> {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        // check that todos first item has completed value of false
        todoApp.handleToggle(11);
        // call hangleToggle with 11
        expect(todoApp.state.todos[0].completed).toBe(true);
        // verify that value changed

        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    
    it('should toggle todo from completed to incomplete', ()=> {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);
        // check that todos first item has completed value of false
        todoApp.handleToggle(11);
        // call hangleToggle with 11
        expect(todoApp.state.todos[0].completed).toBe(false);
        // verify that value changed
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});