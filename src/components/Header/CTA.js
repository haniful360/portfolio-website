import React from 'react';
import CV from '../../assets/My-CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Get Resume</a>
            <a href="#about" className='btn btn-primary'>About Me</a>
        </div>
    );
};

export default CTA;