import React from 'react'
import './homepage.style.css'
const HomePage = ()=>{

  return(
    <div className='homepage'>
      
      <div className='directory-menu'>
        
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HAT</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SNEARS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMEN'S</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MAN</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
       </div>
      </div>
    </div>
  )
}

export default HomePage