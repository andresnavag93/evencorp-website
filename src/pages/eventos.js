import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp Galeria</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Galeria de Eventos</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>

        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
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
          </div>
          <div className="col-4 col-12-medium">
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
          </div>
          <div className="col-4 col-12-medium">
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
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
