import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg' 

const Mywork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h2>My Works</h2>
        <img src={theme_pattern} alt="Space for Theme Image" />
      </div>
      
    </div>
  )
}

export default Mywork
