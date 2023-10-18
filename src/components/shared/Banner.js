import React from 'react'
import '../../styles/shared-components/banner.scss'

const Banner = ({ children, width="100%", height, margin }) => {
  return (
    <div className='banner-container' style={{"width": `calc(${width} - 1.6px)`, "height": `calc(${height} - 1.6px)`, "margin": margin}}>
        {children}
    </div>
  )
}

export default Banner