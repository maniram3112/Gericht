import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs';
import { SubHeading } from '../../Components';
import { images } from '../../Constants';
import './Gallery.css';


const Gallery = () => {
const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };

    return (
        <div className="app_gallery flex_center">
        <div className="app_gallery-content">
            <SubHeading title="Instagram" />
            <h1 className="headtext_cormorant">Photo Gallery</h1>
            <p className="p_opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button type="button" className="custom_button">View More</button>
        </div>
        <div className="app_gallery-images">
            <div className="app_gallery-images_container" ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                <div className="app_gallery-images_card flex_center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery_image-icon" />
                </div>
            ))}
            </div>
            <div className="app_gallery-images_arrows">
            <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('right')} />
            </div>
        </div>
        </div>
    );
}

export default Gallery;