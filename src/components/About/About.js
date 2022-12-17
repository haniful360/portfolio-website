import React from 'react';
import { BiAward } from 'react-icons/bi';
import { IoMdCodeWorking } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import './About.css';
import aboutMe from '../../assets/about-me2.jpeg'


const About = () => {
    // const cards = [
    //     { title: 'Experience', des: '1+ Year working', },
    //     { title: 'Working Place', des: 'Programming-Hero', },
    //     { title: 'Projects', des: '40+ Projects completed', src: BiAward },
    // ]{
    //     cards.map(card => <div>
    //         <BiAward></BiAward>
    //          <h5>{card.title}</h5>
    //          <p><small>{card.des}</small></p>
    //      </div>)
    //  }
    return (
        <section id='about' className='about-section'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <img src={aboutMe} alt="" />
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <a className='about_icon' href=""><BiAward></BiAward></a>
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className='about_card'>
                            <a className='about_icon' href=""><IoMdCodeWorking /></a>
                            <h5>Working Place</h5>
                            <small>P-Hero</small>
                        </article>
                        <article className='about_card'>
                            <a className='about_icon' href=''><AiOutlineProject /></a>
                            <h5>Projects</h5>
                            <small>40+ Projects Completed</small>
                        </article>
                    </div>
                    <p><q>My name is Haniful Islam (Modhupurno)❤ . I am from Dinajpur, Bangladesh. Currently I study at Dinajpur Poltechnic Institute, Diploma in Computer Technology.Since my childhood, I love art and design. I always try to design stuff with my unique point of veiw. I also love to create things that can be usefull to other.

                        I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it realy interesting and I enjoyed the process a lot
                    </q></p>

                    {/* <p>My vision is to make the world a better place.It is time for just to create more good stuff that helps the world to become a better place</p> */}
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About