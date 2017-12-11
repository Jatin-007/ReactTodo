var redux = require ('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require ('reducers');

export var configure = (initialState = {})=> {
    var reducer = redux.combineReducers({ 
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    var store = redux.createStore(reducer,initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f // this command is specifically for the redux add-ons installed on chrome browser
    ));

    return store;
};



//// its just configuring the store to provide access
// right now we are using store inside app.jsx