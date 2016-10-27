//
// Este componente irá renderizar uma foto utilizando Props
//

var React, Photo;

React = require('react');

Photo = React.createClass({
    render: function() {
        return (
                <div className='thumb'>
                    <img src={this.props.imageUrl} />
                    <span>{this.props.caption}</span>
                </div>
            )
    }
});

module.exports = Photo;