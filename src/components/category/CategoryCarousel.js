import React, { useEffect, useRef, useState } from 'react'
import useCategoryContext from '../../hooks/useCategoryContext';
import CarouselWheel from '../shared/CarouselWheel';
import orangeBackIcon from '../../images/navigation/left_orange.svg'
import orangeNextIcon from '../../images/navigation/right_orange.svg'
import brownBackIcon from '../../images/navigation/left_brown.svg'
import brownnNextIcon from '../../images/navigation/right_brown.svg'
import '../../styles/category/categoryCarousel.scss'
import { BigArticleTumbnail } from './ArticleTumbnail';

function CategoryCarousel({title, articles = [], singleDisplay = true}) {
    const wheelRef = useRef(null)  

    return (
        <div className='category-carousel' style={{width: singleDisplay ? '230.4px' : '550.4px', borderLeft: `10px solid ${singleDisplay ? "#A99765" : "#FCC44D"}`}}>
            <div>
                <h2>{title}</h2>
                {articles.length > (singleDisplay ? 1 : 2) ? 
                    <div className='navigation-carousel-icon-container'>
                        <img src={singleDisplay ? brownBackIcon : orangeBackIcon} onClick={()=>{wheelRef.current.prevSlide(singleDisplay ? 1 : 2)}}/>
                        <img src={singleDisplay ? brownnNextIcon : orangeNextIcon} onClick={()=>{wheelRef.current.nextSlide(singleDisplay ? 1: 2)}}/>
                    </div> : ''
                }
            </div>
            <CarouselWheel ref={wheelRef} gap={30.4}>
                {
                    articles.length > 0 ? 
                    articles.map((article, index) => 
                        <BigArticleTumbnail key={index} article={article} width={singleDisplay ? '230px' : '260px'} imageHeight="150px" numberOfLines={2} infoHeight='62px'/>
                    ) : 'No available articles.'
                }
            </CarouselWheel>
        </div>
    )
}

export default CategoryCarousel