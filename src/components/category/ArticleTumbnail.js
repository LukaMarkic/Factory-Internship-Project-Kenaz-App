import React from 'react'
import commentIcon from '../../images/comment-icon.svg'
import '../../styles/category/articleTumbinal.scss'
import useCategoryContext from '../../hooks/useCategoryContext';

export function BigArticleTumbnail({article, width, imageHeight, infoHeight = '85px', numberOfLines = 4}) {
  const {openArticle} = useCategoryContext();
  return (
    <div className='big-article-tumbnail' style={{width: width}} onClick={()=>openArticle(article)}>
        <img src={article.imageUrl} style={{height: imageHeight}}/>
        <div style={{height: infoHeight}}>
            <div>
                <p>{article.date}</p>
                <div className='comment-container'>
                    <img src={commentIcon}/>
                    <p>{article.numberOfComments}</p>
                </div>
            </div>
            <h3 style={{ WebkitLineClamp: numberOfLines}}>{article.title}</h3>
        </div>
    </div>
  )
}

export function SmallArticleTumbnail({article}) {
  const {openArticle} = useCategoryContext();
    return (
      <div className='small-article-tumbnail' onClick={()=>openArticle(article)}>
        <img src={article.imageUrl}/>
        <div>
            <p>{article.date}</p>
            <h3>{article.title}</h3>
        </div>
      </div>
    )
  }