import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      {/* <li>
        <a href="/" className="icon brands alt fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-facebook-f">
          <span className="label">Facebook</span>
        </a>
      </li> */}
      {/* <li>
        <a href="/" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li> */}
      <li>
        <a href="https://www.instagram.com/organizacionevencorp/"  target="_blank" className="icon brands alt fa-instagram footer-text-color footer-li-flex">
          <span className="label">Instagram</span> <p>OrganizacionEvencorp</p>
        </a>
      </li>
      {/* <li>
        <a href="/" className="icon brands alt fa-github">
          <span className="label">GitHub</span>
        </a>
      </li> */}
      <li>
        <a href="mailto:organizacionevencorp@gmail.com?subject=Mail from Our Site"  target="_blank" className="icon solid alt fa-envelope footer-text-color footer-li-flex">
          <span className="label">Email</span><p> organizacionevencorp@gmail.com</p>
        </a>
      </li>

      <li>
        <div className="icon solid alt fa-phone footer-text-color footer-li-flex">
          <span className="label">Phone</span><p> +58(414)100-1750 / +58(212)264-7335</p>
        </div>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; 2021 Evencorp. Todos los derechos reservados.</li>
      {/* <li>
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </li>
      <li>
        Demo Images: <a href="https://unsplash.com">Unsplash</a>
      </li> */}
    </ul>
  </footer>
)

export default Footer
