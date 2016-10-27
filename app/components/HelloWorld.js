// Componente de Hello World

var React, HelloWorld;

// importa o react
React = require('react');

HelloWorld = React.createClass({
    render: function() {
        return <h1>React ou Angular?</h1>
    }
});

module.exports = HelloWorld;