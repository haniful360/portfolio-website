import React from 'react'
import './Footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
const Footer = () => {
  return (
    <section className='footer_container'>
      <div className='footer'>
        <p>Designed and Developed By <span className='footer_name'>H@niful Islam Modhu</span> </p>
        <small>&copy; 2022 HIM❤</small>
        <div className='footer_arrow'>
          <a href="#"><AiOutlineArrowUp className='footer_uparrow_icon'></AiOutlineArrowUp></a>
        </div>
      </div>
    </section>

  )
}

export default Footer;