import React from 'react';
import {NavLink} from 'react-router-dom';
import *as ReactBootStrap from "react-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";
import AboutL from './AboutL';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Course2 from './Course2';

const Navbar2=()=>{
    return (
        <>
        <div className="container-fluid nav-bg ">
            <div className="row">
            <ReactBootStrap.Navbar  variant="dark" defaultActiveKey="/home" className="navn" >
    
    <ReactBootStrap.Nav bg='dark' variant="dark" className="mr-auto" defaultActiveKey="/home">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      <ReactBootStrap.NavLink href='./' className='color' ><h5><b>HOME</b></h5></ReactBootStrap.NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ReactBootStrap.NavLink href='./contact' ><h5><b>CONTACT</b></h5></ReactBootStrap.NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      <NavDropdown title="LANGUAGE" id="basic-nav-dropdown">
        <NavDropdown.Item className='itms' href="/german">German Language</NavDropdown.Item>
        <NavDropdown.Item href="/japan">Japanese Language</NavDropdown.Item>
        <NavDropdown.Item href="/spanish">Spanish Language</NavDropdown.Item>
        <NavDropdown.Item href="/french">French Language</NavDropdown.Item>
        <NavDropdown.Item href="/ielts">IELTS</NavDropdown.Item>
      </NavDropdown>

      

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ReactBootStrap.NavLink href="#pricing"><h5><b>JOB OPPORTUNITY</b></h5></ReactBootStrap.NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <ReactBootStrap.NavLink href="#pricing"><h5><b>BLOG </b></h5></ReactBootStrap.NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
   
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar>
</div>
</div>
</>
    );


};
const Routes = (
  <BrowserRouter>
    <div>
      <switch>
        <Route path='/' component={AboutL} exact={true}/>

      </switch>
    </div>
  </BrowserRouter>
)
export default Navbar2;
export {Routes};
