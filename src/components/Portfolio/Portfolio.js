import React from 'react';
import './Portfolio.css';

import IMG1 from '../../assets/espn.png'
import IMG2 from '../../assets/bikers.png'
import IMG3 from '../../assets/laptop.png'
import IMG4 from '../../assets/insta.png'
import IMG5 from '../../assets/ferari.png'
import IMG6 from '../../assets/univercity.png'
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
          <h3>The Sports WebSite</h3>
          {/* <p></p>  */}
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360/espn-sports-website" className='btn ' target='_blank'>Code Link</a>
          <a href="https://espn-sports-8c6b9.web.app/" className='btn btn-primary ' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG2} alt="Website-2" />
          </div>
          <h3>Bike Collection WebSite</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360/biker-laps-client-side" className='btn ' target='_blank'>Code Link</a>
          <a href="https://biker-labs.web.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG3} alt="Website-3" />
          </div>
          <h3>Ecommerce Website</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360/ema-jhon-website-recap" className='btn ' target='_blank'>Code Link</a>
          <a href="https://ema-john-e-commerce-5926c2.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG4} alt="Website-4" />
          </div>
          <h3>Insta Shohor Website</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360/insta-shohor-js" className='btn ' target='_blank'>Code Link</a>
          <a href="https://insta-sohor-25759c.netlify.app/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG5} alt="Website-5" />
          </div>
          <h3>Ferari Car Website</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360" className='btn ' target='_blank'>Code Link</a>
          <a href="https://euphonious-souffle-9eb6ca.netlify.app/reviews" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item_image'>
            <img src={IMG6} alt="Website-6" />
          </div>
          <h3>Univercity Website</h3> 
          <div className='portfolio_item_cta'>
          <a href="https://github.com/haniful360/univercity-website" className='btn' target='_blank'>Code Link</a>
          <a href="https://haniful360.github.io/univercity-website/" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;