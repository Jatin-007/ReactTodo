var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require ('react-redux'); // Provider helps the parent or any of the children to get the access to the certain entities... such as store described below in the render method
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require ('TodoApp');

var actions = require ('actions');
var store = require ('configureStore').configure();
var TodoAPI = require ('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New State', state); // to provide information inside the console tab under developer tools

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos(); // might or might not have todo items
store.dispatch(actions.addTodo(initialTodos));

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require ('style!css!sass!applicationStyles')

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
  document.getElementById('app')
);

