//
// Este componente irá renderizar uma foto com um botão de like
// e uma legenda
//

var React, LikePhoto, CatsApi;

React = require('react');
CatsApi = require('../services/CatsApi.js');

LikePhoto = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        };
    },

    toggleLiked: function() {
        this.setState({
            liked: !this.state.liked
        });

        console.warn('Curti a foto com o ID:', this.props.id);
    },

    handleSubmit: function() {
        CatsApi.get().then(function(result) {
            this.props.updateUser(result.data);
        }.bind(this));
    },

    render: function() {
        var buttonClass;

        buttonClass = this.state.liked ? 'active' : 'inactive';

        return (

                <div className="thumb">
                    <button
                        onClick={this.handleSubmit}>

                        get cats
                    </button>

                    <img
                        src={this.props.src}
                    />

                    <div className="bar">
                        <button
                            onClick={this.toggleLiked}
                            className={buttonClass}>
                            ♥
                        </button>

                        <span>{this.props.caption}</span>
                    </div>
                </div>
            )
    }
});

module.exports = LikePhoto;