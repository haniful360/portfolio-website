import React from 'react';
import { BsFacebook , BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs';
function HeaderSocial() {
    return (
        <div className='header_socials'>
            <a href="https://facebook.com/Modhupurno" target="_blank"><BsFacebook></BsFacebook></a>
            <a href="https://www.linkedin.com/in/haniful-islam-3b28b2229/" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/haniful360?tab=repositories" target="_blank"><BsGithub></BsGithub></a>
            {/* <a href="https://instagram.com" target ="_blank"><BsInstagram></BsInstagram></a> */}
            <a href="https://twitter.com/Ha6Hanif" target="_blank"><BsTwitter></BsTwitter></a>
        </div>
    );
}

export default HeaderSocial;