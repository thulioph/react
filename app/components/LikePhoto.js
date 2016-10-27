//
// Este componente irá renderizar uma foto com um botão de like
// e uma legenda
//

var React, LikePhoto;

React = require('react');

LikePhoto = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        }
    },

    toggleLiked: function() {
        this.setState({
            liked: !this.state.liked
        });

        console.warn('Curti a foto com o ID:', this.props.id);
    },

    render: function() {
        var buttonClass;

        buttonClass = this.state.liked ? 'active' : 'inactive';

        return (
                <div className="thumb">
                    <img src={this.props.src} />

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