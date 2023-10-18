import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCategoryContext from '../../hooks/useCategoryContext'
import {SmallArticleTumbnail, BigArticleTumbnail} from './ArticleTumbnail';
import '../../styles/category/categoryArticleBox.scss';

function CategoryArticlesBox({categoryIndex, displayBigTumbnail = true }) {

  const {categories} = useCategoryContext();
  const [articles, setArticles] = useState([]);

  const getMultipleRandomElemnts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const getArticleData = () => {
      const articleData = require("../../" + categories[categoryIndex].filePath);
      setArticles(getMultipleRandomElemnts(articleData , displayBigTumbnail ? 3 : 4));
  }

  useEffect(()=>{
    getArticleData();
  }, [])

  return (
    <div className='category-articles-box' style={{borderLeft: `10px solid ${categories[categoryIndex].color}`}}>
        <div>
          <h2>{categories[categoryIndex].name}</h2>
          <Link to="/Category" state={{index: categoryIndex }}>See all</Link>
        </div>
        <div className={displayBigTumbnail ? 'big-article-tumbnail-container' : 'small-article-tumbnail-container'}>
            {
              articles.length > 0 ? 
                articles.map((article, index)=> {
                  if(displayBigTumbnail) return <BigArticleTumbnail key={index} article={article} width={"170px"} imageHeight={"128px"}/>
                  return <SmallArticleTumbnail key={index} article={article}/>
              }) : 'No available articles.' 
            } 
        </div>
    </div>
  )
}

export default CategoryArticlesBox