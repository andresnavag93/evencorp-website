import React from 'react'
import pic01 from '../assets/images/logo.png'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Evencorp</h2>
        <p>
          Organizamos todo tipo de eventos, <br /> para tu empresa, familia o
          <br /> simplemente para tus momentos especiales.
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
      
    </div>
    
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
