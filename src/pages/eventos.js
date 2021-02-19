import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic00 from '../assets/images/alfonzoRivas/0.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp Galería</title>
      <meta name="description" content="Evencorp galería de eventos" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Galería de Eventos</h2>
        </header>

        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section>
              <h3>Alfonzo Rivas</h3>
              <span className="image fit">
                <img src={pic00} alt="" />
              </span>
              {/* <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p> */}
              <footer>
                <ul className="actions">
                  <li>
                    <a href="/evento1" className="button">
                      Ver fotos
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
          </div>
          {/* <div className="col-4 col-12-medium">
            <section>
              <a href="#" className="image fit">
                <img src={pic07} alt="" />
              </a>
              <h3>Amet Lorem Tempus</h3>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
              <footer>
                <ul className="actions">
                  <li>
                    <a href="/evento1" className="button">
                      Learn More
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
          </div>*/}
          {/*<div className="col-4 col-12-medium"> 
            <section>
              <a href="#" className="image fit">
                <img src={pic07} alt="" />
              </a>
              <h3>Amet Lorem Tempus</h3>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
              <footer>
                <ul className="actions">
                  <li>
                    <a href="/evento1" className="button">
                      Learn More
                    </a>
                  </li>
                </ul>
              </footer>
            </section>
          </div> */}
        
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
