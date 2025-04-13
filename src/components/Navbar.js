import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ mode, setMode }) => {

  const setColor = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsViews</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          </ul>
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="darkModeSwitch"
              onChange={setColor} 
              checked={mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
