import React, { useCallback, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={logo} alt="Space for logo" />
      <ul className='nav-menu'>
        <li><p onClick={()=> setMenu("home")}>Home</p>{menu==="home"?<img src={underline} /> : <></>}</li>
        <li><p onClick={()=> setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} /> : <></>}</li>
        <li><p onClick={()=> setMenu("services")}>Services</p>{menu==="services"?<img src={underline} /> : <></>}</li>
        <li><p onClick={()=> setMenu("work")}>Portfolio</p>{menu==="work"?<img src={underline} /> : <></>}</li>
        <li><p onClick={()=> setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} /> : <></>}</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar
