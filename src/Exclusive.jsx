import React from 'react';

import card1 from './Images/Outline.png'
import card2 from './Images/instructor.png'
import card3 from './Images/certificate.png'

import { NavLink } from 'react-router-dom';


const Exclusive=()=>{
    return (
<>
<div className='container-fluid'>
    <div className='row'>
        <div className='exclusive'>
        <div className='exclusive1'>
            <p>EXCLUSIVE FEATURE</p>
        </div>
        </div>
    </div>
</div>
<div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4 ecard">
                    


                    <div className="col-md-4 ">
                            <div class="ecard1">
                                <img src={card1} className="icard1" />
                                <div className="card-body">
                                        
                                        <h4 className='duration2'>Exceptional Faculty</h4>
                                        <p className='pduration'>Exceptional Faculty

Our faculty is from the best institutes around the world such as IITD, Stanford and more. They also have work experience in tech giants like Amazon, Facebook, Adobe which makes them exceptional.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 ">
                            <div class="ecard2">
                                <img src={card2} className="icard1"/>
                                <div className="card-body">
                                        
                                        <h4 className='duration2'>Mentor Support</h4>
                                    <p className='pduration'>Mentor Support

An incredible mentor support is provided where 1 teaching assistant is assigned to 10 students. The TA’s are top performers alumni dedicated to support and clear doubts at any point of time.</p><br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 ">
                            <div class="ecard3">
                                <img src={card3} className="icard3"/>
                                <div className="card-body">
                                        
                                        <h4 className='duration3'>Get Secured with Certificate</h4>
                                    <p className='pduration1'>Get Secured with Certificate

The student will be provided the certificates which are signed by instructors and have our logo on it which will help them secure their career and increase job prospects with certificates signed by us.</p>
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
export default Exclusive;