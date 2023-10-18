import React, { useEffect, useRef, useState } from 'react'
import '../../styles/footer/footer.scss'
import kenazBlueLogo from '../../images/logos/kenaz-blue-logo.svg';
import tagsData from "../../data/widgetTags";
import WidgetTag from './WidgetTag';
import {FooterPostContainer} from './FooterPost';
import useCategoryContext from '../../hooks/useCategoryContext';
import {TwitterFeed} from './TwitterFeed';
import { getFeturedPosts } from '../../help/postDataHelp';
import { getRandomElementsFromArray } from '../../help/arrayHelp';

function Footer() {

    const email = useRef();
    const {categoryActiveIndex, categories, resetCategoryIndex} = useCategoryContext()
    const [tags, setTags] = useState([])
    const [postsData, setPostsData] = useState(null)
    const [randomPosts, setRandomPosts] = useState(null)
    const [featuredPosts, setFeturedPosts]  =useState(null)

    useEffect(()=>{
        setTags(tagsData);
        
    },[])

    useEffect(()=>{
        categoryActiveIndex !== null ? setPostsData(require('../../' + categories[categoryActiveIndex].filePath)) : setPostsData(require('../../' + categories[0].filePath));
    }, [categoryActiveIndex]);

    useEffect(()=>{
        if(postsData !== null){
            setRandomPosts(getRandomElementsFromArray(postsData, 3))
            setFeturedPosts(getFeturedPosts(postsData, 3))
        }
    }, [postsData]);

    return (
        <div className='footer-container'>
            <div className='footer-top-content'>
                <div>
                    <div>
                        <div to='/' className='footer-logo-container'>
                            <img src={kenazBlueLogo} alt='kenaz-blue-logo' onClick={resetCategoryIndex}/>
                            <h1 onClick={resetCategoryIndex}>Kenaz</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
                        <div className='footer-social-media-icons'>
                            <img src={require('../../images/social-icons/rss-icon.svg').default} alt='rss-icon'/>
                            <img src={require('../../images/social-icons/facebook-icon.svg').default} alt='facebook-icon'/>
                            <img src={require('../../images/social-icons/twitter-icon.svg').default} alt='twitter-icon'/>
                            <img src={require('../../images/social-icons/dribble-icon.svg').default} alt='dribble-icon'/>
                            <img src={require('../../images/social-icons/linkedin-logo.png')} alt='linkedin-icon'/>
                            <img src={require('../../images/social-icons/youtube-icon.svg').default} alt='youtube-icon'/>
                            <img src={require('../../images/social-icons/skype-icon.svg').default} alt='skype-icon'/>
                        </div>
                    </div>
                    <div>
                        <h1>
                            Newsletter
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</p>
                        <form>
                            <input ref={email} type='text' placeholder='Your mail'/>
                            <button type='submit'>Subscribe</button>
                        </form>
                    </div>
                    <div>
                        <h1>Tags Widget</h1>
                        <div className='tag-contianer'>
                            {tags.map((tag, index)=> < WidgetTag key={index} name={tag.name} selected={tag.selected} handleClick={()=>{ 
                                tag.selected = !tag.selected;
                                setTags([...tags]);
                                }}/>)}
                        </div>
                    </div>
                </div>
                <div>
                    <FooterPostContainer title="Featured" postsData={featuredPosts ? featuredPosts : []}/>
                    <FooterPostContainer title="Random Posts" postsData={randomPosts ? randomPosts : []}/>
                    <TwitterFeed/>
                </div>
            </div>
            <hr />
            <div className='footer-bottom-content'>
                <p>© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</p>
                <p>Typography - Templates - Contact Form - 404 Page</p>
            </div>
        </div>
    )
}

export default Footer