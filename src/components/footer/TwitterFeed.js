
import React from 'react'
import twitterPosts from '../../data/twitterPosts'
import '../../styles/footer/twitterFeed.scss'
import twitterBird from '../../images/social-icons/twitter-bird.svg'

function TwitterFeed() {
  return (
    <div className='twitter-feed-container'>
        <h2>Twitter Feed</h2>
        {twitterPosts.map((post, index)=><TwitterPost key={index} post={post}/>)}
    </div>
  )
}

function TwitterPost({post}) {
  return (
    <div className='twitter-post'>
        <div>
            <img src={twitterBird} />
            <p>{`${post.user} @${post.username}`}</p>
        </div>
        <p>{post.post}</p>
    </div>
  )
}

export {TwitterFeed, TwitterPost}