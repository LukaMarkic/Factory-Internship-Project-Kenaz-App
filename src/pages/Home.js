import React, { useEffect, useState } from 'react'
import Banner from '../components/shared/Banner'
import '../styles/page.scss'
import {CoverArticleCarousel} from '../components/cover-article/CoverArticle'
import CategoryArticlesBox from '../components/category/CategoryArticlesBox'
import ContentWrapper from '../components/shared/ContentWrapper'
import CategoryCarousel from '../components/category/CategoryCarousel'
import ImageCarousel from '../components/ImageCarousel'
import newsData from '../data/category/newsArticles'
import { getElementsWithKeyValue } from '../help/arrayHelp'


function Home() {
    const [coverArticles, setCoverArticles] = useState([]);
    const [localNews, setLocalNews] = useState([]);
    
    useEffect(()=>{
        setCoverArticles(getElementsWithKeyValue(newsData, 'featured', true));
        setLocalNews(getElementsWithKeyValue(newsData, 'local', true));
    },[])

    return (
        <div className='page-container'>
            <Banner height='120px' margin={"16px 0px 18px"}>
            </Banner>
            {newsData !== null || coverArticles.length === 0 ? <CoverArticleCarousel articlesData={coverArticles} key={'home'} /> : ''}
            <ContentWrapper>
                <CategoryArticlesBox categoryIndex={0} />
                <CategoryArticlesBox categoryIndex={2} />
                <Banner height='120px' margin={"0"}>
                </Banner>
                <CategoryArticlesBox categoryIndex={1} displayBigTumbnail={false}/>
                <Banner height='120px' margin={"0"}>
                </Banner>
                <CategoryCarousel title={'News Carousel'} articles={newsData} singleDisplay={false}/>
                <div style={{width: "100%", display: "flex", justifyContent: 'space-between'}}>
                    <CategoryCarousel title={'Editorials'} articles={newsData}/>
                    <CategoryCarousel title={'Local News'} articles={localNews}/>
                </div>
            </ContentWrapper>
            <Banner width='940px' height='120px' margin={"16px 0px 18px"}>
            </Banner>
            <ImageCarousel />
        </div>
    )
}

export default Home