import React, {Component} from "react";
import ImageSlider from './components/ImageSlider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                './src/images/first.jpg',
                './src/images/second.jpg',
                './src/images/third.jpg'
            ],
            activeIndex: 0
        };
    }

    goToPrev = () => {
        this.setState(prevState => ({
            activeIndex: prevState.activeIndex === 0 ? this.state.images.length - 1 : prevState.activeIndex - 1
        }));
    }

    goToNext = () => {
        this.setState(prevState => ({
            activeIndex: (prevState.activeIndex + 1) % this.state.images.length
        }));
    }

    render() {
        const { images, activeIndex } = this.state;
        return (
            <div className="container mt-5">
                <h1>Image Slider Example</h1>
                <ImageSlider
                    images={images}
                    activeIndex={activeIndex}
                    goToPrev={this.goToPrev}
                    goToNext={this.goToNext}
                />
            </div>
        );
    }
}

export default App;
