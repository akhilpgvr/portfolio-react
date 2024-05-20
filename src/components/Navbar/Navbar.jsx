import React, { useCallback, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt="Space for logo" />
      <ul className='nav-menu'>
        <li> <AnchorLink className='anchor-link' href='#home'> <p onClick={()=> setMenu('home')}>Home</p> </AnchorLink> {menu==='home'? <img src={underline} /> : <></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=> setMenu('about')}>About Me</p>  </AnchorLink> {menu==='about'? <img src={underline} /> : <></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=> setMenu('services')}>Services</p> </AnchorLink> {menu==='services'? <img src={underline} /> : <></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=> setMenu('work')}>Portfolio</p> </AnchorLink> {menu==='work'? <img src={underline} /> : <></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=> setMenu('contact')}>Contact</p> </AnchorLink> {menu==='contact'? <img src={underline} /> : <></>}</li>
      </ul>
      <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
