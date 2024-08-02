import React from 'react';

class ImageSlider extends React.Component {
    render() {
        const { images, activeIndex, goToPrev, goToNext } = this.props;
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img src={image} alt={`Slide ${index}`} className="d-block w-100" />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" onClick={goToPrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={goToNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default ImageSlider;
