import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({mode, setMode}) => {

  const setColor = (e)=>{
      setMode(mode === 'light' ? 'dark' : 'light');
  }
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsViews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        
          
        
      </ul>
      
    </div>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onChange={setColor}/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
  </div>

  
</nav>
      </div>
    )
  
}

export default Navbar
