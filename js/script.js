'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);

    if (document.getElementById('albumList')) {
        controller.loadAlbums();
    } else if (document.getElementById('photoList')) {
        const urlParams = new URLSearchParams(window.location.search);
        const albumId = urlParams.get('albumId');
        if (albumId) {
            controller.loadPhotos(albumId);
        }
    }
});
