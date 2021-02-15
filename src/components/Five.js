import React from 'react'
import Fade from 'react-reveal/Fade'
import pic07 from '../assets/images/pic07.jpg'

const Five = props => (
  <section id="five" className="wrapper style2 special fade inactive">
    <Fade duration={2500}>
      <div className="container">
        <header>
          <h2>Clientes</h2>
          <p>Nuestros clientes confian en nosotros</p>
        </header>
        <a href="#" className="image fit">
          <img src={pic07} alt="" />
        </a>
      </div>
    </Fade>
  </section>
)
export default Five
