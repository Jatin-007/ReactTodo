var React = require ('react');

var AddTodo = React.createClass ({

    handleSubmit: function (e) {
        e.preventDefault(); // just to skip the refreshing of the page
        var todoText = this.refs.todoText.value;
        if(todoText.length > 0){
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        else {
            this.refs.todoText.focus();
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                <input type="text" ref="todoText" placeholder="Add Todo"/>
                <button className="button primary expanded medium-6 large-6">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;