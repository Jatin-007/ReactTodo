var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require ('react-redux'); // Provider helps the parent or any of the children to get the access to the certain entities... such as store described below in the render method
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require ('TodoApp');

var actions = require ('actions');
var store = require ('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState()); // to provide information inside the console tab under developer tools
});

store.dispatch (actions.addTodo('Clean the Yard'));
store.dispatch (actions.setSearchText('Yard'));
store.dispatch (actions.toggleShowCompleted());

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

