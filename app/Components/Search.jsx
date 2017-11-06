var React = require ('react');

var Search = React.createClass ({
    render: function () {
        return (
            <div>
                <input type="text" placeholder="Search Todo"/>
                <button className="button expanded primary">Search</button>

            </div>
        )
    }
});

module.exports = Search;