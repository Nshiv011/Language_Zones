import React from 'react';
import Kiki from "../src/Images/Kiki.png"
import facebook from '../src/Images/facebook-logo.png';
import linkdin from '../src/Images/linkedin (1).png';
import twiter from '../src/Images/twitter (1).png';




const Footer=()=>{
    return(
<>

<div className="container-fluid footer">
<div className="row">
<div className='col-sm-6'>
<div className="leave">
    <h1 className='note'> Leave us quick note</h1>
    <div class="container">
    <div class="row">
    <div class="col-sm-4">

    <form className='form1'  >
        <input type="text" 
        placeholder='Name' 
        className='formbody' 
        name='name'
        // value={this.state.name}
        ></input><br/>

        <input type="email" 
        placeholder='Email' 
        className='formbody' 
        name='email'></input><br/>

        <input type="number" 
        placeholder='Mobile' 
        className='formbody' 
        name='phone'></input><br/>

        <input type="text" placeholder='Choose Course' className='formbody' name='course'></input><br/>
        <button className='formbutton'> Submit</button>
    </form>

    
    </div>
    <div class='col-sm-6 '>
        <p className='fbody'>Language Zone Dehradun is a best foreign Language training provider in Dehradun 
Uttarakhand. We provide Japanese, French, Spanish,
 German & IELTS Language course training Language Zone Dehradun is a best foreign Language training provider in Dehradun 
</p>
    </div>
    </div>
    </div>
</div>
</div>

<div className='col-sm-3 body'>
    <h1 className='location'>Location</h1>
    <p className="locate"><a href="https://g.page/BrillicaServices?share">2nd floor, above suvidha Supermarket<br/>
Patel Nagar, Dehradun,<br/>
Uttarakhand 248001</a>
</p>
<p className= 'phone'><i class="fa fa-phone fa-2 rem "></i>&nbsp;<a href="tel:+91 88821-40688"> +91 88821-40688</a>  | <a href="tel:+91 88821-40688">  +91 90840-63259</a></p>
<p className='email'><i class="fa fa-phone fa-2 rem"></i>&nbsp;&nbsp;&nbsp;<a href="mailt0:info@brillicaservices.com">info@brillicaservices.com </a></p>

        <a href=""><img src={facebook} className="facebook"/></a>
        <a href="https://www.linkedin.com/company/languagezone-learn-any-foreign-languages-in-dehradun/?viewAsMember=true">  <img  src={linkdin} className="linkdin"/></a>
        <a href=""> <img src={twiter} className="twiter"/></a>
</div>

<div className='col-sm-2'>
<img src={Kiki} className='language_footer'/>
<p className='kiki'>LANGUAGE ZONE A UNIT OF BRILLICA SERVICES PVT.LTD.</p>
</div>

<div className='container-fluid'>
    <div className='row'>
        <div className='col-sm-6'>
            <p className='privacy'>Privacy Policy  |  Terms and Conditions</p>
        </div>
        <div className='col-sm-6'>
            <p className='last_language'>Language Zone 2021</p>
        </div>
    </div>
</div>


</div>
</div>

</>
    );
};
export default Footer;
