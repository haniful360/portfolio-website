import React, { useState } from 'react'
import './Nav.css';
import { AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';
import { BsBookmarkCheck } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageAltDetail } from 'react-icons/bi';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome></AiOutlineHome></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUserAdd></AiOutlineUserAdd></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsBookmarkCheck></BsBookmarkCheck></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine></RiServiceLine></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageAltDetail></BiMessageAltDetail></a>
    </nav>
  )
}

export default Nav