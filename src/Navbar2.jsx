import React from 'react';
// import navbar from '../src/images/logo.jpg';
import {NavLink} from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Navbar=()=>{
    return (
        <>
        <div className="container-fluid nav-bg ">
            <div className="row">
                <div className="col-sm-12">   
        <nav className="navbar navbar-expand-lg navbar-light bg ">
  <div className="container-fluid">
    {/* <NavLink className="navbar-brand" to="/"><img src={navbar} height='40px' width='130px' alt='logo'></img></NavLink> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
        <NavDropdown title="LANGUAGE" id="basic-nav-dropdown">
        <NavDropdown.Item href="/german">German Language</NavDropdown.Item>
        <NavDropdown.Item href="/japan">Japanese Language</NavDropdown.Item>
        <NavDropdown.Item href="/spanish">Spanish Language</NavDropdown.Item>
        <NavDropdown.Item href="/french">French Language</NavDropdown.Item>
        <NavDropdown.Item href="/ielts">IELTS</NavDropdown.Item>
      </NavDropdown>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link job" to="/about">JOB OPPORTUNITY</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contact">BLOG</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu-active" className="nav-link" to="/contact">CONTACT US</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
    );
};
export default Navbar;