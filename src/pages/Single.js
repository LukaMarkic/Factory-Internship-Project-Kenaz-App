import React, { useEffect } from 'react'
import '../styles/page.scss'
import Banner from '../components/shared/Banner'
import ContentWrapper from '../components/shared/ContentWrapper'
import { AuthorInfo, Content, Cover } from '../components/single-page/SingleArticle'
import { useLocation } from 'react-router-dom'
import useCategoryContext from '../hooks/useCategoryContext'
import authorsData from '../data/authorData.json'
import { getElementsWithKeyValue } from '../help/arrayHelp'
import { CommentSection } from '../components/single-page/CommentSection'

function Single() {
    const location = useLocation()
    const {article} = location.state
    const {setActivePageIndexByCategortyId} = useCategoryContext();

    const getAuthorById = (authorId) => {
        return getElementsWithKeyValue(authorsData, 'id', authorId)[0];
    }

    useEffect(()=>{
        setActivePageIndexByCategortyId(article.categoryId);
        window.scrollTo(0,0);
    },[]);
  return (
    <div className='page-container'>
            <Banner height='120px' margin={"16px 0px 18px"}>
            </Banner>
            <Cover imageUrl={article.imageUrl} title={article.title} date={article.date}/>
             <ContentWrapper>
                <Content content={article.content}/>
                <Banner height='120px' margin={"0px 0px 18px"}>
                </Banner>
                <AuthorInfo author={getAuthorById(article.authorId)}/>
                <CommentSection commentsData={[]}/>             
            </ContentWrapper>
        </div>
  )
}

export default Single