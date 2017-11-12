var React = require ('react');

var Search = React.createClass ({

    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value; // grabbing out the value from the form below

        this.props.onSearch(showCompleted, searchText);
    },

    render: function () {
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search Todo" onChange={this.handleSearch}/>
                </div>

                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show Completed Todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = Search;