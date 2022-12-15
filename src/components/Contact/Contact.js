import React, { useRef }  from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';
import emailjs from '@emailjs-com';


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option_icon'></HiOutlineMail>
            <h4>Email</h4>
            <h5>haniful360@gmail.com</h5>
            <a href="mailto:haniful360@gmail.com" target ="_blank">Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='contact_option_icon'></BsMessenger>
            <h4>Messenger</h4>
            <h5>hanifulislam</h5>
            <a href="https://m.me/Modhupurno/" target ="_blank" >Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option_icon'></BsWhatsapp>
            <h4>Whats Up</h4>
            <h5>+8801307325024</h5>
            <a href="https://api.whatsapp.com/send?phone+8801307325024" target ="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <input type="text" name='email' placeholder='Enter Your Email' required/>
            <textarea name="" cols="30" rows="8"></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact