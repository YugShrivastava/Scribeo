import React from 'react'
import images from '../../Images/image'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={images.logo} alt="logo" width={width}/>
    </div>
  )
}

export default Logo
