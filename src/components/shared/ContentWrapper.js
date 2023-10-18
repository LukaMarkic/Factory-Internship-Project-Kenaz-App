
import React from 'react'
import '../../styles/shared-components/contentWrapper.scss'
import {Sidebar} from '../aside/Sidebar'
import {SocialBox} from '../aside/SocialBox'
import AsideBannerContainer from '../aside/AsideBannerContainer'

function ContentWrapper({children}) {
  return (
    <div className='content-wrapper'>
        <main>
            {children}
        </main>
        <aside>
            <Sidebar />
            <SocialBox />
            <AsideBannerContainer margin={"18px 0px"}/>
        </aside>
    </div>
  )
}

export default ContentWrapper