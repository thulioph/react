//
// Este componente irá renderizar uma espécie de galeria de fotos
//
// no método render é feita a requisição dos dados
// e utilizando o componente LikePhotoComponent são adicionada
// as informações para cada foto.
//

var React, PhotoGallery, LikePhotoComponent;

React = require('react');
LikePhotoComponent = require('./LikePhoto.js');

PhotoGallery = React.createClass({
    getInitialState: function() {
        return {
            key: 0,
            id: 0,
            url: '',
            caption: ''
        };
    },

    updateUser: function(obj) {
        console.warn('OBJ', obj);

        obj.map(function(item) {
            this.setState({
                id: item.id,
                key: item.id,
                url: item.thumbnailUrl,
                caption: item.title
            });
        }.bind(this));
    },

    render: function() {
        return (
            <div className="container">
                <LikePhotoComponent
                    updateUser={this.updateUser}
                    id={this.state.id}
                    src={this.state.url}
                    caption={this.state.caption}
                />
            </div>
        );
    }
});

module.exports = PhotoGallery;