import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/services/1.jpg'
import pic02 from '../assets/images/services/2.jpg'
import pic03 from '../assets/images/services/3.jpg'
import pic04 from '../assets/images/services/4.jpg'
import pic05 from '../assets/images/services/5.jpg'
import pic06 from '../assets/images/services/6.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Evencorp - Services</title>
      <meta name="description" content="Servicios que ofrece evencorp" />
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
        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Transporte</h3>
                <p>
                  Ofrecemos una alta gama de transportes terrestres a nivel
                  nacional. Realizamos tus traslados a cualquier parte del país,
                  contamos con unidades que permiten trasladar a grupos o
                  particulares, sea cual sea la ocasión: trabajo, eventos,
                  traslados internos corporativos, otros. <br />
                  <br />
                  Nuestra responsable labor, crea confianza y calidad logrando
                  que nuestro servicios de transporte ejecutivos sean de un alto
                  nivel.
                </p>
              </section>
            </section>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </section>
          </div>
        </div>

        <div className="row gtr-150">
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Catering y festejos.</h3>
                <p>
                  Ofrecemos servicios de catering, almuerzos, degustaciones,
                  catas, licores y café, mesas de dulces, snacks. todo lo
                  relacionado en alimentos para sus eventos reuniones, coffee
                  break. <br />
                  <br />
                  A esto le sumamos mobiliario según requerimientos y ocasión,
                  también brindamos estaciones temáticas para ofrecer momentos
                  especiales dentro del área laboral. <br />
                  <br />
                  Tenemos el mobiliario para su momento especial, celebraciones,
                  reuniones corporativas, eventos infantiles, convenciones, nos
                  adaptamos a las necesidades de nuestros clientes.
                </p>
              </section>
            </section>
          </div>
        </div>

        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Sonido, estructuras y video profesional.</h3>
                <p>
                  Ofrecemos sonido de alta gama profesional, luces robóticas
                  estructuras trust, tarimas, instalaciones de TV y pantallas
                  LED para la proyección de videos. <br />
                  <br />
                  Un personal de trayectoria en animación y musicalización para
                  todo tipo de evento.
                </p>
              </section>
            </section>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
            </section>
          </div>
        </div>

        <div className="row gtr-150">
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Producción audiovisual.</h3>
                <p>
                  Ofrecemos servicios en la realización de proyectos y registros
                  audiovisuales, para tus eventos, sea cual sea la ocasión:
                  corporativa, recreativa o documental. <br />
                  <br />
                  Nuestro personal calificado de alta experiencia dejara
                  inmortalizado y registrado esos momentos y ocasiones que son
                  importantes para tu empresa.
                </p>
              </section>
            </section>
          </div>
        </div>

        <div className="row gtr-150">
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Protocolo, logística y levantamiento de data..</h3>
                <p>
                  Tenemos personal que se encarga de la producción, la logística
                  y el protocolo en las distintas etapas de tu evento o reunión
                  corporativa. Control de ingreso y accesos actividades
                  protocolares. <br />
                  <br />
                  Realizamos el levantamiento de datos, encuestas, de diferentes
                  eventos o actividades corporativas.
                </p>
              </section>
            </section>
          </div>
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic05} alt="" />
              </span>
            </section>
          </div>
        </div>

        <div className="row gtr-150">
          <div className="col-6 col-12-medium imp-medium">
            <section id="content">
              <span className="image fit">
                <img src={pic06} alt="" />
              </span>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Recreación.</h3>
                <p>
                  Contamos con un staff capacitado y preparado en el área de la
                  recreación y la educación experiencial, los cuales desarrollan
                  distintas dinámicas durante todo el año y están listos para
                  divertir tanto a niños como adultos: Pinta caras, globo magia,
                  actividades recreativas, actividades teatrales, show de
                  personajes, actividades deportivas, entre otras
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
