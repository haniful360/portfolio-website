import React from 'react';
import './Portfolio.css';

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG1} alt="Website-1" />
          </div>
          <h3>This is a portfolio item title</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary ' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG2} alt="Website-2" />
          </div>
          <h3>This is a portfolio item title2</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG3} alt="Website-3" />
          </div>
          <h3>This is a portfolio item title</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG4} alt="Website-4" />
          </div>
          <h3>This is a portfolio item title</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG5} alt="Website-5" />
          </div>
          <h3>This is a portfolio item title</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG6} alt="Website-6" />
          </div>
          <h3>This is a portfolio item title</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn' target='_blank'>Code Link</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;