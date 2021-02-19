import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link as ScrollLink } from 'react-scroll'

const Four = props => (
  <section
  >
    <Fade up>
      <section id="four" className="wrapper style1 special fade-up">
        <div className="container">
          <header className="major">
            <h2>Nuestros Servicios</h2>
            {/* <p>
            Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu
            consequat
          </p> */}
          </header>
          <div className="box alt">
            <div className="row gtr-uniform">
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-bus"></span>
                <h3>Transporte</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-birthday-cake"></span>
                <h3>Catering y Festejos</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-audio-description"></span>
                <h3>Sonido, Estructuras y Video Profesional</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-camera"></span>
                <h3>Producción Audiovisual</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-file"></span>
                <h3>Protocolo, Logística y Levantamiento de Data</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
              <section className="col-4 col-6-medium col-12-xsmall">
                <span className="icon solid alt major fa-child"></span>
                <h3>Recreación</h3>
                {/* <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p> */}
              </section>
            </div>
          </div>
          <footer className="major">
            <ul className="actions special">
              <li>
                <a href="/servicios" className="button">
                  Ver más
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </Fade>
    
    </section>
)

export default Four
