import React from 'react';
// import heroimg from "../src/Images/hero.png";
const Hero=()=>{
    return (
<>
<div className='container-fluid heroo'>
    <div className='row'>
        <div className="col-lg-12 col-sm-12 hero">

            {/* <img className='hero' src={heroimg} /> */}
            <div className='icon'>

                <div className='form'>
                <i class="fa fa-wpforms fa-2x"></i>
                </div>

                <div className='whatsapp'>
                <a href="https://api.whatsapp.com/send/?phone=918979544473&text&app_absent=0">
                <i class="fa fa-whatsapp fa-2x"></i>
                </a>
                </div>

                <div className='message'>
                <a href="mailto:info@brillicaservices.com">
                <i class="fa fa-envelope fa-2x"></i>
                </a>
                </div>

            </div>
            
        </div>
    </div>
    <div className="text">
    <div className="text-block">
                <h4>Our Newly Introduced Course</h4>
            </div>
            </div>
</div>



</>
    );
};
export default Hero;