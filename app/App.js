//
// Arquivo principal da aplicação que será responsável
// pela renderização dos elementos no index.html
//

var React, ReactDOM, appElement, HelloWorldComponent, PhotoComponent, photoElement, likePhotoElement, LikePhotoComponent, galleryElement, PhotoGalleryComponent;

// importa o react
React = require('react');

// importa o react-dom
ReactDOM = require('react-dom');

// obtém a referência de onde eu quero renderizar o conteúdo
appElement = document.getElementById('app');
photoElement = document.getElementById('photo');
likePhotoElement = document.getElementById('photo-like');
galleryElement = document.getElementById('gallery');

// importo os components criados
HelloWorldComponent = require('./components/HelloWorld.js');
PhotoComponent = require('./components/Photo.js');
LikePhotoComponent = require('./components/LikePhoto.js');
PhotoGalleryComponent = require('./components/PhotoGallery.js');

// renderizo os components no DOM
ReactDOM.render(<HelloWorldComponent />, appElement);

// ReactDOM.render(<PhotoComponent imageUrl='http://25.media.tumblr.com/tumblr_lqo2x2kF0L1qb7evco1_1280.png' caption='Cats!' />, photoElement);

// ReactDOM.render(<LikePhotoComponent src='http://25.media.tumblr.com/tumblr_lqo2x2kF0L1qb7evco1_1280.png' caption='Curtiu o gatinho?' />, likePhotoElement);

ReactDOM.render(<PhotoGalleryComponent />, galleryElement);

