import React from 'react'
import './Experience.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiCss3, DiJavascript, DiReact, DiNodejsSmall } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>Experience</h2>
      <div className="container experience_container">
        <div className="frontend_development">
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className="experience_details">
              <AiFillHtml5 className='experience_details_icons'></AiFillHtml5>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <DiCss3 className='experience_details_icons'></DiCss3>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillBootstrapFill className='experience_details_icons'></BsFillBootstrapFill>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className='experience_details_icons'></SiTailwindcss>
              <div>
                <h4>TAILWIND CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJavascript className='experience_details_icons'></DiJavascript>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiReact className='experience_details_icons'></DiReact>
              <div>
                <h4>REACT JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* start backend_development */}
        <div className="backend_development">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <DiNodejsSmall className='experience_details_icons'></DiNodejsSmall>
              <div>
                <h4>NODE JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className='experience_details_icons'></SiExpress>
              <div>
                <h4>EXPRESS JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className='experience_details_icons'></SiMongodb>
              <div>
                <h4>MONGODB</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience