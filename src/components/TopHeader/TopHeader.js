import React, { useRef } from 'react';
import logo2 from '../../assets/logo2.png'
import './TopHeader.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTimes, FaBars } from 'react-icons/fa';

const TopHeader = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <div className=' top_header_container'>
            <div className='top_header'>
                <a href="#home">
                    {/* <h2>H@niful</h2> */}
                    <img className='logo' src={logo2} alt="logo" />
                </a>
                <nav ref={navRef} className='nav'>
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#portfolio">Project</a>
                    <a href="#contact">Contact</a>
                    
                    <button onClick={showNavbar} className='nav_btn nav_close_btn'><FaTimes></FaTimes></button>
                </nav>
                <div className='social_link'>
                        <a href="https://linkedin.com" target="_blank" className='social_link_icon'><BsLinkedin></BsLinkedin></a>
                        <a href="https://github.com" target="_blank" className='social_link_icon'><BsGithub></BsGithub></a>
                    </div>
                <button onClick={showNavbar} className='nav_btn'><FaBars></FaBars></button>
            </div>
        </div>
    );
};

export default TopHeader;