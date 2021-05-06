import React from 'react';
import Icon from './Icon';







const Hero=()=>{
    return (
<>

<div className='container-fluid heroo'>
    <div className='row'>
        <div className="col-lg-12 col-sm-12 hero">
        <Icon/>

            {/* <img className='hero' src={heroimg} /> */}
            
            
        </div>
    </div>
    
</div>

<div className='container-fluid'>
<div className='row tt'>
<div className="text">
    <div className="text-block">
                <h4>Our Newly Introduced Course</h4>
            </div>
            </div>
</div>
</div>


</>
    );
};
export default Hero;