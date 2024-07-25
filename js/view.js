class View {
    constructor() {
        this.albumList = document.getElementById('albumList');
        this.photoList = document.getElementById('photoList');
    }

    renderAlbumList(albums) {
        this.albumList.innerHTML = '';
        albums.forEach(album => {
            const albumItem = document.createElement('a');
            albumItem.href = `album.html?albumId=${album.id}`;
            albumItem.className = 'list-group-item list-group-item-action';
            albumItem.textContent = album.title;
            this.albumList.appendChild(albumItem);
        });
    }

    renderPhotoList(photos) {
        this.photoList.innerHTML = '';
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'col-md-4 photo-item';
            photoItem.innerHTML = `
                <div class="card">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                    <div class="card-body">
                        <p class="card-text">${photo.title}</p>
                    </div>
                </div>
            `;
            this.photoList.appendChild(photoItem);
        });
    }
}
