import React, { useRef, useState } from 'react';
import logo2 from '../../assets/logo2.png'
import './TopHeader.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTimes, FaBars } from 'react-icons/fa';

const TopHeader = () => {
    const [activeNav, setActiveNav] = useState('#');
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <div className=' top_header_container'>
            <div className='top_header'>
                <a href="#">
                    <img className='logo' src={logo2} alt="logo" />
                </a>
                <nav ref={navRef} className='nav'>
                    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'activeP'  : ''}>Home</a>
                    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>about</a>
                    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
                    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>

                    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>

                    <button onClick={showNavbar} className='nav_btn nav_close_btn'><FaTimes></FaTimes></button>
                </nav>
                <div className='social_link'>
                    <a href="https://www.linkedin.com/in/haniful-islam-3b28b2229/" target="_blank" className='social_item' >
                        <BsLinkedin className='social_link_icon'></BsLinkedin>
                    </a>
                    <a href="https://github.com/haniful360?tab=repositories" target="_blank" className='social_item'>
                        <BsGithub className='social_link_icon'></BsGithub>
                    </a>
                </div>
                <button onClick={showNavbar} className='nav_btn'><FaBars></FaBars></button>
            </div>
        </div>
    );
};

export default TopHeader;