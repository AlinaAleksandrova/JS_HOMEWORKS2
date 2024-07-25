class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async loadAlbums() {
        const albums = await this.model.getAlbums();
        this.view.renderAlbumList(albums);
    }

    async loadPhotos(albumId) {
        const photos = await this.model.getPhotos(albumId);
        this.view.renderPhotoList(photos);
    }
}
