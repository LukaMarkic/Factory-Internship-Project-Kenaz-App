import React, { useState } from 'react'
import facebookIcon from '../../images/social-icons/facebook-icon.svg'
import twitterIcon from '../../images/social-icons/twitter-icon.svg'
import youtubeIcon from '../../images/social-icons/youtube-icon.svg'
import '../../styles/shared-components/socialNetwork.scss'

function SocialBox() {

  const socials = [
    {
      icon: facebookIcon,
      joinText: 'Like',
      leaveText: 'Dislike',
      numberOfUsers: 25041,
      userCalled: 'Fans'
    },
    {
      icon: twitterIcon,
      joinText: 'Follow',
      leaveText: 'Unfollow',
      numberOfUsers: 25041,
      userCalled: 'Followers'
    },
    {
      icon: youtubeIcon,
      joinText: 'Subscribe',
      leaveText: 'Unsubscribe',
      numberOfUsers: 941,
      userCalled: 'Subscribers'
    }
  ]

  return (
    <div className='social-box'>
        <h3>Social</h3>
        {socials.map((social, index)=> 
          <SocialNetwork key={index} icon={social.icon} joinText={social.joinText} leaveText={social.leaveText} numberOfUsers={social.numberOfUsers} userCalled={social.userCalled}/>)}
    </div>
  )
}

function SocialNetwork({icon, joinText, leaveText, numberOfUsers, userCalled}) {

  const [subscribed, setSubsctibed] = useState(false);

  const handelSubscribtion = () => {
      setSubsctibed(prev => !prev);
  }
  
  return (
      <div className='social-network'>
          <img src={icon}/>
          <button onClick={handelSubscribtion}>{subscribed ? leaveText : joinText}</button>
          <p>{subscribed ? (numberOfUsers + 1) : numberOfUsers} {userCalled}</p>
      </div>
  )
}

export {SocialBox, SocialNetwork}