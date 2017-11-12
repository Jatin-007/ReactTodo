var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var TodoList = require ('TodoList');
var Todo = require ('Todo');

describe('TodoList', ()=> {
    it('should exist', ()=> {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each component', ()=> {
        var todos = [
            {
                id: 1,
                text: 'Do Something'
            },
            {
                id: 2,
                text: 'Check Mail'
            }
        ];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo) // is gonna let us check how many rendered components are found under a particular component

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', ()=> {
        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });

});