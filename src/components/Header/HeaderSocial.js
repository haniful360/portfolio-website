import React from 'react';
import { BsFacebook , BsGithub,BsLinkedin, BsInstagram,BsTwitter} from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';
function HeaderSocial() {
    return (
        <div className='header_socials'>
            <a href="https://facebook.com" target="_blank"><BsFacebook></BsFacebook></a>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank"><BsGithub></BsGithub></a>
            <a href="https://instagram.com" target ="_blank"><BsInstagram></BsInstagram></a>
            <a href="https://twitter.com" target="_blank"><BsTwitter></BsTwitter></a>
        </div>
    );
}

export default HeaderSocial;