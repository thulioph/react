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
        var buttonClass, thumbClass;

        buttonClass = this.state.liked ? 'active' : 'inactive';
        thumbClass = this.state.liked ? 'thumb active' : 'thumb inactive';

        return (
                <div className={thumbClass}>
                    <img src={this.props.src} />

                    <div className="bar">
                        <span>{this.props.caption}</span>

                        <button
                            onClick={this.toggleLiked}
                            className={buttonClass}>
                            ♥
                        </button>
                    </div>
                </div>
            )
    }
});

module.exports = LikePhoto;