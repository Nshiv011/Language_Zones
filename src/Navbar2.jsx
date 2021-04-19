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
        <div className="container-fluid nav_bg ">
            <div className="row"> 
            <div className="col-lg-12 col-sm-8 col">
            <ReactBootStrap.Navbar  className="navn" variant="pills" defaultActiveKey="/home"  >
    
    <ReactBootStrap.Nav bg='dark' variant="dark" className="mr-auto" defaultActiveKey="/home">
    <ReactBootStrap.NavLink href='./' ><h5><b>HOME</b></h5></ReactBootStrap.NavLink>
    
    <NavDropdown title="LANGUAGE" id="basic-nav-dropdown" className="drop">
        <NavDropdown.Item className='itms' href="/german">German Language</NavDropdown.Item>
        <NavDropdown.Item href="/japan">Japanese Language</NavDropdown.Item>
        <NavDropdown.Item href="/spanish">Spanish Language</NavDropdown.Item>
        <NavDropdown.Item href="/french">French Language</NavDropdown.Item>
        <NavDropdown.Item href="/ielts">IELTS</NavDropdown.Item>
    </NavDropdown>

      
<ReactBootStrap.NavLink href="#pricing"><h5><b>JOB OPPORTUNITY</b></h5></ReactBootStrap.NavLink>
      
      <ReactBootStrap.NavLink href="#pricing"><h5><b>BLOG </b></h5></ReactBootStrap.NavLink>
      <ReactBootStrap.NavLink href='./contact' ><h5><b>CONTACT</b></h5></ReactBootStrap.NavLink>
      
   
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar>



  {/* navbar */}


</div>
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
