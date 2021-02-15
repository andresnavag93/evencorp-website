import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
import pic08 from '../assets/images/pic08.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp - Evento1</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Evento1</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>
        <section>
          <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              <div className="col-12">
                <span className="image fit">
                  <img src={pic07} alt="" />
                </span>
                <h3>Sed Magna Ornare</h3>
                <p>
                  In vestibulum massa quis arcu lobortis tempus. Nam pretium
                  arcu in odio vulputate luctus. Suspendisse euismod lorem eget
                  lacinia fringilla. Sed sed felis justo. Nunc sodales elit in
                  laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor,
                  risus nisi rutrum metus. In accumsan lorem nunc ultrices a ac
                  eu accumsan ac id nullam. Nec lobortis. Faucibus. Mi commodo
                  laoreet arcu at non mi lacinia aliquet non lobortis phasellus
                  accumsan nascetur varius. Integer orci porttitor eu faucibus
                  aliquet faucibus ac accumsan adipiscing accumsan odio. Ut
                  adipiscing.
                </p>
                <ul>
                  <li>Faucibus orci lobortis ac adipiscing integer.</li>
                  <li>Col accumsan arcu mi aliquet placerat.</li>
                  <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
                  <li>Blandit massa non blandit tempor interdum.</li>
                  <li>Lacinia mattis arcu nascetur lobortis.</li>
                </ul>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
