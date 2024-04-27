import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = ({ images }) => {
    return (
        <Carousel showArrows={true} showThumbs={false} width={'100%'}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
}

export default ImageSlider;
