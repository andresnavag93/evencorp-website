import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic05 from '../assets/images/evencorp.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp - Team</title>
      <meta name="description" content="Equipo de evencorp" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>Team Evencorp</h2>
          {/* <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p> */}
        </header>
        <div className="row gtr-150">
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic05} alt="" />
              </a>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Quienes Somos</h3>
                <p>
                  Somos una empresa de servicios, que produce y brinda soluciones integrales a 
                  nuestros aliados, para así lograr satisfacer sus necesidades, para ellos contamos 
                  con un personal calificado en cada área de nuestras operaciones. <br/><br/>
                  Mejorar resultados y  efectividad de los proyectos corporativos de nuestro clientes 
                  es una de nuestras virtudes.
                </p>
                <footer>
                </footer>
              </section>
              <section>
                <h3>Nuestros Valores</h3>
                <p>
                  Nuestra Filosofía va enmarcada dentro de una ética de trabajo basada en calidad, compromiso y vocación de servicios, donde la efectividad y la rentabilidad son pilares de nuestra misión.
                </p>
                <footer>
                </footer>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
