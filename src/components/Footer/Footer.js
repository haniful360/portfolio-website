import React from 'react'
import './Footer.css'
import { AiOutlineArrowUp } from 'react-icons/ai';
const Footer = () => {
  return (
    <section className='footer_container'>
      <div className='footer'>
        <p>&copy;All rights Reserved by Haniful Islam 2022</p>
        <div className='footer_arrow'>
          <a href="#"><AiOutlineArrowUp className='footer_uparrow_icon'></AiOutlineArrowUp></a>
        </div>
      </div>
    </section>

  )
}

export default Footer;