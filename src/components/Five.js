import React from 'react'
import Fade from 'react-reveal/Fade'
import pic01 from '../assets/images/logos/1.png'
import pic02 from '../assets/images/logos/2.png'
import pic03 from '../assets/images/logos/3.jpg'
import pic04 from '../assets/images/logos/4.png'
import pic05 from '../assets/images/logos/5.png'
import pic06 from '../assets/images/logos/6.png'
import pic07 from '../assets/images/logos/7.png'
import pic08 from '../assets/images/logos/8.png'
import pic09 from '../assets/images/logos/9.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const Five = props => (
  <section id="five" className="wrapper style2 special fade inactive five-bg-color">
    <Fade duration={2500}>
      <div className="container">
        <header className="major major2">
          <h2 className={"five-text-color"}>Nuestros Clientes</h2>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic01} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic02} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic03} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic04} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic05} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic06} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic07} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic08} alt="" />
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <img className="five-img-size" src={pic09} alt="" />
            </section>
          </div>
        </div>
      </div>
    </Fade>
  </section>
)
export default Five
