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
      <title>Evencorp - Services</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Nuestros Servicios</h2>
          {/* <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p> */}
        </header>
        <section>
          <h4>Left &amp; Right</h4>
          <p>
            <span className="image left">
              <img src={pic08} alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Cras aliquet accumsan curae accumsan arcu amet egestas
            placerat odio morbi mi adipiscing col morbi felis faucibus in
            gravida sollicitudin interdum commodo. Ante aliquam vis iaculis
            accumsan lorem ipsum dolor sit amet nullam. Cras aliquet accumsan
            curae accumsan arcu amet egestas placerat odio morbi mi adipiscing
            col morbi felis faucibus in gravida sollicitudin interdum commodo.
            Ante aliquam vis iaculis accumsan lorem ipsum dolor sit amet nullam.
          </p>
          <p>
            <span className="image right">
              <img src={pic08} alt="" />
            </span>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
            tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
            primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
            volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
            praesent. Cras aliquet accumsan curae accumsan arcu amet egestas
            placerat odio morbi mi adipiscing col morbi felis faucibus in
            gravida sollicitudin interdum commodo. Ante aliquam vis iaculis
            accumsan lorem ipsum dolor sit amet nullam. Cras aliquet accumsan
            curae accumsan arcu amet egestas placerat odio morbi mi adipiscing
            col morbi felis faucibus in gravida sollicitudin interdum commodo.
            Ante aliquam vis iaculis accumsan lorem ipsum dolor sit amet nullam.
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
