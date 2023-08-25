import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">{props.aboutxt}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Contact</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        <div className={`form-check form-switch  mr-6 text-${props.mode ==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>

      </div>
    </div>
  </nav>
  );
  
}


    // Define your prop types here
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        aboutxt: PropTypes.number.isRequired
        // Define more prop types as needed
    }

// Navbar.propTypes = {
//     title: propTypes.string,
//     aboutxt: propTypes.string
// }
