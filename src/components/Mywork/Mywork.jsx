import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrorw_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id = 'work' className='mywork'>
      <div className="mywork-title">
        <h2>My Works</h2>
        <img src={theme_pattern} alt="Space for theme image " />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="space for my-works" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Showmore</p>
        <img src={arrorw_icon} alt="space for arrow icon"/>
      </div>

    </div>
  )
}


export default Mywork
