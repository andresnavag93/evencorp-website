import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic00 from '../assets/images/alfonzoRivas/0.jpg'
import pic01 from '../assets/images/alfonzoRivas/1.jpg'
import pic02 from '../assets/images/alfonzoRivas/2.jpg'
import pic03 from '../assets/images/alfonzoRivas/3.jpg'
import pic04 from '../assets/images/alfonzoRivas/4.jpg'
import pic05 from '../assets/images/alfonzoRivas/5.jpg'
import pic06 from '../assets/images/alfonzoRivas/6.jpg'
import pic07 from '../assets/images/alfonzoRivas/7.jpg'
import pic08 from '../assets/images/alfonzoRivas/8.jpg'
import pic09 from '../assets/images/alfonzoRivas/9.jpg'
import pic10 from '../assets/images/alfonzoRivas/10.jpg'
import pic11 from '../assets/images/alfonzoRivas/11.jpg'
import pic12 from '../assets/images/alfonzoRivas/12.jpg'
import pic13 from '../assets/images/alfonzoRivas/13.jpg'
import pic14 from '../assets/images/alfonzoRivas/14.jpg'
import pic15 from '../assets/images/alfonzoRivas/15.jpg'
import pic16 from '../assets/images/alfonzoRivas/16.jpg'
import pic17 from '../assets/images/alfonzoRivas/17.jpg'
import pic18 from '../assets/images/alfonzoRivas/18.jpg'
import pic19 from '../assets/images/alfonzoRivas/19.jpg'
import pic20 from '../assets/images/alfonzoRivas/20.jpg'
import pic21 from '../assets/images/alfonzoRivas/21.jpg'
import pic22 from '../assets/images/alfonzoRivas/22.jpg'
import pic23 from '../assets/images/alfonzoRivas/23.jpg'
import pic24 from '../assets/images/alfonzoRivas/24.jpg'
import pic25 from '../assets/images/alfonzoRivas/25.jpg'
import pic26 from '../assets/images/alfonzoRivas/26.jpg'
import pic27 from '../assets/images/alfonzoRivas/27.jpg'
import pic28 from '../assets/images/alfonzoRivas/28.jpg'
import pic29 from '../assets/images/alfonzoRivas/29.jpg'
import pic30 from '../assets/images/alfonzoRivas/30.jpg'
import pic31 from '../assets/images/alfonzoRivas/31.jpg'

const array = [
  pic00,
  pic01,
  pic02,
  pic03,
  pic04,
  pic05,
  pic06,
  pic07,
  pic08,
  pic09,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
  pic20,
  pic21,
  pic22,
  pic23,
  pic24,
  pic25,
  pic26,
  pic27,
  pic28,
  pic29,
  pic30,
  pic31,
]

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp - Alfonzo Rivas</title>
      <meta name="description" content="Evencorp Evento Alfonzo Rivas" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Alfonzo Rivas</h2>
        </header>
        <section>
          <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              {array.map(pic => {
                return (
                  <div className="col-4 col-6-xsmall">
                    <span className="image fit">
                      <img src={pic} alt="" />
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
