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
    getDataFromServer: function() {
        var photosArray, URL;

        URL = 'http://jsonplaceholder.typicode.com/photos/';

        fetch(URL, {
          method: 'GET'
        }).then(function(response) {
            response.json().then(function(result){
                return localStorage.setItem('photos', JSON.stringify(result));
            });
        }).catch(function(err) {
          console.error(err);
        });
    },

    render: function() {
        var data, photos;

        this.getDataFromServer();

        data = JSON.parse(localStorage.getItem('photos'));

        photos = data.map(function(photo) {
            return <LikePhotoComponent
                    key={photo.id}
                    id={photo.id}
                    src={photo.url}
                    caption={photo.title} />
        });

        return (
            <div> {photos} </div>
        );
    }
});

module.exports = PhotoGallery;