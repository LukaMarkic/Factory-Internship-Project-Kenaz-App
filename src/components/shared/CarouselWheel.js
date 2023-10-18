
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import '../../styles/shared-components/carousel.scss'

const CarouselWheel = forwardRef(({children, gap = 0, animationDuration = 750}, ref) => {

    const sliderRef = useRef(null);
    let length = children.length;

    useImperativeHandle(ref, () => ({
        nextSlide,
        prevSlide,
        goToElementWithIndex,
        getCurrentSliderChildren
      }));


    const getCurrentSliderChildren = () => {
        return Array.from(sliderRef.current.children);
    }  

    const doubleTheElements = () => {
      const container = sliderRef.current;
      if (container) {
        length = 6;
        const childElements = Array.from(container.children);
        childElements.forEach((element) => {
          const clone = element.cloneNode(true);
          container.appendChild(clone);
        });
      }
    }

    const nextSlide = (numberOfOffsetElemnts = 1) => {

      if(numberOfOffsetElemnts === 2 && length === 3){
        doubleTheElements();
      }

      sliderRef.current.style.transition = `transform ${animationDuration}ms ease-in-out`
      sliderRef.current.style.transform = `translateX(-${numberOfOffsetElemnts*(sliderRef.current.children[0].clientWidth + gap)}px)`;
        
      setTimeout(()=>{
        for(let i = 0; i< numberOfOffsetElemnts; i++) sliderRef.current.appendChild(sliderRef.current.children[0]);
        sliderRef.current.style.transition = ""
        sliderRef.current.style.transform = "";
      }, animationDuration);  
    }

    const prevSlide = (numberOfOffsetElemnts = 1) => {

      if(numberOfOffsetElemnts === 2 && length === 3){
        doubleTheElements();
      }
      
      sliderRef.current.style.transform = `translateX(-${numberOfOffsetElemnts*(sliderRef.current.children[0].clientWidth + gap)}px)`;    
      for(let i = 0; i< numberOfOffsetElemnts; i++) sliderRef.current.insertBefore(sliderRef.current.children[length-1], sliderRef.current.children[0]);

      setTimeout(()=>{
        sliderRef.current.style.transform = "";
        sliderRef.current.style.transition = `transform ${animationDuration}ms ease-in-out`;
      }, 10)
    
      setTimeout(()=>{
        sliderRef.current.style.transition = ""
      }, animationDuration)
    }

    const goToElementWithIndex = (index) =>{
      for(let i = 0; i < index; i++) sliderRef.current.appendChild(sliderRef.current.children[0]);
    }

    return (
          <div className="wheel" ref={sliderRef} style={{gap: gap}}>
            {children}
          </div>
    )
});

export default CarouselWheel