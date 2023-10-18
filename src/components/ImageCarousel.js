import React, { useRef, useState } from 'react'
import CarouselWheel from './shared/CarouselWheel'
import { carouselImages } from '../data/carouselImagesData'
import searchImageIcon from '../images/search-icon.svg';
import leftGray from '../images/navigation/left_gray.svg'
import rightGray from '../images/navigation/right_gray.svg'
import '../styles/shared-components/carousel.scss'
import '../styles/imageCarousel.scss'
import ModalWindow from './ModalWindow';

function ImageCarousel() {
    const wheelRef = useRef(null)
    const [modalImageSrc, setModalImageSrc] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const gotToImageWithId = (id) =>{
        const sliderImages = wheelRef.current.getCurrentSliderChildren();
        const index = sliderImages.findIndex(sliderImages => sliderImages.id === id);
        wheelRef.current.goToElementWithIndex(index);
    }

    const showModalImage = () =>{
        const image = wheelRef.current.getCurrentSliderChildren()[0];
        setModalImageSrc(image.src);
        setModalIsOpen(true);
    }
    return (
        <>
            <div className='image-carousel carousel'>
                <img className="left-gray-icon" src={leftGray} onClick={()=>{wheelRef.current.prevSlide()}}/>
                <img className="right-gray-icon" src={rightGray} onClick={()=>{wheelRef.current.nextSlide()}}/>
                <img className='search-image-icon' src={searchImageIcon} onClick={showModalImage}/>
                <CarouselWheel ref={wheelRef}>
                    {
                        carouselImages.map((carouselImage, index) => <img key={index} id={carouselImage.id} src={carouselImage.img} style={{width: "940px", height: "400px", objectFit: 'cover'}}/>)
                    }
                </CarouselWheel>
                <div className='image-gallery-list'>
                    {
                        carouselImages.map((carouselImage, index) => <img key={index} src={carouselImage.img} style={{ objectFit: 'cover'}} 
                            onClick={()=>gotToImageWithId(carouselImage.id)}/>)
                    }
                </div>
            </div>
            <ModalWindow title="Image" isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
                {modalImageSrc !== null && 
                    <img src={modalImageSrc} style={{height: "450px"}}/>
                }
            </ModalWindow>
        </>
    )
}

export default ImageCarousel