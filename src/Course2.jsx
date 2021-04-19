import React from 'react';
import card1 from './Images/Component 9 – 1.png'
import card2 from './Images/Component 10 – 1.png'
import card3 from './Images/Component 11 – 1.png'
import card4 from './Images/Component 12 – 1.png'
import card5 from './Images/Component 13 – 1.png'
import card11 from './Images/Component 40 – 1.png'
import card12 from './Images/Component 42 – 1.png'
import card13 from './Images/Component 44 – 1.png'
import card14 from './Images/Component 46 – 1.png'
import card15 from './Images/Component 48 – 1.png'
import { NavLink } from 'react-router-dom';
const Course2=(props)=>{
    return(
<>
<br/>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <div className="row gy-4">
                    


                    <div className="col-sm-4 card1">
                            <div class="card">
                                <img src={card1} height='150px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                        <p className="Component40">German Language<br/></p><p>(Deutsche Sprache)</p>
                                        <h4 className='duration'>Duration - 4-12 Months</h4>
                                    <NavLink to="/german" className="btn btn-success btn-botton">
                                        View More
                                    </NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4 card1">
                            <div class="card">
                                <img src={card2} height='150px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                <p className="Component40">Japanese Language<br/></p><p>(日本語)</p>
                                        <h4 className='duration'>Duration - 4-18 Months</h4>
                                    <NavLink to="/japan" className="btn btn-success btn-botton">
                                        View More
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 card1">
                            <div class="card">
                                <img src={card3} height='150px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                <p className="Component40">Spanish Language<br/></p><p>(Lengua española)</p>
                                        <h4 className='duration'>Duration - 3-9 Months</h4>
                                    <NavLink to="/spanish" className="btn btn-success btn-botton">
                                        View More
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 card1">
                            <div class="card">
                                <img src={card4} height='150px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                <p className="Component40">French Language<br/></p><p>(Langue française)</p>
                                        <h4 className='duration'>Duration - 3-9 Months</h4>
                                    <NavLink to="/french" className="btn btn-success btn-botton">
                                        View More
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 card1">
                            <div class="card">
                                <img src={card5} height='150px' width='200px' className="card-img-top" alt=""/>
                                <div className="card-body">
                                <p className="Component45">IELTS<br/></p>
                                        <h4 className='duration'>Duration - 1-2 Months</h4>
                                    <NavLink to="/ielts" className="btn btn-success btn-botton">
                                        View More
                                    </NavLink>
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
export default Course2;