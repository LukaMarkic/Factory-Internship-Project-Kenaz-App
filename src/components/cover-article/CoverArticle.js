import React, { useRef } from 'react'
import commentIcon from '../../images/comment-icon.svg'
import blackLayer from '../../images/black_layer.svg'
import leftGray from '../../images/navigation/left_gray.svg'
import rightGray from '../../images/navigation/right_gray.svg'
import '../../styles/shared-components/carousel.scss'
import CarouselWheel from '../shared/CarouselWheel'
import '../../styles/coverArticle.scss'
import useCategoryContext from '../../hooks/useCategoryContext'

function CoverArticle({article}) {
  const {openArticle} = useCategoryContext();
  return (
    <div className='cover-news' style={{
        backgroundImage: `url(${article.imageUrl})`
    }}>
        <img className="black-layer" src={blackLayer}/>
        <div>
            <div>
              <p>{article.date}</p>
              <img src={commentIcon}/>
              <p>{`${article.numberOfComments} ${article.numberOfComments !== 1 ? 'Comments' : 'Comment'}`}</p>
            </div>
            <h1>{article.title}</h1>
        </div>
        <button onClick={()=>openArticle(article)}>
          Read article
        </button>
    </div>
  )
}


function CoverArticleCarousel({articlesData, id}) {

  const wheelRef = useRef(null)
  
  return (
    <div className="cover-news-carousel carousel" key={id}>
        <img className="left-gray-icon" src={leftGray} onClick={()=>{wheelRef.current.prevSlide()}}/>
        <img className="right-gray-icon" src={rightGray} onClick={()=>{wheelRef.current.nextSlide()}}/>
        <CarouselWheel ref={wheelRef} >
        {
            articlesData.map((article, index)=> <CoverArticle key={index} article={article}/>)
        }
        </CarouselWheel>
        
    </div>
  )
}


export {CoverArticle, CoverArticleCarousel}