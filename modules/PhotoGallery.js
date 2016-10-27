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

        // URL = 'https://gist.githubusercontent.com/thulioph/b3e8a7d63e8395909e51e6e2714f9b5c/raw/4c2eb6d57e9bfcb474de7988cfa5e27e1a98bb84/cats.json';

        // fetch(URL).then(function(response) {
        //     response.json().then(function(json) {
        //         console.log(json);
        //         return json;
        //     })
        // }).catch(function(err) {
        //     console.error(err);
        // });

        photosArray = [
            {
                id: '1',
                url: 'http://24.media.tumblr.com/tumblr_m4ja16yPMo1rows1to1_250.gif',
                caption: 'Gatinhos doidões'
            },
            {
                id: '2',
                url: 'http://25.media.tumblr.com/tumblr_ltzn49pHgx1qzrdsmo1_500.gif',
                caption: 'Gato faminto'
            },
            {
                id: '3',
                url: 'http://25.media.tumblr.com/YyXwbMbaOoa5uuaxllKxSGA4o1_250.gif',
                caption: 'Gato guitarrista'
            },
        ];

        return photosArray;
    },

    render: function() {
        var data, photos;

        data = this.getDataFromServer();

        photos = data.map(function(photo) {
            return <LikePhotoComponent
                    key={photo.id}
                    id={photo.id}
                    src={photo.url}
                    caption={photo.caption} />
        });

        return (
            <div> {photos} </div>
        );
    }
});

module.exports = PhotoGallery;