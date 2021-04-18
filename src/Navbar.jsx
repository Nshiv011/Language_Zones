import React from 'react';
import lang from "../src/Images/Component 1 – 1.png";
import facebook from '../src/Images/facebook-logo.png';
import linkdin from '../src/Images/linkedin (1).png';
import twiter from '../src/Images/twitter (1).png';
import ilets from '../src/Images/ilets.png';

const Navbar=()=>{
    return (
        <>
<div className="container Component-33-1">
        <div className="row">
        <a href="./">
        <img src={lang} class="Component-1-1"/>
        </a>
     <div className='no'>
     

         <p className="no"><i class="fa fa-phone fa-2 rem"></i> &nbsp; <a href="tel:+91-88821-40688">+91 88821-40688</a> &nbsp;&nbsp; |&nbsp;&nbsp;<a href="tel:+91-88821-40688"> +91 90840-63259</a> </p>
     </div>
     <div className="Component-3-1">
         <img src={facebook} className="Path-4"/>
         <a href="https://www.linkedin.com/company/languagezone-learn-any-foreign-languages-in-dehradun/?viewAsMember=true">  <img  src={linkdin} className="Path-2"/></a>
         <img src={twiter} className="Path-3"/>
         
         

     </div>
     <div className="Component-4-1 ">
     <h1 className="heading1">PAY ONLINE</h1>
     </div>
     <div>
     <img src={ilets}
class="IELTS-New-Logo"/> 
     </div>
        </div>
    
</div>

        </>
    );
};
export default Navbar;