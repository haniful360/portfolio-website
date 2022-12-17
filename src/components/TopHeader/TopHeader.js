import React from 'react';
import logo2 from '../../assets/logo2.png'
import './TopHeader.css';
import {BsGithub, BsLinkedin } from 'react-icons/bs';
const TopHeader = () => {
    return (
        <div className=' to_header_container'>
            <nav className='nav'>
                <a href="#home">
                    {/* <h2>H@niful</h2> */}
                    <img className='logo' src={logo2} alt="logo" />
                </a>
                <ul className='menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div className='social_link'>
                        {/* <a href="https://facebook.com" target="_blank" className='social_link_icon'><BsFacebook></BsFacebook></a> */}
                        <a href="https://linkedin.com" target="_blank" className='social_link_icon'><BsLinkedin></BsLinkedin></a>
                        <a href="https://github.com" target="_blank" className='social_link_icon'><BsGithub></BsGithub></a>
                    </div>
                </ul>

            </nav>
        </div>
    );
};

export default TopHeader;