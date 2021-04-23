import React from 'react';
import heroimg from '../src/Images/heroimg.png';
import map from '../src/Images/Capture.png';
import GoogleApiWrapper from './Google';
import Icon from './Icons'
const ContactL=()=>{
    return(
        <>
       <div className='container-fluid'>
           <div className='row '>
                <div className='heroimg'>
                    <img src={heroimg} className='heroimage'/>
                    <Icon/>


                </div>
           </div>
       </div>
       <div className="container-fluid ">
            <div className="row con">
            <div className="contact-upper">

            </div>
                <div className="contact-lower">
                    <div className='content'>

                        <h1 className='contact-abt'> CONTACT US</h1>
                        <p  className='contact-abt11' ><a href="tel:+91-8882140688">+91-8882140688 </a>  |<a href="tel:+91-8882140688">  +91-6398330089 </a>  | <a href="tel:+91-8882140688"> +91-9084063259</a></p>
                        
                        <div className='container'>
                        <div className='row'>
                            <div className='block'>
                                    <div class='border1'>
                                        <p className='info'>Mail Us</p>
                                        <p className="info"><a href="mailto:info@brillicaservices.com">info@brillicaservices.com</a> </p>
                                    </div>                                
                            </div>
                        </div>
                        </div>


                        <div className='container-fluid'>
                        <div className='row'>
                            <div className='block2'>
                                    <div className='border2'>
                                    <div className='container-fluid'>
                                    <div className='row'>
                                    <div className='col-sm-5'>
                                        <p className='info2'>Mailing Address</p>
                                        <p className='info3'>Foreign Language Training-Japanese
language Training,Spanish language
Training,German language Training,
IELTS coaching course in 
Dehradun,Uttarakhand</p>

<h4 className='info4'>DEHRADUN</h4>
<p className='info5'><b>2nd floor, above suvidha Supermarket,<br/> Patel Nagar, Dehradun, <br/>Uttarakhand 248001</b></p>
</div>
<div className='col-sm-6 map'>
{/* <img src={map} className='map'/> */}
<GoogleApiWrapper/>

</div>
                                    </div> 
                                    </div>                               
                            </div>
                            </div>
                        </div>
                        </div>
                        

                    </div>
                </div>
                
                


            </div>
        </div>
        </>
    );
};
export default ContactL;