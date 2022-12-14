import React from 'react'
import CTA from './CTA';
import './Header.css';
import haniful from '../../assets/haniful.jpeg'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Haniful Islam</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        
        <div className='me'>
          <img src={haniful} alt="me" />
        </div>
        <a href="#contact" className='scroll-down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header