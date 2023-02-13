import React from 'react'
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
const Footer = () => {
  return (
    <section className='footer_container'>
      <div className='footer'>
        <p>Designed and Developed By <span className='footer_name'>H@niful Islam Modhu</span> </p>
        <small>&copy; 2022 HIM❤</small>
        <div className='footer_arrow'>
          <a href="#"><IoIosArrowUp className='footer_uparrow_icon'></IoIosArrowUp></a>
        </div>
      </div>
    </section>

  )
}

export default Footer;